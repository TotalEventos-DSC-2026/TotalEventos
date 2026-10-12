import { Injectable } from '@nestjs/common';
import type { SessoesLotacaoRepository } from './sessoes-lotacao.repository.interface';
import { SessaoPalestra } from '../entities/sessao-palestra.entity';

@Injectable()
export class InMemorySessoesLotacaoRepository implements SessoesLotacaoRepository {
  private readonly sessoes = new Map<string, SessaoPalestra>();

  async findById(sessaoId: string): Promise<SessaoPalestra | null> {
    return this.sessoes.get(sessaoId) ?? null;
  }

  async save(sessao: SessaoPalestra): Promise<SessaoPalestra> {
    this.sessoes.set(sessao.sessaoId, sessao);
    return sessao;
  }
}
