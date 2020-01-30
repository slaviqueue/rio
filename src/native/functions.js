const IsNative = require('./IsNativeSymbol')

function sum (a, b) {
  return a + b
}

sum[IsNative] = true

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
  }
}
