import { Inscricao } from '../entities/inscricao.entity.js';

export const INSCRICOES_REPOSITORY = 'INSCRICOES_REPOSITORY';

export interface InscricoesRepository {
  findById(inscricaoId: string): Promise<Inscricao | null>;
  save(inscricao: Inscricao): Promise<Inscricao>;
}