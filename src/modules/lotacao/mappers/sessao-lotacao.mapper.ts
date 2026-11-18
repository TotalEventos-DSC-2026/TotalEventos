import { SessaoPalestra } from '../entities/sessao-palestra.entity';
import { SessaoLotacaoOrmEntity } from '../entities/sessao-lotacao.orm.entity';

export class SessaoLotacaoMapper {
  static toDomain(row: SessaoLotacaoOrmEntity): SessaoPalestra {
    return new SessaoPalestra(
      row.sessaoId,
      row.capacidadeMaxima,
      row.ocupacaoAtual,
      new Date(row.updatedAt),
    );
  }

  static toOrm(sessao: SessaoPalestra): SessaoLotacaoOrmEntity {
    const row = new SessaoLotacaoOrmEntity();
    row.sessaoId = sessao.sessaoId;
    row.capacidadeMaxima = sessao.capacidadeMaxima;
    row.ocupacaoAtual = sessao.getOcupacaoAtual();
    row.updatedAt = sessao.updatedAt;
    return row;
  }
}
