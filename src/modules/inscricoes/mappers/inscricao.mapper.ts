import { Inscricao } from '../entities/inscricao.entity';
import { InscricaoOrmEntity } from '../entities/inscricao.orm.entity';

export class InscricaoMapper {
  static toDomain(row: InscricaoOrmEntity): Inscricao {
    return new Inscricao(
      row.inscricaoId,
      row.participanteId,
      row.sessaoId,
      row.status,
      new Date(row.createdAt),
      new Date(row.updatedAt),
    );
  }

  static toOrm(inscricao: Inscricao): InscricaoOrmEntity {
    const row = new InscricaoOrmEntity();
    row.inscricaoId = inscricao.inscricaoId;
    row.participanteId = inscricao.participanteId;
    row.sessaoId = inscricao.sessaoId;
    row.status = inscricao.getStatus();
    row.createdAt = inscricao.createdAt;
    row.updatedAt = inscricao.updatedAt;
    return row;
  }
}
