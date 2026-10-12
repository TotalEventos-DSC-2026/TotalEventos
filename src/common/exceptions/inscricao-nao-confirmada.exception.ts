import { BadRequestException } from '@nestjs/common';

export class InscricaoNaoConfirmadaException extends BadRequestException {
  constructor(inscricaoId: string) {
    super(`A inscrição "${inscricaoId}" precisa estar confirmada para realizar check-in.`);
  }
}
