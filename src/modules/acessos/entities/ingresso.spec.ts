import { Ingresso } from './ingresso.entity';
import { IngressoStatus } from '../../../common/enums/ingresso-status.enum';
import { IngressoJaUtilizadoException } from '../../../common/exceptions/ingresso-ja-utilizado.exception';
import { IngressoNaoDisponivelException } from '../../../common/exceptions/ingresso-nao-disponivel.exception';

describe('Ingresso (Entidade - Regras de Status e RN01)', () => {
  const criarIngresso = (status: IngressoStatus = IngressoStatus.EMITIDO) =>
    new Ingresso(
      'ing-1',
      'part-1',
      'sessao-1',
      status,
      'QR-123',
      new Date('2020-01-01T00:00:00.000Z'),
      new Date('2020-01-01T00:00:00.000Z'),
    );

  it('deve estar EMITIDO quando criado com esse status', () => {
    const ingresso = criarIngresso();

    expect(ingresso.getStatus()).toBe(IngressoStatus.EMITIDO);
  });

  it('deve marcar como UTILIZADO e atualizar a data ao realizar check-in', () => {
    const ingresso = criarIngresso();

    ingresso.marcarComoUtilizado();

    expect(ingresso.getStatus()).toBe(IngressoStatus.UTILIZADO);
    expect(ingresso.updatedAt.getTime()).toBeGreaterThan(
      new Date('2020-01-01T00:00:00.000Z').getTime(),
    );
  });

  it('deve lançar exceção ao tentar reutilizar um ingresso que já foi utilizado (RN01 - Duplicidade)', () => {
    const ingresso = criarIngresso(IngressoStatus.UTILIZADO);

    expect(() => ingresso.marcarComoUtilizado()).toThrow(
      IngressoJaUtilizadoException,
    );
  });

  it('deve rejeitar o check-in de um ingresso cancelado sem alterar seu status', () => {
    const ingresso = criarIngresso(IngressoStatus.CANCELADO);

    expect(() => ingresso.marcarComoUtilizado()).toThrow(
      IngressoNaoDisponivelException,
    );

    expect(ingresso.getStatus()).toBe(IngressoStatus.CANCELADO);
  });
});