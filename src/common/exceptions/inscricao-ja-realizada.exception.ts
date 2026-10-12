export class InscricaoJaRealizadaException extends Error {
  constructor(inscricaoId: string) {
    super(`A inscrição "${inscricaoId}" já teve o check-in realizado.`);
    this.name = 'InscricaoJaRealizadaException';
  }
}