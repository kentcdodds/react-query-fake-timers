Here's the output:

```
 FAIL  ./fake-timers.test.js
  ● Console

    console.error
      Warning: An update to Example inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
          in Example

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:88:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:5)
      at warnIfNotCurrentlyActingUpdatesInDEV (node_modules/react-dom/cjs/react-dom.development.js:23284:7)
      at dispatchAction (node_modules/react-dom/cjs/react-dom.development.js:15656:9)
      at rerender (node_modules/react-query/src/utils.js:121:45)
      at Object.onStateUpdate (node_modules/react-query/src/useBaseQuery.js:33:49)
      at node_modules/react-query/src/queryCache.js:280:38
          at Array.forEach (<anonymous>)

  ● example

    expect(received).toBe(expected) // Object.is equality

    Expected: "data"
    Received: "no data yet"

      23 |   expect(div.innerHTML).toBe('no data yet')
      24 |   act(() => jest.runAllTimers())
    > 25 |   expect(div.innerHTML).toBe('data')
         |                         ^
      26 |
      27 |   div.remove()
      28 | })

      at Object.<anonymous> (fake-timers.test.js:25:25)

 PASS  ./real-timers.test.js

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.408 s
Ran all test suites.
```
