import { SessaoPalestra } from './sessao-palestra.entity.js';
import { SobrepopulacaoDetectadaException } from '../../../common/exceptions/sobrepopulacao-detectada.exception.js';

describe('SessaoPalestra - Invariante de Lotação (RN02)', () => {
  it('deve permitir registrar o check-in presencial quando a ocupação estiver abaixo da capacidade máxima', () => {
    // Sessão com capacidade máxima de 10 e ocupação atual de 5
    const sessao = new SessaoPalestra('sessao-uuid-1', 10, 5, new Date());

    sessao.registrarCheckInPresencial();

    expect(sessao.getOcupacaoAtual()).toBe(6);
  });

  it('deve bloquear o acesso e lançar SobrepopulacaoDetectadaException quando atingir o limite físico da sala', () => {
    // Sessão com capacidade máxima de 2 e ocupação atual já em 2 (lotação esgotada)[cite: 29]
    const sessao = new SessaoPalestra('sessao-uuid-1', 2, 2, new Date());

    expect(() => {
      sessao.registrarCheckInPresencial();
    }).toThrow(SobrepopulacaoDetectadaException);

    expect(sessao.getOcupacaoAtual()).toBe(2);
  });
});