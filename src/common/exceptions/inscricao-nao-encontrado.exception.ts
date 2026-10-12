import { NotFoundException } from '@nestjs/common';

export class InscricaoNaoEncontradoException extends NotFoundException {
  constructor(inscricaoId: string) {
    super(`A inscrição "${inscricaoId}" não foi encontrada no sistema.`);
  }
}