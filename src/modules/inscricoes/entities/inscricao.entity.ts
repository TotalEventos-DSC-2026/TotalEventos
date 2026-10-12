
import { InscricaoStatus } from '../../../common/enums/inscricao-status.enum';
import { InscricaoJaRealizadaException } from '../../../common/exceptions/inscricao-ja-realizada.exception';
import { InscricaoNaoConfirmadaException } from '../../../common/exceptions/inscricao-nao-confirmada.exception';

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
      throw new InscricaoJaRealizadaException(this.inscricaoId);
    }
    if (this.status !== InscricaoStatus.CONFIRMADA) {
      throw new InscricaoNaoConfirmadaException(this.inscricaoId);
    }

    this.status = InscricaoStatus.CHECK_IN_REALIZADO;
    this.updatedAt = new Date();
  }
}