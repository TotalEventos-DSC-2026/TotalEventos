import type {
  ConsultarGradeSessoesFiltros,
  GradeSessoesResultado,
  SessoesRepository,
} from './types';

export function createConsultarGradeSessoes(
  sessoesRepository: SessoesRepository,
): (filtros: ConsultarGradeSessoesFiltros) => GradeSessoesResultado {
  return function consultarGradeSessoes({
    eventoId,
    data,
    horario,
    sala,
  }): GradeSessoesResultado {
    const sessoes = sessoesRepository.consultarGrade({
      eventoId,
      data,
      horario,
      sala,
    });

    return {
      eventoId,
      sessoes,
      ...(sessoes.length === 0 && {
        mensagem: 'A programação ainda não foi disponibilizada.',
      }),
    };
  };
}
