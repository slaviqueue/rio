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
  }
}
