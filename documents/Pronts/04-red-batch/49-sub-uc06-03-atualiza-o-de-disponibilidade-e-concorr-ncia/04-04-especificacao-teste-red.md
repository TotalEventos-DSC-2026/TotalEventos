# 04-04 — Especificacao do Teste RED

## Criterio
Liberar ocupacao ao cancelar evento e manter limites em liberacoes concorrentes.

## Teste
`test/uc06-49-disponibilidade-concorrencia-red.test.ts` exercita a rota/seam proposto e espera o comportamento descrito na issue.

## Contrato proposto
Seam interno assumido: SessaoPalestra.liberarVaga; validar o desenho com a equipe.

## Limite da evidencia
undefined em vez de function para a operacao de liberacao; a assercao concorrente nao foi alcancada. SessaoPalestra nao expoe liberacao de vaga; a concorrencia/ocupacao nao foi exercitada.