const { lookup } = require('../utils/lookup')

function identifier (interpret, { callStack }) {
  return (node) => lookup(callStack, node.value)
}

module.exports = { identifier }
