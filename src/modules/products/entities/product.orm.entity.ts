import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('products')
export class ProductOrmEntity {
  @PrimaryColumn({ name: 'product_id', type: 'varchar', length: 36 })
  productId!: string;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deletedAt!: Date | null;
}
