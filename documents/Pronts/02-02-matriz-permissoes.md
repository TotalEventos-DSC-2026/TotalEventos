# Artefato 02 — Matriz de permissões do GitHub

## 1. Objetivo

Definir o nível de acesso recomendado para cada integrante do repositório, aplicando o princípio do menor privilégio e respeitando a necessidade operacional de cada papel.

## 2. Níveis de permissão do GitHub

| Nível | Descrição resumida | Uso típico |
| --- | --- | --- |
| `Read` | Leitura e acompanhamento | membros que precisam visualizar issues, PRs e documentação |
| `Triage` | Revisão e organização sem push direto | gestão inicial de issues e triagem |
| `Write` | Desenvolvimento diário e criação de branches | desenvolvedores e integrantes ativos |
| `Maintain` | Gestão de branches, automações e regras do repositório | responsáveis técnicos e coordenação |
| `Admin` | Configurações avançadas e gestão de membros | administradores do repositório |

## 3. Matriz de permissões recomendada

| Integrante | Papel funcional | Operações esperadas no repositório | Permissão recomendada | Acesso ao GitHub Project | Justificativa |
| --- | --- | --- | --- | --- | --- |
| Integrante 1 | `A definir` | `A definir` | `A definir` | `A definir` | Recomendação precisa ser confirmada conforme função real no projeto |
| Integrante 2 | `A definir` | `A definir` | `A definir` | `A definir` | Recomendação precisa ser confirmada conforme função real no projeto |

## 4. Observações de governança

- A matriz acima é recomendação de governança e não substitui a política real do repositório.
- O acesso ao GitHub Project e o acesso ao repositório são distintos.
- O nível de permissão deve ser o mínimo necessário para realizar a função.
- Coordenadores e responsáveis técnicos não devem receber permissões administrativas sem justificativa operacional.

## 5. Recomendação prática para o projeto

Para um projeto acadêmico de pequeno ou médio porte, a distribuição costuma ser:

- Desenvolvedores: `Write`
- Revisor de Issues: `Triage` ou `Write` dependendo da necessidade
- Coordenação: `Maintain`
- Administrador do repositório: `Admin`

## 6. Conclusão

A permissão final deve ser validada pelo responsável administrativo do repositório. Enquanto a equipe não for formalizada, a proposta acima deve ser entendida como recomendação inicial e sujeito a ajuste.
