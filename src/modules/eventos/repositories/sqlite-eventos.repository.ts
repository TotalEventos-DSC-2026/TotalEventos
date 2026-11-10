import { Injectable } from '@nestjs/common';
import { SqliteDatabase } from '../../../database/sqlite-database';
import { Evento, EventoStatus } from '../entities/evento.entity';
import type { EventosRepository } from './eventos.repository.interface';

type EventoRow = {
  evento_id: string;
  titulo: string;
  descricao: string | null;
  data_inicio: string;
  data_fim: string;
  espaco_fisico_id: string;
  status: EventoStatus;
  created_at: string;
};

const toEvento = (row: EventoRow): Evento =>
  Evento.reconstituir({
    id: row.evento_id,
    titulo: row.titulo,
    descricao: row.descricao ?? undefined,
    dataInicio: new Date(row.data_inicio),
    dataFim: new Date(row.data_fim),
    espacoFisicoId: row.espaco_fisico_id,
    status: row.status,
    createdAt: new Date(row.created_at),
  });

@Injectable()
export class SqliteEventosRepository implements EventosRepository {
  constructor(private readonly db: SqliteDatabase) {}

  async save(evento: Evento): Promise<Evento> {
    this.db.connection
      .prepare(`
        INSERT INTO eventos (
          evento_id, titulo, descricao, data_inicio, data_fim,
          espaco_fisico_id, status, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `)
      .run(
        evento.id,
        evento.titulo,
        evento.descricao ?? null,
        evento.dataInicio.toISOString(),
        evento.dataFim.toISOString(),
        evento.espacoFisicoId,
        evento.status,
        evento.createdAt.toISOString(),
      );
    return evento;
  }

  async findById(id: string): Promise<Evento | null> {
    const row = this.db.connection
      .prepare('SELECT * FROM eventos WHERE evento_id = ?')
      .get(id) as EventoRow | undefined;
    return row ? toEvento(row) : null;
  }
}
