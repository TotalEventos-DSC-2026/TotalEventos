# 09-05 - Repositórios e providers
- Providers preservam as interfaces existentes
- PostgreSQL: TypeOrmIngressosRepository, TypeOrmInscricoesRepository, TypeOrmSessoesLotacaoRepository
- SQLite: implementações anteriores permanecem como fallback
- A seleção usa PERSISTENCE=postgres ou PERSISTENCE padrão SQLite
