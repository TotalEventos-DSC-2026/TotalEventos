import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { AddressInfo } from 'node:net';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { InscricaoStatus } from '../src/common/enums/inscricao-status.enum';
import { IngressoStatus } from '../src/common/enums/ingresso-status.enum';
import { InscricaoJaRealizadaException } from '../src/common/exceptions/inscricao-ja-realizada.exception';
import { InscricaoNaoConfirmadaException } from '../src/common/exceptions/inscricao-nao-confirmada.exception';
import { InscricaoNaoEncontradoException } from '../src/common/exceptions/inscricao-nao-encontrado.exception';
import { IngressoJaUtilizadoException } from '../src/common/exceptions/ingresso-ja-utilizado.exception';
import { IngressoNaoDisponivelException } from '../src/common/exceptions/ingresso-nao-disponivel.exception';
import { SobrepopulacaoDetectadaException } from '../src/common/exceptions/sobrepopulacao-detectada.exception';
import { Ingresso } from '../src/modules/acessos/entities/ingresso.entity';
import type { IngressosRepository } from '../src/modules/acessos/repositories/ingressos.repository.interface';
import { AcessosService } from '../src/modules/acessos/services/acessos.service';
import { Inscricao } from '../src/modules/inscricoes/entities/inscricao.entity';
import type { InscricoesRepository } from '../src/modules/inscricoes/repositories/inscricoes.repository.interface';
import { InscricoesService } from '../src/modules/inscricoes/services/inscricoes.service';
import { SessaoPalestra } from '../src/modules/lotacao/entities/sessao-palestra.entity';
import type { SessoesLotacaoRepository } from '../src/modules/lotacao/repositories/sessoes-lotacao.repository.interface';

test('módulos Nest resolvem os controllers e dependências do check-in', async () => {
  const module = await Test.createTestingModule({ imports: [AppModule] }).compile();
  await module.close();
});

test('servidor Nest expõe saúde e controllers de check-in', async () => {
  const module = await Test.createTestingModule({ imports: [AppModule] }).compile();
  const app = module.createNestApplication();

  try {
    await app.listen(0, '127.0.0.1');
    const address = app.getHttpServer().address() as AddressInfo;
    const baseUrl = `http://127.0.0.1:${address.port}`;

    const health = await fetch(`${baseUrl}/health`);
    assert.equal(health.status, 200);
    assert.deepEqual(await health.json(), { status: 'ok', name: 'TotalEventos' });

    const invalidFilters = await fetch(
      `${baseUrl}/eventos/evento-1/sessoes?data=2026-02-30`,
    );
    assert.equal(invalidFilters.status, 400);

    const invalidCheckIn = await fetch(`${baseUrl}/acessos/check-in`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({}),
    });
    assert.equal(invalidCheckIn.status, 400);

    const missingInscricao = await fetch(`${baseUrl}/inscricoes/inexistente/check-in`, {
      method: 'POST',
    });
    assert.equal(missingInscricao.status, 404);
  } finally {
    await app.close();
  }
});

test('inscrição confirmada realiza check-in e persiste o estado', async () => {
  const inscricao = new Inscricao(
    'insc-1',
    'part-1',
    'sessao-1',
    InscricaoStatus.CONFIRMADA,
    new Date(),
    new Date(0),
  );
  const saved: Inscricao[] = [];
  const repository: InscricoesRepository = {
    async findById() {
      return inscricao;
    },
    async save(value) {
      saved.push(value);
      return value;
    },
  };

  const result = await new InscricoesService(repository).realizarCheckIn('insc-1');

  assert.equal(result.status, InscricaoStatus.CHECK_IN_REALIZADO);
  assert.equal(result.message, 'Check-in realizado com sucesso.');
  assert.equal(saved.length, 1);
  assert.ok(result.updatedAt.getTime() > 0);
});

test('inscrição com check-in feito gera conflito e não é persistida novamente', async () => {
  const inscricao = new Inscricao(
    'insc-1',
    'part-1',
    'sessao-1',
    InscricaoStatus.CHECK_IN_REALIZADO,
    new Date(),
    new Date(),
  );
  let saveCalls = 0;
  const repository: InscricoesRepository = {
    async findById() {
      return inscricao;
    },
    async save(value) {
      saveCalls += 1;
      return value;
    },
  };

  await assert.rejects(
    new InscricoesService(repository).realizarCheckIn('insc-1'),
    InscricaoJaRealizadaException,
  );
  assert.equal(saveCalls, 0);
});

