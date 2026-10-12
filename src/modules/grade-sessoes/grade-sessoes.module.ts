import { Module } from '@nestjs/common';
import { GradeSessoesController } from './grade-sessoes.controller';

@Module({
  controllers: [GradeSessoesController],
})
export class GradeSessoesModule {}
