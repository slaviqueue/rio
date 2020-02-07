const { push, head, pop } = require('../utils/stack')
const { lookup } = require('../utils/lookup')
const { last } = require('../utils/last')
const { IsNative } = require('../native/IsNativeSymbol')

function functionCall (interpret, callStack) {
  return (node) => {
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
}

module.exports = { functionCall }
