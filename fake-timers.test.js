const React = require('react')
const ReactDOM = require('react-dom')
const {act} = require('react-dom/test-utils')
const {useQuery, queryCache} = require('react-query')

afterEach(() => queryCache.clear())

beforeEach(() => jest.useFakeTimers('modern'))
afterEach(() => jest.useRealTimers())

test('example', async () => {
  function Example() {
    const {data} = useQuery({
      queryKey: 'some-key',
      queryFn: () => new Promise((r) => setTimeout(() => r('data'), 300)),
    })
    return data || 'no data yet'
  }
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(React.createElement(Example), div)

  expect(div.innerHTML).toBe('no data yet')
  act(() => jest.runAllTimers())
  expect(div.innerHTML).toBe('data')

  div.remove()
})
