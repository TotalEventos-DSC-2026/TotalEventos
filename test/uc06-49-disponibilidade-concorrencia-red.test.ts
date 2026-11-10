import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SessaoPalestra } from '../src/modules/lotacao/entities/sessao-palestra.entity';

test('liberacoes concorrentes de vagas mantem ocupacao dentro da capacidade', async () => {
  const sessao = new SessaoPalestra('sessao-49', 2, 2, new Date(0));
  const liberarVaga = (sessao as unknown as { liberarVaga?: () => void }).liberarVaga;
  assert.equal(typeof liberarVaga, 'function', 'Sessao deve expor operacao concorrente de liberacao de vaga');
  if (typeof liberarVaga === 'function') {
    await Promise.all([Promise.resolve().then(() => liberarVaga.call(sessao)), Promise.resolve().then(() => liberarVaga.call(sessao))]);
    assert.equal(sessao.getOcupacaoAtual(), 0);
    assert.ok(sessao.getOcupacaoAtual() >= 0 && sessao.getOcupacaoAtual() <= 2);
  }
});