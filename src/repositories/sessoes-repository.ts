import type { Sessao } from '../modules/grade-sessoes/types';

export interface SessoesRepository {
  findByEventoId(eventoId: string): readonly Sessao[];
}

export function createSessoesRepository(
  sessoes: readonly Sessao[],
): SessoesRepository {
  return {
    findByEventoId(eventoId) {
      return sessoes.filter((sessao) => sessao.eventoId === eventoId);
    },
  };
}
