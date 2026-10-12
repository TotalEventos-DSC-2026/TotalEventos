import { InscricoesService } from './inscricoes.service';
import { InscricoesRepository } from '../repositories/inscricoes.repository.interface';
import { Inscricao } from '../entities/inscricao.entity';
import { InscricaoStatus } from '../../../common/enums/inscricao-status.enum';

describe('InscricoesService - Realizar Check-in', () => {
  let service: InscricoesService;
  let repository: jest.Mocked<InscricoesRepository>;

  beforeEach(() => {
    repository = {
      findById: jest.fn(),
      save: jest.fn(),
    };
    service = new InscricoesService(repository);
  });

  it('deve realizar o check-in com sucesso quando a inscrição estiver confirmada', async () => {
    const inscricaoId = 'insc-123';
    const inscricaoMock = new Inscricao(
      inscricaoId,
      'part-456',
      'sessao-789',
      InscricaoStatus.CONFIRMADA,
      new Date(),
      new Date(),
    );

    repository.findById.mockResolvedValue(inscricaoMock);
    repository.save.mockImplementation(async (insc: Inscricao) => insc);

    const resultado = await service.realizarCheckIn(inscricaoId);

    expect(resultado.status).toBe(InscricaoStatus.CHECK_IN_REALIZADO);
    expect(repository.save).toHaveBeenCalledTimes(1);
  });
});