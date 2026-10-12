import { BadRequestException, Inject, Injectable, Optional } from '@nestjs/common';
import { SqliteDatabase } from '../../../database/sqlite-database';
import {
  INGRESSOS_REPOSITORY,
  type IngressosRepository,
} from '../repositories/ingressos.repository.interface';
import {
  SESSOES_LOTACAO_REPOSITORY,
  type SessoesLotacaoRepository,
} from '../../lotacao/repositories/sessoes-lotacao.repository.interface';
import { IngressoNaoEncontradoException } from '../../../common/exceptions/ingresso-nao-encontrado.exception';
import { SessaoNaoEncontradaException } from '../../../common/exceptions/sessao-nao-encontrada.exception';
import { RealizarCheckInResponseDto } from '../dto/realizar-check-in-response.dto';

@Injectable()
export class AcessosService {
  constructor(
    @Inject(INGRESSOS_REPOSITORY)
    private readonly ingressosRepository: IngressosRepository,
    @Inject(SESSOES_LOTACAO_REPOSITORY)
    private readonly sessoesLotacaoRepository: SessoesLotacaoRepository,
    @Optional() private readonly database?: SqliteDatabase,
  ) {}

  async realizarCheckIn(codigoQr: string): Promise<RealizarCheckInResponseDto> {
    const executar = () => this.realizarCheckInInterno(codigoQr);
    return this.database ? this.database.runAtomically(executar) : executar();
  }

  private async realizarCheckInInterno(codigoQr: string): Promise<RealizarCheckInResponseDto> {
    if (typeof codigoQr !== 'string' || !codigoQr.trim()) {
      throw new BadRequestException('O código QR é obrigatório.');
    }

    const ingresso = await this.ingressosRepository.findByCodigoQr(codigoQr);

    if (!ingresso) {
      throw new IngressoNaoEncontradoException();
    }

    const sessao = await this.sessoesLotacaoRepository.findById(ingresso.sessaoId);

    if (!sessao) {
      throw new SessaoNaoEncontradaException(ingresso.sessaoId);
    }

    ingresso.validarCheckIn();
    sessao.validarDisponibilidadeVagas();
    sessao.registrarCheckInPresencial();
    ingresso.marcarComoUtilizado();

    await this.ingressosRepository.save(ingresso);
    await this.sessoesLotacaoRepository.save(sessao);

    const response = new RealizarCheckInResponseDto();
    response.ingressoId = ingresso.ingressoId;
    response.participanteId = ingresso.participanteId;
    response.status = ingresso.getStatus();
    response.updatedAt = ingresso.updatedAt;
    response.message = 'Check-in realizado com sucesso.';
    return response;
  }
}
