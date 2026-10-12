import { NotFoundException } from '@nestjs/common';

export class IngressoNaoEncontradoException extends NotFoundException {
  constructor() {
    super('Nenhum ingresso válido foi encontrado para o código fornecido.');
  }
}