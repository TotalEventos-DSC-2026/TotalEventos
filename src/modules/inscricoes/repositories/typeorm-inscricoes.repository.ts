import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Inscricao } from '../entities/inscricao.entity';
import { InscricaoOrmEntity } from '../entities/inscricao.orm.entity';
import { InscricaoMapper } from '../mappers/inscricao.mapper';
import type { InscricoesRepository } from './inscricoes.repository.interface';

@Injectable()
export class TypeOrmInscricoesRepository implements InscricoesRepository {
  private readonly repository: Repository<InscricaoOrmEntity>;

  constructor(@InjectDataSource() dataSource: DataSource) {
    this.repository = dataSource.getRepository(InscricaoOrmEntity);
  }

  async findById(id: string): Promise<Inscricao | null> {
    const row = await this.repository.findOneBy({ inscricaoId: id });
    return row ? InscricaoMapper.toDomain(row) : null;
  }

  async save(inscricao: Inscricao): Promise<Inscricao> {
    await this.repository.save(InscricaoMapper.toOrm(inscricao));
    return inscricao;
  }
}
