import type { SessoesRepository } from '../../repositories/sessoes-repository';
import type { Sessao } from './types';

interface ConsultarGradeSessoesInput {
  eventoId: string;
  data?: string;
  horario?: string;
  sala?: string;
}

interface ConsultarGradeSessoesResponse {
  eventoId: string;
  sessoes: Sessao[];
  mensagem?: string;
}

export function createConsultarGradeSessoes(repository: SessoesRepository) {
  return ({
    eventoId,
    data,
    horario,
    sala,
  }: ConsultarGradeSessoesInput): ConsultarGradeSessoesResponse => {
    const sessoes = repository
      .findByEventoId(eventoId)
      .filter((sessao) => sessao.publicada && sessao.ativa)
      .filter((sessao) => !data || sessao.data === data)
      .filter(
        (sessao) =>
          !horario || (sessao.horaInicio <= horario && horario < sessao.horaFim),
      )
      .filter(
        (sessao) =>
          !sala || sessao.sala.toLocaleLowerCase() === sala.trim().toLocaleLowerCase(),
      );

    return sessoes.length
      ? { eventoId, sessoes }
      : {
          eventoId,
          sessoes,
          mensagem: 'A programação ainda não foi disponibilizada.',
        };
  };
}
