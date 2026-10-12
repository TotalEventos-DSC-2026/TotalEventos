import { InscricaoStatus } from '../../../common/enums/inscricao-status.enum';

export class RealizarCheckInResponseDto {
  inscricaoId!: string;
  status!: InscricaoStatus;
  updatedAt!: Date;
  message!: string;
}