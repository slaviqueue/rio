const { IsNative } = require('./IsNativeSymbol')

module.exports = {
  sum: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a + b,
    scope: { local: {} }
  },
  subtract: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a - b,
    scope: { local: {} }
  },
  multiply: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a * b,
    scope: { local: {} }
  },
  divide: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a / b,
    scope: { local: {} }
  },
  equal: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a === b,
    scope: { local: {} }
  },
  head: {
    [IsNative]: true,
    args: [{ value: 'a' }],
    do: ([head]) => head,
    scope: { local: {} }
  },
  tail: {
    [IsNative]: true,
    args: [{ value: 'a' }],
    do: ([head, ...tail]) => tail,
    scope: { local: {} }
  },
  concat: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (firstList, secondList) => [...firstList, ...secondList],
    scope: { local: {} }
  },
  length: {
    [IsNative]: true,
    args: [{ value: 'list' }],
    do: (list) => list.length,
    scope: { local: {} }
  },
  log: {
    [IsNative]: true,
    args: [{ value: 'loggable' }],
    do: (loggable) => console.log(JSON.stringify(loggable)),
    scope: { local: {} }
  }
}
