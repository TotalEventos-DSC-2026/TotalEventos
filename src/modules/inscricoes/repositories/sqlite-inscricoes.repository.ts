import { Injectable } from '@nestjs/common';
import { SqliteDatabase } from '../../../database/sqlite-database';
import { Inscricao } from '../entities/inscricao.entity';
import { InscricaoStatus } from '../../../common/enums/inscricao-status.enum';
import type { InscricoesRepository } from './inscricoes.repository.interface';

type Row = { inscricao_id: string; participante_id: string; sessao_id: string; status: InscricaoStatus; created_at: string; updated_at: string };
@Injectable()
export class SqliteInscricoesRepository implements InscricoesRepository {
  constructor(private readonly db: SqliteDatabase) {}
  async findById(id: string): Promise<Inscricao | null> {
    const r = this.db.connection.prepare('SELECT * FROM inscricoes WHERE inscricao_id = ?').get(id) as Row | undefined;
    return r ? new Inscricao(r.inscricao_id, r.participante_id, r.sessao_id, r.status, new Date(r.created_at), new Date(r.updated_at)) : null;
  }
  async save(i: Inscricao): Promise<Inscricao> {
    this.db.connection.prepare(`INSERT INTO inscricoes VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(inscricao_id) DO UPDATE SET status=excluded.status, updated_at=excluded.updated_at`).run(i.inscricaoId, i.participanteId, i.sessaoId, i.getStatus(), i.createdAt.toISOString(), i.updatedAt.toISOString());
    return i;
  }
}
