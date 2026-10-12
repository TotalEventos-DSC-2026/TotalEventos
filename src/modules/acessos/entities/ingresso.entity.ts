// src/modules/acessos/entities/ingresso.entity.ts
import { IngressoStatus } from '../../../common/enums/ingresso-status.enum.js';

export class Ingresso {
  private status: IngressoStatus;

  constructor(
    public readonly ingressoId: string,
    public readonly participanteId: string,
    public readonly sessaoId: string,
    status: IngressoStatus,
    public readonly codigoQr: string,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {
    this.status = status;
  }

  getStatus(): IngressoStatus {
    return this.status;
  }

  marcarComoUtilizado(): void {
    if (this.status === IngressoStatus.UTILIZADO) {
      return; // A exceção semântica tratará a comunicação da falha
    }
    if (this.status !== IngressoStatus.EMITIDO) {
      return;
    }

    this.status = IngressoStatus.UTILIZADO;
    this.updatedAt = new Date();
  }
}