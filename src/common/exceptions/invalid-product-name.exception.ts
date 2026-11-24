import { BadRequestException } from '@nestjs/common';

export class InvalidProductNameException extends BadRequestException {
  constructor() {
    super({
      statusCode: 400,
      message: ['O nome do produto é obrigatório e deve ser um texto.'],
      error: 'Bad Request',
    });
  }
}
