const { stack, head, pop, empty, push } = require('./utils/stack')
const nativeFunctions = require('./native/functions')
const IsNative = require('./native/IsNativeSymbol')

const globalScope = {
  '+': nativeFunctions.sum,
  '-': nativeFunctions.subtract,
  '*': nativeFunctions.multiply,
  '/': nativeFunctions.divide,
  equals: nativeFunctions.equal
}

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
          head(callStack)[arg.value] = interpret(node.args[i])
        })

        const result = callee[IsNative]
          ? callee.do(...callee.args.map((id) => lookup(callStack, id.value)))
          : last(callee.body.map(interpret))

        callStack = pop(callStack)
        return result
      }

      case 'INFIX_FUNCTION_CALL': {
        return interpret({ ...node, type: 'FUNCTION_CALL' })
      }

      case 'PREFIX_FUNCTION_CALL': {
        return interpret({ ...node, type: 'FUNCTION_CALL' })
      }

      case 'CONDITION': {
        return interpret(node.condition) ? interpret(node.ifTrue) : interpret(node.ifFalse)
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
