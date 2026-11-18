import { Ingresso } from '../entities/ingresso.entity';
import { IngressoOrmEntity } from '../entities/ingresso.orm.entity';

export class IngressoMapper {
  static toDomain(row: IngressoOrmEntity): Ingresso {
    return new Ingresso(
      row.ingressoId,
      row.participanteId,
      row.sessaoId,
      row.status,
      row.codigoQr,
      new Date(row.createdAt),
      new Date(row.updatedAt),
    );
  }

  static toOrm(ingresso: Ingresso): IngressoOrmEntity {
    const row = new IngressoOrmEntity();
    row.ingressoId = ingresso.ingressoId;
    row.participanteId = ingresso.participanteId;
    row.sessaoId = ingresso.sessaoId;
    row.status = ingresso.getStatus();
    row.codigoQr = ingresso.codigoQr;
    row.createdAt = ingresso.createdAt;
    row.updatedAt = ingresso.updatedAt;
    return row;
  }
}
