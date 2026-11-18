import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('sessoes_lotacao')
export class SessaoLotacaoOrmEntity {
  @PrimaryColumn({ name: 'sessao_id' })
  sessaoId!: string;

  @Column({ name: 'capacidade_maxima', type: 'integer' })
  capacidadeMaxima!: number;

  @Column({ name: 'ocupacao_atual', type: 'integer' })
  ocupacaoAtual!: number;

  @Column({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;
}
