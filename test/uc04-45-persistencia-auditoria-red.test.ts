import assert from 'node:assert/strict';
import { test } from 'node:test';
import { InscricaoStatus } from '../src/common/enums/inscricao-status.enum';
import { Inscricao } from '../src/modules/inscricoes/entities/inscricao.entity';
import { InMemoryInscricoesRepository } from '../src/modules/inscricoes/repositories/in-memory-inscricoes.repository';
import { InscricoesService } from '../src/modules/inscricoes/services/inscricoes.service';

test('cancelamento persiste o estado e atualiza o registro da inscricao', async () => {
  const repository = new InMemoryInscricoesRepository();
  await repository.save(new Inscricao('insc-45', 'participante-45', 'sessao-45', InscricaoStatus.CONFIRMADA, new Date(0), new Date(0)));
  const service = new InscricoesService(repository);
  const cancelarInscricao = (service as unknown as { cancelarInscricao?: (id: string) => Promise<unknown> }).cancelarInscricao;
  assert.equal(typeof cancelarInscricao, 'function', 'Servico deve expor operacao de cancelamento persistivel');
  if (typeof cancelarInscricao === 'function') {
    await cancelarInscricao.call(service, 'insc-45');
    const persisted = await repository.findById('insc-45');
    assert.equal(persisted?.getStatus(), InscricaoStatus.CANCELADA);
    assert.ok((persisted?.updatedAt.getTime() ?? 0) > 0);
  }
});