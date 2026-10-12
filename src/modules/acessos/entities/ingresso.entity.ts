// src/modules/acessos/entities/ingresso.entity.ts
import { IngressoStatus } from '../../../common/enums/ingresso-status.enum.js';
import { IngressoJaUtilizadoException } from '../../../common/exceptions/ingresso-ja-utilizado.exception.js';
import { IngressoNaoDisponivelException } from '../../../common/exceptions/ingresso-nao-disponivel.exception.js';

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

  validarCheckIn(): void {
    if (this.status === IngressoStatus.UTILIZADO) {
      throw new IngressoJaUtilizadoException(this.ingressoId);
    }
    if (this.status !== IngressoStatus.EMITIDO) {
      throw new IngressoNaoDisponivelException(this.ingressoId);
    }
  }

  marcarComoUtilizado(): void {
    this.validarCheckIn();
    this.status = IngressoStatus.UTILIZADO;
    this.updatedAt = new Date();
  }
}