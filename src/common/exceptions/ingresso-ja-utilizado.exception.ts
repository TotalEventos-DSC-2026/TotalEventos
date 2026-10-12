export class IngressoJaUtilizadoException extends Error {
  constructor(ingressoId: string) {
    super(`O ingresso "${ingressoId}" já foi utilizado para check-in.`);
    this.name = 'IngressoJaUtilizadoException';
  }
}