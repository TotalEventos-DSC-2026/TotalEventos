import { Column, Entity, PrimaryColumn } from 'typeorm';
import { InscricaoStatus } from '../../../common/enums/inscricao-status.enum';

@Entity('inscricoes')
export class InscricaoOrmEntity {
  @PrimaryColumn({ name: 'inscricao_id' })
  inscricaoId!: string;

  @Column({ name: 'participante_id' })
  participanteId!: string;

  @Column({ name: 'sessao_id' })
  sessaoId!: string;

  @Column({ type: 'varchar', length: 32 })
  status!: InscricaoStatus;

  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;
}
