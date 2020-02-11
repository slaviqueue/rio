const { currentFrameScope } = require('../utils/scope')

function valueDeclaration (interpret, { callStack }) {
  return (node) => {
    const value = interpret(node.value)

    if (currentFrameScope(callStack).local[node.id.value]) {
      throw new Error(`Constant ${node.id.value} cannot be reassigned`)
    }

    currentFrameScope(callStack).local[node.id.value] = value

    return value
  }
}

module.exports = { valueDeclaration }
