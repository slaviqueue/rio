const { stack, head, pop, empty, push } = require('./utils/stack')

const globalScope = {}

function makeInterpreter () {
  let callStack = stack(globalScope)

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

      case 'IDENTIFIER': {
        return lookup(callStack, node.value)
      }

      case 'FUNCTION_CALL': {
        const callee = interpret(node.callee)
        callStack = push(callStack, {})

        callee.args.forEach((arg, i) => {
          head(callStack)[arg] = interpret(node.args[i])
        })

        const result = last(callee.body.map(interpret))

        callStack = pop(callStack)
        return result
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

function last (list) {
  return list[list.length - 1]
}

module.exports = makeInterpreter
