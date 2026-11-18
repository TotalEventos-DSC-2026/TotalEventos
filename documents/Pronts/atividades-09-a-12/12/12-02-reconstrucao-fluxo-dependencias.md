# 12-02 - Fluxo e dependências
- Controller depende de Service
- Service depende da interface de Repository
- Adaptador SQLite ou TypeORM implementa a interface
- Domínio não depende de TypeORM
