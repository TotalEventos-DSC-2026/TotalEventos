import { Inject, Injectable } from '@nestjs/common';
import { IngressosRepository, INGRESSOS_REPOSITORY } from '../repositories/ingressos.repository.interface';
import { RealizarCheckInResponseDto } from '../dto/realizar-check-in-response.dto';
import { IngressoNaoEncontradoException } from '../../../common/exceptions/ingresso-nao-encontrado.exception';

@Injectable()
export class AcessosService {
  constructor(
    @Inject(INGRESSOS_REPOSITORY)
    private readonly ingressosRepository: IngressosRepository,
  ) {}

  async realizarCheckIn(codigoQr: string): Promise<RealizarCheckInResponseDto> {
    const ingresso = await this.ingressosRepository.findByCodigoQr(codigoQr);

    if (!ingresso) {
      throw new IngressoNaoEncontradoException(codigoQr);
    }

    ingresso.marcarComoUtilizado();

    const ingressoAtualizado = await this.ingressosRepository.save(ingresso);

    const response = new RealizarCheckInResponseDto();
    response.ingressoId = ingressoAtualizado.ingressoId;
    response.participanteId = ingressoAtualizado.participanteId;
    response.status = ingressoAtualizado.getStatus();
    response.updatedAt = ingressoAtualizado.updatedAt;
    response.message = 'Check-in realizado com sucesso.';

    return response;
  }
}