import { Injectable } from '@nestjs/common';
import type { InscricoesRepository } from './inscricoes.repository.interface';
import { Inscricao } from '../entities/inscricao.entity';

@Injectable()
export class InMemoryInscricoesRepository implements InscricoesRepository {
  private readonly inscricoes = new Map<string, Inscricao>();

  async findById(inscricaoId: string): Promise<Inscricao | null> {
    return this.inscricoes.get(inscricaoId) ?? null;
  }

  async save(inscricao: Inscricao): Promise<Inscricao> {
    this.inscricoes.set(inscricao.inscricaoId, inscricao);
    return inscricao;
  }
}
