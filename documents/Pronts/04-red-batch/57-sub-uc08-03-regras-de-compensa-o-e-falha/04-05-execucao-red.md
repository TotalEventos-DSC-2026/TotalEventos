## Build and test run

npm run build: succeeded.

Command: node --test dist/test/uc08-payment-red.test.js; exit code 0. Exact test-runner output:

````text
﹣ UC08 declined or failed payment leaves inscription and capacity consistent (733.7087ms) # Blocked: a deterministic decline/failure and compensation contract requires an approved gateway test double.
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 1
ℹ todo 0
ℹ duration_ms 2221.1695
````

Interpretation: Blocked: a deterministic decline/failure and compensation contract requires an approved gateway test double.