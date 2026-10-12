import { ConflictException } from '@nestjs/common';

export class IngressoJaUtilizadoException extends ConflictException {
  constructor(ingressoId: string) {
    super(`O ingresso "${ingressoId}" já foi utilizado para check-in.`);
  }
}