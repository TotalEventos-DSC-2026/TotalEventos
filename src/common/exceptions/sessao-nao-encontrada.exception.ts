import { NotFoundException } from '@nestjs/common';

export class SessaoNaoEncontradaException extends NotFoundException {
  constructor(sessaoId: string) {
    super(`A sessão "${sessaoId}" não foi encontrada.`);
  }
}
