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
    args: [{ value: 'head_a' }],
    do: ([head]) => head
  },
  tail: {
    [IsNative]: true,
    args: [{ value: 'atail_a' }],
    do: ([head, ...tail]) => tail
  },
  concat: {
    [IsNative]: true,
    args: [{ value: 'liast_a' }, { value: 'last_b' }],
    do: (firstList, secondList) => {
      return [...firstList, ...secondList]
    }
  },
  length: {
    [IsNative]: true,
    args: [{ value: 'lissdfdst' }],
    do: (list) => list.length
  },
  log: {
    [IsNative]: true,
    args: [{ value: 'loggable' }],
    do: (loggable) => console.log(JSON.stringify(loggable))
  }
}
