const { head } = require('../utils/stack')

function valueDeclaration (interpret, { callStack }) {
  return (node) => {
    const value = interpret(node.value)
    head(callStack)[node.id.value] = value

    return value
  }
}

module.exports = { valueDeclaration }
