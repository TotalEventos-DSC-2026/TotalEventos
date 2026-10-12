import { AcessosService } from './acessos.service';
import { IngressosRepository } from '../repositories/ingressos.repository.interface';
import { Ingresso } from '../entities/ingresso.entity';
import { IngressoStatus } from '../../../common/enums/ingresso-status.enum';

describe('AcessosService - Realizar Check-in', () => {
  let service: AcessosService;
  let repository: jest.Mocked<IngressosRepository>;

  beforeEach(() => {
    repository = {
      findByCodigoQr: jest.fn(),
      save: jest.fn(),
    };
    service = new AcessosService(repository);
  });

  it('deve realizar o check-in com sucesso quando o ingresso for válido', async () => {
    const codigoQr = 'qr-code-token-123';
    const ingressoMock = new Ingresso(
      'ing-1',
      'part-1',
      'sessao-1',
      IngressoStatus.EMITIDO,
      codigoQr,
      new Date(),
      new Date(),
    );

    repository.findByCodigoQr.mockResolvedValue(ingressoMock);
    repository.save.mockImplementation(async (ing) => ing);

    const resultado = await service.realizarCheckIn(codigoQr);

    expect(resultado.status).toBe(IngressoStatus.UTILIZADO);
    expect(repository.save).toHaveBeenCalledTimes(1);
  });
});