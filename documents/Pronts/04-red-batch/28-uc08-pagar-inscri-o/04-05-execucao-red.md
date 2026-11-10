## Build e execução


pm run build: sucesso.

Comando: 
ode --test dist/test/uc08-payment-red.test.js (exit code 0; cenário skipped/blocked). Saída exata:

``text
﹣ UC08 payment outcome cannot be tested until a safe gateway simulator contract is approved (643.8397ms) # Blocked: no gateway abstraction or approved test-double contract; never accept outcome from request input.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 2335.8219
``n
O teste não alcançou regra de negócio; skip é intencional, não sucesso de comportamento.
