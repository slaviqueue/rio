const { lookup } = require('../utils/lookup')
const { currentFrameScope } = require('../utils/scope')

function identifier (interpret, { callStack }) {
  return (node) => {
    return lookup(currentFrameScope(callStack), node.value)
  }
}

module.exports = { identifier }
