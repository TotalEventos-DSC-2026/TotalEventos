## Build and test run

npm run build: succeeded.

Command: node --test dist/test/uc08-payment-red.test.js; exit code 0. Exact test-runner output:

````text
﹣ UC08 payment approval confirms an inscription only after gateway approval (561.9475ms) # Blocked: a deterministic approved response requires a safe gateway simulator contract that has not been agreed.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 2311.5762
````

Interpretation: Blocked: a deterministic approved response requires a safe gateway simulator contract that has not been agreed.