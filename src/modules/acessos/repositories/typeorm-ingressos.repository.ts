import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Ingresso } from '../entities/ingresso.entity';
import { IngressoOrmEntity } from '../entities/ingresso.orm.entity';
import { IngressoMapper } from '../mappers/ingresso.mapper';
import type { IngressosRepository } from './ingressos.repository.interface';

@Injectable()
export class TypeOrmIngressosRepository implements IngressosRepository {
  private readonly repository: Repository<IngressoOrmEntity>;

  constructor(@InjectDataSource() dataSource: DataSource) {
    this.repository = dataSource.getRepository(IngressoOrmEntity);
  }

  async findByCodigoQr(codigoQr: string): Promise<Ingresso | null> {
    const row = await this.repository.findOneBy({ codigoQr });
    return row ? IngressoMapper.toDomain(row) : null;
  }

  async save(ingresso: Ingresso): Promise<Ingresso> {
    await this.repository.save(IngressoMapper.toOrm(ingresso));
    return ingresso;
  }
}
