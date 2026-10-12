import { Injectable } from '@nestjs/common';
import { SqliteDatabase } from '../../../database/sqlite-database';
import { Ingresso } from '../entities/ingresso.entity';
import { IngressoStatus } from '../../../common/enums/ingresso-status.enum';
import type { IngressosRepository } from './ingressos.repository.interface';

type Row = { ingresso_id: string; participante_id: string; sessao_id: string; status: IngressoStatus; codigo_qr: string; created_at: string; updated_at: string };
const map = (r: Row) => new Ingresso(r.ingresso_id, r.participante_id, r.sessao_id, r.status, r.codigo_qr, new Date(r.created_at), new Date(r.updated_at));

@Injectable()
export class SqliteIngressosRepository implements IngressosRepository {
  constructor(private readonly db: SqliteDatabase) {}
  async findByCodigoQr(qr: string): Promise<Ingresso | null> {
    const row = this.db.connection.prepare('SELECT * FROM ingressos WHERE codigo_qr = ?').get(qr) as Row | undefined;
    return row ? map(row) : null;
  }
  async save(i: Ingresso): Promise<Ingresso> {
    this.db.connection.prepare(`INSERT INTO ingressos VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(ingresso_id) DO UPDATE SET status=excluded.status, updated_at=excluded.updated_at`).run(i.ingressoId, i.participanteId, i.sessaoId, i.getStatus(), i.codigoQr, i.createdAt.toISOString(), i.updatedAt.toISOString());
    return i;
  }
}
