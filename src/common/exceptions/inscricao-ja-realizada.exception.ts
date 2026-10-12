import { ConflictException } from '@nestjs/common';

export class InscricaoJaRealizadaException extends ConflictException {
  constructor(inscricaoId: string) {
    super(`A inscrição "${inscricaoId}" já teve o check-in realizado.`);
  }
}