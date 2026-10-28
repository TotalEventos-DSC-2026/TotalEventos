// src/modules/lotacao/entities/sessao-palestra.spec.ts
import { SessaoPalestra } from './sessao-palestra.entity';
import { SobrepopulacaoDetectadaException } from '../../../common/exceptions/sobrepopulacao-detectada.exception';

describe('SessaoPalestra (Entidade - Regras de Lotação e RN02)', () => {
  it('deve permitir registrar um check-in presencial quando houver vagas disponíveis', () => {
    // Arrange: Sessão com capacidade 10 e ocupação 5
    const sessao = new SessaoPalestra('sessao-1', 10, 5, new Date());

    // Act
    sessao.registrarCheckInPresencial();

    // Assert
    expect(sessao.getOcupacaoAtual()).toBe(6);
  });

  it('deve lançar SobrepopulacaoDetectadaException ao tentar registrar check-in com a lotação esgotada (RN02)', () => {
    // Arrange: Sessão com capacidade 2 e ocupação máxima atingida (2)
    const sessao = new SessaoPalestra('sessao-2', 2, 2, new Date());

    // Act & Assert
    expect(() => sessao.registrarCheckInPresencial()).toThrow(
      SobrepopulacaoDetectadaException,
    );
    expect(sessao.getOcupacaoAtual()).toBe(2); // Mantém integridade
  });

});