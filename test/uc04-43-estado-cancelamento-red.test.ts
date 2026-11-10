import assert from 'node:assert/strict';
import { test } from 'node:test';
import { InscricaoStatus } from '../src/common/enums/inscricao-status.enum';
import { Inscricao } from '../src/modules/inscricoes/entities/inscricao.entity';

test('inscricao confirmada transita explicitamente para CANCELADA', () => {
  const inscricao = new Inscricao('insc-43', 'participante-43', 'sessao-43', InscricaoStatus.CONFIRMADA, new Date(0), new Date(0));
  const cancelar = (inscricao as unknown as { cancelar?: () => void }).cancelar;
  assert.equal(typeof cancelar, 'function', 'Inscricao deve expor a transicao de cancelamento');
  if (typeof cancelar === 'function') {
    cancelar.call(inscricao);
    assert.equal(inscricao.getStatus(), InscricaoStatus.CANCELADA);
    assert.ok(inscricao.updatedAt.getTime() > 0);
  }
});