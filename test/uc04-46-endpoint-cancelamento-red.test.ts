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

const databasePath = join(process.cwd(), 'test', '.red-uc04-46.sqlite');
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
    new Inscricao('insc-uc04-46', 'participante-46', 'sessao-46', InscricaoStatus.CONFIRMADA, new Date(0), new Date(0)),
  );
});

after(async () => {
  await app?.close();
  for (const suffix of ['', '-shm', '-wal']) rmSync(`${databasePath}${suffix}`, { force: true });
});

test('endpoint cancela inscricao confirmada e persiste o novo estado', async () => {
  const response = await fetch(`${baseUrl}/inscricoes/insc-uc04-46/cancelar`, { method: 'POST' });
  assert.ok([200, 204].includes(response.status), `Esperava sucesso da proposta de cancelamento, recebeu ${response.status}`);
  const persisted = await getApp().get<InscricoesRepository>(INSCRICOES_REPOSITORY).findById('insc-uc04-46');
  assert.equal(persisted?.getStatus(), InscricaoStatus.CANCELADA);
});