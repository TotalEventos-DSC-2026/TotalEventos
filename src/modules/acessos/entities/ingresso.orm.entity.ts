import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IngressoStatus } from '../../../common/enums/ingresso-status.enum';

@Entity('ingressos')
export class IngressoOrmEntity {
  @PrimaryColumn({ name: 'ingresso_id' })
  ingressoId!: string;

  @Column({ name: 'participante_id' })
  participanteId!: string;

  @Column({ name: 'sessao_id' })
  sessaoId!: string;

  @Column({ type: 'varchar', length: 32 })
  status!: IngressoStatus;

  @Column({ name: 'codigo_qr', unique: true })
  codigoQr!: string;

  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;
}
