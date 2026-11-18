# 09-01 - Diagnóstico da persistência
- Projeto: TotalEventos
- Caso de uso: check-in por QR e por inscrição
- Persistência anterior: SQLite via better-sqlite3
- Contratos preservados: IngressosRepository, InscricoesRepository, SessoesLotacaoRepository
- Migração realizada: implementação adicional de PostgreSQL com TypeORM, mantendo SQLite como fallback de testes
- Linha de base executada: 23 testes passaram antes e após a alteração
