const { head } = require('../utils/stack')

function valueDeclaration (interpret, { callStack }) {
  return (node) => {
    const value = interpret(node.value)

    if (head(callStack)[node.id.value]) {
      throw new Error(`Constant ${node.id.value} cannot be reassigned`)
    }

    head(callStack)[node.id.value] = value

    return value
  }
}

module.exports = { valueDeclaration }
