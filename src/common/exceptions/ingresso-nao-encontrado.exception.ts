export class IngressoNaoEncontradoException extends Error {
  constructor(codigoQr: string) {
    super(`Nenhum ingresso válido foi encontrado para o código fornecido.`);
    this.name = 'IngressoNaoEncontradoException';
  }
}