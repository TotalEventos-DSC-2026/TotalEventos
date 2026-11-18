# 02-02 — Matriz de Permissões do GitHub

## Objetivo
Definir uma recomendação prudente de permissões para cada integrante, respeitando o Princípio do Menor Privilégio.

## Níveis de permissão
- `Read`: leitura e acompanhamento
- `Triage`: revisão de Issues e Discussions sem push em código
- `Write`: desenvolvimento diário e Pull Requests
- `Maintain`: gerenciamento de branch protection e automações
- `Admin`: gerência de membros e configurações avançadas

## Matriz recomendada
| Integrante | Papel funcional | Operações esperadas | Permissão recomendada | Acesso ao Project | Justificativa |
| --- | --- | --- | --- | --- | --- |
| Integrante 1 | Coordenação | acompanhar issues e pendências | `Triage` ou `Write` | `Write` | organização e acompanhamento sem acesso administrativo |
| Integrante 2 | Desenvolvedor | criar branches, alterar código e abrir PR | `Write` | `Write` | execução técnica diária |
| Integrante 3 | Desenvolvedor | implementar regras e validar testes | `Write` | `Write` | necessidades operacionais do desenvolvimento |
| Integrante 4 | Revisor | revisar critérios e avaliar DoR | `Triage` ou `Write` | `Write` | revisão sem necessidade de acesso administrativo |

## Observação
Esta matriz é uma recomendação de governança. A alteração das permissões reais deve ser feita por administradores do repositório, com autorização da equipe.
