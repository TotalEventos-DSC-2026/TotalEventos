import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { IngressoStatus } from '../src/common/enums/ingresso-status.enum';
import { Ingresso } from '../src/modules/acessos/entities/ingresso.entity';
import { INGRESSOS_REPOSITORY, type IngressosRepository } from '../src/modules/acessos/repositories/ingressos.repository.interface';
import { SESSOES_LOTACAO_REPOSITORY, type SessoesLotacaoRepository } from '../src/modules/lotacao/repositories/sessoes-lotacao.repository.interface';
import { SessaoPalestra } from '../src/modules/lotacao/entities/sessao-palestra.entity';

const directory = mkdtempSync(join(tmpdir(), 'totaleventos-e2e-'));
process.env.DATABASE_PATH = join(directory, 'test.sqlite');
let app: INestApplication | undefined;
let baseUrl: string;
const getApp = (): INestApplication => {
  if (!app) throw new Error('Aplicação E2E ainda não foi iniciada.');
  return app;
};

before(async () => {
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
  app = moduleRef.createNestApplication();
  await app.listen(0, '127.0.0.1');
  const address = getApp().getHttpServer().address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${address.port}`;
  const sessions = getApp().get<SessoesLotacaoRepository>(SESSOES_LOTACAO_REPOSITORY);
  const tickets = getApp().get<IngressosRepository>(INGRESSOS_REPOSITORY);
  await sessions.save(new SessaoPalestra('sess-e2e', 1, 0, new Date(0)));
  await tickets.save(new Ingresso('ing-e2e', 'part-e2e', 'sess-e2e', IngressoStatus.EMITIDO, 'qr-e2e', new Date(0), new Date(0)));
});

after(async () => {
  await app?.close();
  rmSync(directory, { recursive: true, force: true });
});

test('check-in HTTP persiste ingresso e lotação juntos e rejeita duplicidade', async () => {
  const response = await fetch(`${baseUrl}/acessos/check-in`, {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ codigoQr: 'qr-e2e' }),
  });
  assert.equal(response.status, 201);
  assert.equal((await response.json() as { status: string }).status, IngressoStatus.UTILIZADO);

  const retry = await fetch(`${baseUrl}/acessos/check-in`, {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ codigoQr: 'qr-e2e' }),
  });
  assert.equal(retry.status, 409);
  const ticket = await getApp().get<IngressosRepository>(INGRESSOS_REPOSITORY).findByCodigoQr('qr-e2e');
  const session = await getApp().get<SessoesLotacaoRepository>(SESSOES_LOTACAO_REPOSITORY).findById('sess-e2e');
  assert.equal(ticket?.getStatus(), IngressoStatus.UTILIZADO);
  assert.equal(session?.getOcupacaoAtual(), 1);
});

test('inscrição inexistente retorna 404 pela rota HTTP', async () => {
  const response = await fetch(`${baseUrl}/inscricoes/nao-existe/check-in`, { method: 'POST' });
  assert.equal(response.status, 404);
});
