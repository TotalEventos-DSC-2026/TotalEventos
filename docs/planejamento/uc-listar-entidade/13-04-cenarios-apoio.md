# 13-04 - Cenários de apoio

## Cenários sem seed

- Código QR vazio em `POST /acessos/check-in` → `400`.
- Código QR inexistente em `POST /acessos/check-in` → `404`.
- Rota inexistente → `404`.

## Cenários dependentes de dados

Não foi identificado um script de seed real para ingressos ou inscrições.
Portanto, não há cenários aprovados com IDs inventados. Casos que exigem
um ingresso real ficam como **Não foi possível verificar**.

## Cenários de inscrição

A rota `POST /inscricoes/:id/check-in` existe no código, mas não há dados reais
identificados para executar um cenário válido. O identificador vazio não é usado
como dado fictício.
