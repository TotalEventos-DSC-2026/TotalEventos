export enum EventoStatus {
  RASCUNHO = 'RASCUNHO',
  PUBLICADO = 'PUBLICADO',
  CANCELADO = 'CANCELADO',
}

export interface EventoProps {
  id: string;
  titulo: string;
  descricao?: string;
  dataInicio: Date;
  dataFim: Date;
  espacoFisicoId: string;
  status?: EventoStatus;
  createdAt?: Date;
}

export class PeriodoEventoInvalidoException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PeriodoEventoInvalidoException';
  }
}

export class Evento {
  readonly id: string;
  readonly titulo: string;
  readonly descricao?: string;
  readonly dataInicio: Date;
  readonly dataFim: Date;
  readonly espacoFisicoId: string;
  readonly status: EventoStatus;
  readonly createdAt: Date;

  private constructor(props: EventoProps) {
    this.id = props.id;
    this.titulo = props.titulo;
    this.descricao = props.descricao;
    this.dataInicio = props.dataInicio;
    this.dataFim = props.dataFim;
    this.espacoFisicoId = props.espacoFisicoId;
    this.status = props.status ?? EventoStatus.RASCUNHO;
    this.createdAt = props.createdAt ?? new Date();
  }

  static criar(props: Omit<EventoProps, 'status' | 'createdAt'>): Evento {
    if (props.dataInicio.getTime() < Date.now()) {
      throw new PeriodoEventoInvalidoException('A data de início do evento deve ser futura.');
    }
    if (props.dataFim.getTime() <= props.dataInicio.getTime()) {
      throw new PeriodoEventoInvalidoException('A data final deve ser posterior à data inicial.');
    }

    return new Evento({ ...props, status: EventoStatus.RASCUNHO, createdAt: new Date() });
  }

  static reconstituir(props: EventoProps): Evento {
    return new Evento(props);
  }
}
