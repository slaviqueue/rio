const { stack, head } = require('./utils/stack')

const globalScope = {}

function makeInterpreter () {
  const callStack = stack(globalScope)

  function interpret (node) {
    console.log(node)
    switch (node.type) {
      case 'PROGRAM': {
        return node.body.map(interpret)
      }

      case 'VALUE_DECLARATION': {
        const value = interpret(node.value)
        head(callStack)[node.id.value] = value

        return value
      }

      case 'NUMBER': {
        return node.value
      }
    }
  }

  interpret.callStack = callStack
  return interpret
}

module.exports = makeInterpreter
