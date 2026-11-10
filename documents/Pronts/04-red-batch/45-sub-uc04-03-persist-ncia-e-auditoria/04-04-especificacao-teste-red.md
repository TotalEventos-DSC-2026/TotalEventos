# 04-04 — Especificacao do Teste RED

## Criterio
Persistir o estado CANCELADA e atualizar o registro da inscricao.

## Teste
`test/uc04-45-persistencia-auditoria-red.test.ts` usa a entidade/servico existente e verifica a operacao e o estado persistido/ocupacao esperado.

## Contrato de teste
O nome interno `InscricoesService.cancelarInscricao` e uma hipotese de teste para tornar o comportamento observavel, nao uma decisao final de API ou design.

## Limite da evidencia
A operacao nao existe no codigo atual. Portanto, as assercoes posteriores nao foram alcancadas e a regra de dominio ainda nao foi exercitada.