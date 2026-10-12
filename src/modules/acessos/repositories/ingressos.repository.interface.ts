import { Ingresso } from '../entities/ingresso.entity.js';

export const INGRESSOS_REPOSITORY = 'INGRESSOS_REPOSITORY';

export interface IngressosRepository {
  findByCodigoQr(codigoQr: string): Promise<Ingresso | null>;
  save(ingresso: Ingresso): Promise<Ingresso>;
}