// src/modules/lotacao/repositories/sessoes-lotacao.repository.interface.ts
import { SessaoPalestra } from '../entities/sessao-palestra.entity';

export const SESSOES_LOTACAO_REPOSITORY = 'SESSOES_LOTACAO_REPOSITORY';

export interface SessoesLotacaoRepository {
  findById(sessaoId: string): Promise<SessaoPalestra | null>;
  save(sessao: SessaoPalestra): Promise<SessaoPalestra>;
}