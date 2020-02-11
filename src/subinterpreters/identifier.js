const { head } = require('../utils/stack')
const { lookup } = require('../utils/lookup')

function identifier (interpret, { callStack }) {
  return (node) => lookup(head(callStack).scope, node.value)
}

module.exports = { identifier }
