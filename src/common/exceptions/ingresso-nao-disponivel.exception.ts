import { BadRequestException } from '@nestjs/common';

export class IngressoNaoDisponivelException extends BadRequestException {
  constructor(ingressoId: string) {
    super(`O ingresso "${ingressoId}" não está disponível para check-in.`);
  }
}
