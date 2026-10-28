// src/modules/acessos/services/acessos.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AcessosService } from './acessos.service';
import { INGRESSOS_REPOSITORY } from '../repositories/ingressos.repository.interface';
import { SESSOES_LOTACAO_REPOSITORY } from '../../lotacao/repositories/sessoes-lotacao.repository.interface';
import { IngressoNaoEncontradoException } from '../../../common/exceptions/ingresso-nao-encontrado.exception';
import { SobrepopulacaoDetectadaException } from '../../../common/exceptions/sobrepopulacao-detectada.exception';
import { Ingresso } from '../entities/ingresso.entity';
import { SessaoPalestra } from '../../lotacao/entities/sessao-palestra.entity';
import { IngressoStatus } from '../../../common/enums/ingresso-status.enum';

const ingressoNaoUtilizadoStatus = Object.values(IngressoStatus).find(
  (status) => status !== IngressoStatus.UTILIZADO,
) as IngressoStatus;

describe('AcessosService - Validação Extensiva do Caso de Uso de Check-in (UC03)', () => {
  let service: AcessosService;
  let ingressosRepositoryMock: any;
  let sessoesLotacaoRepositoryMock: any;

  beforeEach(async () => {
    ingressosRepositoryMock = {
      findByCodigoQr: jest.fn(),
      save: jest.fn((ingresso) => Promise.resolve(ingresso)),
    };

    sessoesLotacaoRepositoryMock = {
      findById: jest.fn(),
      save: jest.fn((sessao) => Promise.resolve(sessao)),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AcessosService,
        { provide: INGRESSOS_REPOSITORY, useValue: ingressosRepositoryMock },
        { provide: SESSOES_LOTACAO_REPOSITORY, useValue: sessoesLotacaoRepositoryMock },
      ],
    }).compile();

    service = module.get<AcessosService>(AcessosService);
  });

  it('deve realizar o check-in com sucesso quando o ingresso é válido e existem vagas na sessão', async () => {
    const codigoQr = 'QR-VALIDO-001';
    const sessaoId = 'sessao-01';

    const ingressoMock = new Ingresso('ing-1', 'part-1', sessaoId, ingressoNaoUtilizadoStatus, codigoQr, new Date(), new Date());
    const sessaoMock = new SessaoPalestra(sessaoId, 50, 10, new Date());

    ingressosRepositoryMock.findByCodigoQr.mockResolvedValue(ingressoMock);
    sessoesLotacaoRepositoryMock.findById.mockResolvedValue(sessaoMock);

    const resultado = await service.realizarCheckIn(codigoQr);

    expect(resultado).toBeDefined();
    expect(resultado.status).toBe(IngressoStatus.UTILIZADO);
    expect(sessaoMock.getOcupacaoAtual()).toBe(11);
    expect(ingressosRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(sessoesLotacaoRepositoryMock.save).toHaveBeenCalledTimes(1);
  });

  it('deve lançar IngressoNaoEncontradoException se o QR Code informado não existir no repositório', async () => {
    ingressosRepositoryMock.findByCodigoQr.mockResolvedValue(null);

    await expect(service.realizarCheckIn('QR-INEXISTENTE')).rejects.toThrow(
      IngressoNaoEncontradoException,
    );
    expect(ingressosRepositoryMock.save).not.toHaveBeenCalled();
    expect(sessoesLotacaoRepositoryMock.save).not.toHaveBeenCalled();
  });

  it('deve rejeitar o check-in e lançar exceção se o ingresso já tiver sido utilizado (RN01)', async () => {
    const codigoQr = 'QR-JA-USADO';
    const sessaoId = 'sessao-01';

    const ingressoMock = new Ingresso('ing-1', 'part-1', sessaoId, IngressoStatus.UTILIZADO, codigoQr, new Date(), new Date());
    const sessaoMock = new SessaoPalestra(sessaoId, 50, 10, new Date());

    ingressosRepositoryMock.findByCodigoQr.mockResolvedValue(ingressoMock);
    sessoesLotacaoRepositoryMock.findById.mockResolvedValue(sessaoMock);

    await expect(service.realizarCheckIn(codigoQr)).rejects.toThrow();
    expect(ingressosRepositoryMock.save).not.toHaveBeenCalled();
  });

  it('deve lançar SobrepopulacaoDetectadaException e bloquear o check-in se a capacidade da sessão estiver esgotada (RN02)', async () => {
    const codigoQr = 'QR-VALIDO-002';
    const sessaoId = 'sessao-cheia';

    const ingressoMock = new Ingresso('ing-2', 'part-2', sessaoId, ingressoNaoUtilizadoStatus, codigoQr, new Date(), new Date());
    const sessaoCheia = new SessaoPalestra(sessaoId, 10, 10, new Date());

    ingressosRepositoryMock.findByCodigoQr.mockResolvedValue(ingressoMock);
    sessoesLotacaoRepositoryMock.findById.mockResolvedValue(sessaoCheia);

    await expect(service.realizarCheckIn(codigoQr)).rejects.toThrow(
      SobrepopulacaoDetectadaException,
    );

    expect(ingressoMock.getStatus()).toBe(ingressoNaoUtilizadoStatus);
    expect(ingressosRepositoryMock.save).not.toHaveBeenCalled();
    expect(sessoesLotacaoRepositoryMock.save).not.toHaveBeenCalled();
  });
});