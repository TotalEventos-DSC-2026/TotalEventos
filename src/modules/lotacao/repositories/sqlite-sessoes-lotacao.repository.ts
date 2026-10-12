import { Injectable } from '@nestjs/common';
import { SqliteDatabase } from '../../../database/sqlite-database';
import { SessaoPalestra } from '../entities/sessao-palestra.entity';
import type { SessoesLotacaoRepository } from './sessoes-lotacao.repository.interface';

type Row = { sessao_id: string; capacidade_maxima: number; ocupacao_atual: number; updated_at: string };
@Injectable()
export class SqliteSessoesLotacaoRepository implements SessoesLotacaoRepository {
  constructor(private readonly db: SqliteDatabase) {}
  async findById(id: string): Promise<SessaoPalestra | null> {
    const r = this.db.connection.prepare('SELECT * FROM sessoes_lotacao WHERE sessao_id = ?').get(id) as Row | undefined;
    return r ? new SessaoPalestra(r.sessao_id, r.capacidade_maxima, r.ocupacao_atual, new Date(r.updated_at)) : null;
  }
  async save(s: SessaoPalestra): Promise<SessaoPalestra> {
    this.db.connection.prepare(`INSERT INTO sessoes_lotacao VALUES (?, ?, ?, ?) ON CONFLICT(sessao_id) DO UPDATE SET capacidade_maxima=excluded.capacidade_maxima, ocupacao_atual=excluded.ocupacao_atual, updated_at=excluded.updated_at`).run(s.sessaoId, s.capacidadeMaxima, s.getOcupacaoAtual(), s.updatedAt.toISOString());
    return s;
  }
}
