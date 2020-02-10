const { IsNative } = require('./IsNativeSymbol')

module.exports = {
  sum: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a + b,
    context: []
  },
  subtract: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a - b,
    context: []
  },
  multiply: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a * b,
    context: []
  },
  divide: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a / b,
    context: []
  },
  equal: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (a, b) => a === b,
    context: []
  },
  head: {
    [IsNative]: true,
    args: [{ value: 'a' }],
    do: ([head]) => head,
    context: []
  },
  tail: {
    [IsNative]: true,
    args: [{ value: 'a' }],
    do: ([head, ...tail]) => tail,
    context: []
  },
  concat: {
    [IsNative]: true,
    args: [{ value: 'a' }, { value: 'b' }],
    do: (firstList, secondList) => [...firstList, ...secondList],
    context: []
  },
  length: {
    [IsNative]: true,
    args: [{ value: 'list' }],
    do: (list) => list.length,
    context: []
  },
  log: {
    [IsNative]: true,
    args: [{ value: 'loggable' }],
    do: (loggable) => console.log(JSON.stringify(loggable)),
    context: []
  }
}
