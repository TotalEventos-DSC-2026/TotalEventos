import { Injectable } from '@nestjs/common';
import type { IngressosRepository } from './ingressos.repository.interface';
import { Ingresso } from '../entities/ingresso.entity';

@Injectable()
export class InMemoryIngressosRepository implements IngressosRepository {
  private readonly ingressos = new Map<string, Ingresso>();

  async findByCodigoQr(codigoQr: string): Promise<Ingresso | null> {
    return [...this.ingressos.values()].find((ingresso) => ingresso.codigoQr === codigoQr) ?? null;
  }

  async save(ingresso: Ingresso): Promise<Ingresso> {
    this.ingressos.set(ingresso.ingressoId, ingresso);
    return ingresso;
  }
}
