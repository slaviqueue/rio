const { IsNative } = require('./IsNativeSymbol')

module.exports = {
  sum: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a + b
  },
  subtract: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a - b
  },
  multiply: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a * b
  },
  divide: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a / b
  },
  equal: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a === b
  },
  head: {
    [IsNative]: true,
    args: [{ value: 'a' }],
    do: ([head]) => head
  },
  tail: {
    [IsNative]: true,
    args: [{ value: 'a' }],
    do: ([head, ...tail]) => tail
  },
  concat: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (firstList, secondList) => [...firstList, ...secondList]
  },
  length: {
    [IsNative]: true,
    args: [{ value: 'list' }],
    do: (list) => list.length
  },
  log: {
    [IsNative]: true,
    args: [{ value: 'loggable' }],
    do: (loggable) => console.log(JSON.stringify(loggable))
  }
}
