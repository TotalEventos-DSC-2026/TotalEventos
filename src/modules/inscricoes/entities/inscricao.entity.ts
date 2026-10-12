
import { InscricaoStatus } from '../../../common/enums/inscricao-status.enum';

export class Inscricao {
  private status: InscricaoStatus;

  constructor(
    public readonly inscricaoId: string,
    public readonly participanteId: string,
    public readonly sessaoId: string,
    status: InscricaoStatus,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {
    this.status = status;
  }

  getStatus(): InscricaoStatus {
    return this.status;
  }

  realizarCheckIn(): void {
    if (this.status === InscricaoStatus.CHECK_IN_REALIZADO) {
      // A falha será tratada na etapa de exceções semânticas
      return;
    }
    if (this.status !== InscricaoStatus.CONFIRMADA) {
      // Regra: só é possível fazer check-in se a inscrição estiver confirmada
      return;
    }

    this.status = InscricaoStatus.CHECK_IN_REALIZADO;
    this.updatedAt = new Date();
  }
}