test('inscrição não confirmada não realiza check-in nem persiste alteração', async () => {
  const inscricao = new Inscricao(
    'insc-1',
    'part-1',
    'sessao-1',
    InscricaoStatus.PENDENTE,
    new Date(),
    new Date(),
  );
  let saveCalls = 0;
  const repository: InscricoesRepository = {
    async findById() {
      return inscricao;
    },
    async save(value) {
      saveCalls += 1;
      return value;
    },
  };

  await assert.rejects(
    new InscricoesService(repository).realizarCheckIn('insc-1'),
    InscricaoNaoConfirmadaException,
  );
  assert.equal(saveCalls, 0);
  assert.equal(inscricao.getStatus(), InscricaoStatus.PENDENTE);
});

test('inscrição ausente retorna erro de não encontrado', async () => {
  const repository: InscricoesRepository = {
    async findById() {
      return null;
    },
    async save(value) {
      return value;
    },
  };

  await assert.rejects(
    new InscricoesService(repository).realizarCheckIn('inexistente'),
    InscricaoNaoEncontradoException,
  );
});

test('ingresso válido realiza check-in e incrementa a lotação', async () => {
  const ingresso = new Ingresso(
    'ing-1',
    'part-1',
    'sessao-1',
    IngressoStatus.EMITIDO,
    'qr-1',
    new Date(),
    new Date(0),
  );
  const sessao = new SessaoPalestra('sessao-1', 10, 5, new Date(0));
  let savedIngressos = 0;
  let savedSessoes = 0;
  const ingressosRepository: IngressosRepository = {
    async findByCodigoQr() {
      return ingresso;
    },
    async save(value) {
      savedIngressos += 1;
      return value;
    },
  };
  const sessoesRepository: SessoesLotacaoRepository = {
    async findById() {
      return sessao;
    },
    async save(value) {
      savedSessoes += 1;
      return value;
    },
  };

  const result = await new AcessosService(
    ingressosRepository,
    sessoesRepository,
  ).realizarCheckIn('qr-1');

  assert.equal(result.status, IngressoStatus.UTILIZADO);
  assert.equal(result.ingressoId, 'ing-1');
  assert.equal(sessao.getOcupacaoAtual(), 6);
  assert.equal(savedIngressos, 1);
  assert.equal(savedSessoes, 1);
});

test('ingresso já utilizado não incrementa ocupação nem é persistido', async () => {
  const ingresso = new Ingresso(
    'ing-1',
    'part-1',
    'sessao-1',
    IngressoStatus.UTILIZADO,
    'qr-1',
    new Date(),
    new Date(),
  );
  const sessao = new SessaoPalestra('sessao-1', 10, 5, new Date());
  let saveCalls = 0;
  const ingressosRepository: IngressosRepository = {
    async findByCodigoQr() {
      return ingresso;
    },
    async save(value) {
      saveCalls += 1;
      return value;
    },
  };
  const sessoesRepository: SessoesLotacaoRepository = {
    async findById() {
      return sessao;
    },
    async save(value) {
      saveCalls += 1;
      return value;
    },
  };

  await assert.rejects(
    new AcessosService(ingressosRepository, sessoesRepository).realizarCheckIn('qr-1'),
    IngressoJaUtilizadoException,
  );
  assert.equal(sessao.getOcupacaoAtual(), 5);
  assert.equal(saveCalls, 0);
});

test('ingresso cancelado não pode ser utilizado', async () => {
  const ingresso = new Ingresso(
    'ing-1',
    'part-1',
    'sessao-1',
    IngressoStatus.CANCELADO,
    'qr-1',
    new Date(),
    new Date(),
  );

  assert.throws(() => ingresso.marcarComoUtilizado(), IngressoNaoDisponivelException);
});

test('sessão lotada bloqueia check-in e preserva ocupação e ingresso', async () => {
  const ingresso = new Ingresso(
    'ing-1',
    'part-1',
    'sessao-1',
    IngressoStatus.EMITIDO,
    'qr-1',
    new Date(),
    new Date(),
  );
  const sessao = new SessaoPalestra('sessao-1', 2, 2, new Date());
  let saveCalls = 0;
  const ingressosRepository: IngressosRepository = {
    async findByCodigoQr() {
      return ingresso;
    },
    async save(value) {
      saveCalls += 1;
      return value;
    },
  };
  const sessoesRepository: SessoesLotacaoRepository = {
    async findById() {
      return sessao;
    },
    async save(value) {
      saveCalls += 1;
      return value;
    },
  };

  await assert.rejects(
    new AcessosService(ingressosRepository, sessoesRepository).realizarCheckIn('qr-1'),
    SobrepopulacaoDetectadaException,
  );
  assert.equal(sessao.getOcupacaoAtual(), 2);
  assert.equal(ingresso.getStatus(), IngressoStatus.EMITIDO);
  assert.equal(saveCalls, 0);
});
