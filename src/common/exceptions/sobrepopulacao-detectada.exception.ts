import { ConflictException } from '@nestjs/common';

export class SobrepopulacaoDetectadaException extends ConflictException {
  constructor(sessaoId: string) {
    super(`A capacidade máxima da sessão "${sessaoId}" foi atingida. Acesso bloqueado por segurança.`);
  }
}