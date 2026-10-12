import { SobrepopulacaoDetectadaException } from '../../../common/exceptions/sobrepopulacao-detectada.exception';

export class SessaoPalestra {
  constructor(
    public readonly sessaoId: string,
    public readonly capacidadeMaxima: number,
    private ocupacaoAtual: number,
    public updatedAt: Date,
  ) {
    if (!Number.isInteger(capacidadeMaxima) || capacidadeMaxima < 0) {
      throw new RangeError('A capacidade máxima deve ser um número inteiro não negativo.');
    }
    if (!Number.isInteger(ocupacaoAtual) || ocupacaoAtual < 0 || ocupacaoAtual > capacidadeMaxima) {
      throw new RangeError('A ocupação atual deve estar entre zero e a capacidade máxima.');
    }
  }

  getOcupacaoAtual(): number {
    return this.ocupacaoAtual;
  }

  verificarDisponibilidadeVagas(): boolean {
    return this.ocupacaoAtual < this.capacidadeMaxima;
  }

  validarDisponibilidadeVagas(): void {
    if (!this.verificarDisponibilidadeVagas()) {
      throw new SobrepopulacaoDetectadaException(this.sessaoId);
    }
  }

  registrarCheckInPresencial(): void {
    this.validarDisponibilidadeVagas();
    this.ocupacaoAtual += 1;
    this.updatedAt = new Date();
  }
}