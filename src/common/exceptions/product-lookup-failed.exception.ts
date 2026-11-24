import { InternalServerErrorException } from '@nestjs/common';

export class ProductLookupFailedException extends InternalServerErrorException {
  constructor(cause?: unknown) {
    super('Falha ao consultar o produto.');
    if (cause !== undefined) {
      Object.defineProperty(this, 'cause', { value: cause, enumerable: false });
    }
  }
}
