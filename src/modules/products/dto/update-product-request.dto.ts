import { IsString, Matches } from 'class-validator';

export class UpdateProductRequestDto {
  @IsString({ message: 'O nome do produto deve ser um texto.' })
  @Matches(/\S/, { message: 'O nome do produto é obrigatório.' })
  name!: string;
}
