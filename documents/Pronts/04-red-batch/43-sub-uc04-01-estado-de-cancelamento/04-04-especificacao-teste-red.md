# 04-04 — Especificacao do Teste RED

## Criterio
Representar a transicao de inscricao confirmada para CANCELADA e atualizar updatedAt.

## Teste
`test/uc04-43-estado-cancelamento-red.test.ts` usa a entidade/servico existente e verifica a operacao e o estado persistido/ocupacao esperado.

## Contrato de teste
O nome interno `Inscricao.cancelar` e uma hipotese de teste para tornar o comportamento observavel, nao uma decisao final de API ou design.

## Limite da evidencia
A operacao nao existe no codigo atual. Portanto, as assercoes posteriores nao foram alcancadas e a regra de dominio ainda nao foi exercitada.