import { Inject, Injectable } from '@nestjs/common';
import { InscricoesRepository, INSCRICOES_REPOSITORY } from '../repositories/inscricoes.repository.interface';
import { RealizarCheckInResponseDto } from '../dto/realizar-check-in-response.dto';
import { InscricaoNotFoundException } from '../../common/exceptions/inscricao-not-found.exception';

@Injectable()
export class InscricoesService {
  constructor(
    @Inject(INSCRICOES_REPOSITORY)
    private readonly inscricoesRepository: InscricoesRepository,
  ) {}

  async realizarCheckIn(inscricaoId: string): Promise<RealizarCheckInResponseDto> {
    const inscricao = await this.inscricoesRepository.findById(inscricaoId);
    
    if (!inscricao) {
      throw new InscricaoNotFoundException(inscricaoId);
    }

    inscricao.realizarCheckIn();

    const inscricaoAtualizada = await this.inscricoesRepository.save(inscricao);

    const response = new RealizarCheckInResponseDto();
    response.inscricaoId = inscricaoAtualizada.inscricaoId;
    response.status = inscricaoAtualizada.getStatus();
    response.updatedAt = inscricaoAtualizada.updatedAt;
    response.message = 'Check-in realizado com sucesso.';

    return response;
  }
}