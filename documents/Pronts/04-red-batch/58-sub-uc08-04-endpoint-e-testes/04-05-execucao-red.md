## Build and test run

npm run build: succeeded.

Command: node --test dist/test/uc08-payment-red.test.js; exit code 0. Exact test-runner output:

````text
﹣ UC08 payment endpoint exposes approved and declined gateway outcomes (568.9392ms) # Blocked: the endpoint flow needs a gateway fixture contract and inscription setup; neither may be fabricated or sent to a real gateway.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 2049.8272
````

Interpretation: Blocked: the endpoint flow needs a gateway fixture contract and inscription setup; neither may be fabricated or sent to a real gateway.