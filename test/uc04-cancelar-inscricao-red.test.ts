import assert from 'node:assert/strict';
import { rmSync } from 'node:fs';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { InscricaoStatus } from '../src/common/enums/inscricao-status.enum';
import { Inscricao } from '../src/modules/inscricoes/entities/inscricao.entity';
import { INSCRICOES_REPOSITORY, type InscricoesRepository } from '../src/modules/inscricoes/repositories/inscricoes.repository.interface';
import { SESSOES_LOTACAO_REPOSITORY, type SessoesLotacaoRepository } from '../src/modules/lotacao/repositories/sessoes-lotacao.repository.interface';
import { SessaoPalestra } from '../src/modules/lotacao/entities/sessao-palestra.entity';

const databasePath = join(process.cwd(), 'test', '.red-uc04-25.sqlite');
let app: INestApplication | undefined;
let baseUrl: string;
const getApp = (): INestApplication => {
  if (!app) throw new Error('Aplicacao E2E ainda nao foi iniciada.');
  return app;
};

before(async () => {
  process.env.DATABASE_PATH = databasePath;
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
  app = moduleRef.createNestApplication();
  await app.listen(0, '127.0.0.1');
  const address = getApp().getHttpServer().address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${address.port}`;
  await getApp().get<InscricoesRepository>(INSCRICOES_REPOSITORY).save(
    new Inscricao('insc-uc04-25', 'participante-25', 'sessao-25', InscricaoStatus.CONFIRMADA, new Date(0), new Date(0)),
  );
  await getApp().get<SessoesLotacaoRepository>(SESSOES_LOTACAO_REPOSITORY).save(
    new SessaoPalestra('sessao-25', 1, 1, new Date(0)),
  );
});

after(async () => {
  await app?.close();
  for (const suffix of ['', '-shm', '-wal']) rmSync(`${databasePath}${suffix}`, { force: true });
});

test('cancelar inscricao confirmada persiste o estado e devolve a vaga', async () => {
  const response = await fetch(`${baseUrl}/inscricoes/insc-uc04-25/cancelar`, { method: 'POST' });
  assert.ok([200, 204].includes(response.status), `Esperava sucesso da proposta de cancelamento, recebeu ${response.status}`);
  const inscricao = await getApp().get<InscricoesRepository>(INSCRICOES_REPOSITORY).findById('insc-uc04-25');
  const sessao = await getApp().get<SessoesLotacaoRepository>(SESSOES_LOTACAO_REPOSITORY).findById('sessao-25');
  assert.equal(inscricao?.getStatus(), InscricaoStatus.CANCELADA);
  assert.equal(sessao?.getOcupacaoAtual(), 0);
});