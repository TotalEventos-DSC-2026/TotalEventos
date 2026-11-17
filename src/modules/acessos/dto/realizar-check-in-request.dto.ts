import { IsString, Matches } from 'class-validator';

export class RealizarCheckInRequestDto {
  @IsString({ message: 'O código QR deve ser um texto.' })
  @Matches(/\S/, { message: 'O código QR é obrigatório.' })
  codigoQr!: string;
}
