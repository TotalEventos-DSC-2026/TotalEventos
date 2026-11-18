import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { SessaoPalestra } from '../entities/sessao-palestra.entity';
import { SessaoLotacaoOrmEntity } from '../entities/sessao-lotacao.orm.entity';
import { SessaoLotacaoMapper } from '../mappers/sessao-lotacao.mapper';
import type { SessoesLotacaoRepository } from './sessoes-lotacao.repository.interface';

@Injectable()
export class TypeOrmSessoesLotacaoRepository implements SessoesLotacaoRepository {
  private readonly repository: Repository<SessaoLotacaoOrmEntity>;

  constructor(@InjectDataSource() dataSource: DataSource) {
    this.repository = dataSource.getRepository(SessaoLotacaoOrmEntity);
  }

  async findById(sessaoId: string): Promise<SessaoPalestra | null> {
    const row = await this.repository.findOneBy({ sessaoId });
    return row ? SessaoLotacaoMapper.toDomain(row) : null;
  }

  async save(sessao: SessaoPalestra): Promise<SessaoPalestra> {
    await this.repository.save(SessaoLotacaoMapper.toOrm(sessao));
    return sessao;
  }
}
