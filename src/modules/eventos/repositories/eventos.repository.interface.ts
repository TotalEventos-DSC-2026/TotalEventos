import type { Evento } from '../entities/evento.entity';

export const EVENTOS_REPOSITORY = 'EVENTOS_REPOSITORY';

export interface EventosRepository {
  save(evento: Evento): Promise<Evento>;
  findById(id: string): Promise<Evento | null>;
}
