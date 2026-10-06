export interface Sessao {
  id: string;
  eventoId: string;
  titulo: string;
  data: string;
  horaInicio: string;
  horaFim: string;
  sala: string;
  publicada: boolean;
  ativa: boolean;
}

export interface ConsultarGradeSessoesFiltros {
  eventoId: string;
  data?: string;
  horario?: string;
  sala?: string;
}

export interface SessoesRepository {
  consultarGrade(filtros: ConsultarGradeSessoesFiltros): Sessao[];
}

export interface GradeSessoesResultado {
  eventoId: string;
  sessoes: Sessao[];
  mensagem?: string;
}
