const { stack, head, pop, empty } = require('./utils/stack')

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

      case 'LAMBDA': {
        return node
      }

      case 'FUNCTION_CALL': {

      }
    }
  }

  interpret.callStack = callStack
  return interpret
}

function lookup (callStack, id) {
  let tempStack = stack(...callStack)

  while (!empty(tempStack)) {
    if (head(tempStack)[id]) {
      return head(tempStack)[id]
    }

    tempStack = pop(tempStack)
  }

  throw new Error(`${id} is not defined.`)
}

module.exports = makeInterpreter
