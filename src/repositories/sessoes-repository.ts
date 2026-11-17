import type { SqliteDatabase } from '../database/sqlite-database';
import type { Sessao } from '../modules/grade-sessoes/types';

export const SESSOES_REPOSITORY = 'SESSOES_REPOSITORY';

export interface SessoesRepository {
  findByEventoId(eventoId: string): readonly Sessao[];
  save(sessao: Sessao): Sessao;
}

export function createSessoesRepository(
  sessoes: readonly Sessao[],
): SessoesRepository {
  return {
    findByEventoId(eventoId) {
      return sessoes.filter((sessao) => sessao.eventoId === eventoId);
    },
    save(sessao) {
      return sessao;
    },
  };
}

export function createSqliteSessoesRepository(
  db: SqliteDatabase,
): SessoesRepository {
  return {
    findByEventoId(eventoId) {
      const rows = db.connection
        .prepare(
          `SELECT * FROM sessoes WHERE evento_id = ? ORDER BY data, hora_inicio, sessao_id`,
        )
        .all(eventoId) as Array<{
          sessao_id: string;
          evento_id: string;
          titulo: string;
          data: string;
          hora_inicio: string;
          hora_fim: string;
          sala: string;
          publicada: number;
          ativa: number;
          created_at: string;
          updated_at: string;
        }>;

      return rows.map((row) => ({
        id: row.sessao_id,
        eventoId: row.evento_id,
        titulo: row.titulo,
        data: row.data,
        horaInicio: row.hora_inicio,
        horaFim: row.hora_fim,
        sala: row.sala,
        publicada: Boolean(row.publicada),
        ativa: Boolean(row.ativa),
      }));
    },
    save(sessao) {
      db.connection
        .prepare(
          `INSERT INTO sessoes (sessao_id, evento_id, titulo, data, hora_inicio, hora_fim, sala, publicada, ativa, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(sessao_id) DO UPDATE SET
            evento_id = excluded.evento_id,
            titulo = excluded.titulo,
            data = excluded.data,
            hora_inicio = excluded.hora_inicio,
            hora_fim = excluded.hora_fim,
            sala = excluded.sala,
            publicada = excluded.publicada,
            ativa = excluded.ativa,
            updated_at = excluded.updated_at`,
        )
        .run(
          sessao.id,
          sessao.eventoId,
          sessao.titulo,
          sessao.data,
          sessao.horaInicio,
          sessao.horaFim,
          sessao.sala,
          sessao.publicada ? 1 : 0,
          sessao.ativa ? 1 : 0,
          new Date().toISOString(),
          new Date().toISOString(),
        );

      return sessao;
    },
  };
}
