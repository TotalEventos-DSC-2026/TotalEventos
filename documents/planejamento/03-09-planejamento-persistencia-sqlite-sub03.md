# Relatório de Planejamento — [SUB-03] Implementar Persistência SQLite e Repositórios

## 1. Objetivo da Sub-Tarefa
Configurar a camada de infraestrutura de dados utilizando SQLite e implementar os repositórios responsáveis pela persistência de ingressos, inscrições e controle de lotação das sessões no sistema TotalEventos.

## 2. Regras de Infraestrutura e Transações
* **Mapeamento de Entidades:** Configurar schemas/entidades para Ingresso, Inscrição e Sessão com os devidos relacionamentos e chaves primárias.
* **Gerenciamento Transacional:** Garantir a exportação de métodos nos repositórios que aceitem o contexto transacional do banco de dados (ex: `QueryRunner` do TypeORM), viabilizando operações atômicas no check-in (atualização simultânea de ingresso e lotação).
* **Persistência Local:** Garantir a criação e migração automática do ficheiro SQLite local em ambiente de desenvolvimento.

## 3. Critérios de Aceite
* [ ] Repositórios de ingressos e inscrições conseguem salvar e localizar registros.
* [ ] A lotação da sessão é persistida corretamente no banco de dados.
* [ ] Operação de gravação suporta a lógica transacional necessária.

## 4. Próximos Passos
* Configurar o `TypeOrmModule.forRoot()` com `type: 'sqlite'` no `AppModule`.
* Implementar as classes de repositório e testes de integração com banco de dados em memória/SQLite local.