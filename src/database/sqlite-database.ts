import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Database from 'better-sqlite3';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

@Injectable()
export class SqliteDatabase implements OnModuleDestroy {
  readonly connection: Database.Database;

  constructor() {
    const filename = resolve(process.env.DATABASE_PATH || 'data/totaleventos.sqlite');
    mkdirSync(dirname(filename), { recursive: true });
    this.connection = new Database(filename);
    this.connection.pragma('journal_mode = WAL');
    this.connection.pragma('foreign_keys = ON');
    this.connection.exec(`
      CREATE TABLE IF NOT EXISTS sessoes_lotacao (
        sessao_id TEXT PRIMARY KEY,
        capacidade_maxima INTEGER NOT NULL CHECK(capacidade_maxima >= 0),
        ocupacao_atual INTEGER NOT NULL CHECK(ocupacao_atual >= 0 AND ocupacao_atual <= capacidade_maxima),
        updated_at TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS ingressos (
        ingresso_id TEXT PRIMARY KEY,
        participante_id TEXT NOT NULL,
        sessao_id TEXT NOT NULL REFERENCES sessoes_lotacao(sessao_id),
        status TEXT NOT NULL,
        codigo_qr TEXT NOT NULL UNIQUE,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS inscricoes (
        inscricao_id TEXT PRIMARY KEY,
        participante_id TEXT NOT NULL,
        sessao_id TEXT NOT NULL,
        status TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_ingressos_qr ON ingressos(codigo_qr);
    `);
  }

  onModuleDestroy(): void {
    this.connection.close();
  }

  async runAtomically<T>(operation: () => Promise<T>): Promise<T> {
    this.connection.exec('BEGIN IMMEDIATE');
    try {
      const result = await operation();
      this.connection.exec('COMMIT');
      return result;
    } catch (error) {
      this.connection.exec('ROLLBACK');
      throw error;
    }
  }
}
