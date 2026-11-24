import { InternalServerErrorException } from '@nestjs/common';

export class ProductUpdateFailedException extends InternalServerErrorException {
  constructor(cause?: unknown) {
    super('Falha ao alterar o produto.');
    if (cause !== undefined) {
      Object.defineProperty(this, 'cause', { value: cause, enumerable: false });
    }
  }
}
