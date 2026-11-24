import { BadRequestException } from '@nestjs/common';

export class InvalidProductIdException extends BadRequestException {
  constructor() {
    super({
      statusCode: 400,
      message: ['O identificador do produto deve ser um UUID válido.'],
      error: 'Bad Request',
    });
  }
}
