import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SessaoPalestra } from '../src/modules/lotacao/entities/sessao-palestra.entity';

test('liberar vaga apos cancelamento reduz ocupacao sem exceder capacidade', () => {
  const sessao = new SessaoPalestra('sessao-44', 2, 2, new Date(0));
  const liberarVaga = (sessao as unknown as { liberarVaga?: () => void }).liberarVaga;
  assert.equal(typeof liberarVaga, 'function', 'Sessao deve expor operacao de liberacao de vaga');
  if (typeof liberarVaga === 'function') {
    liberarVaga.call(sessao);
    assert.equal(sessao.getOcupacaoAtual(), 1);
    assert.equal(sessao.verificarDisponibilidadeVagas(), true);
  }
});