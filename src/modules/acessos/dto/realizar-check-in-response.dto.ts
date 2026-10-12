import { IngressoStatus } from '../../../common/enums/ingresso-status.enum.js';

export class RealizarCheckInResponseDto {
  ingressoId!: string;
  participanteId!: string;
  status!: IngressoStatus;
  updatedAt!: Date;
  message!: string;
}