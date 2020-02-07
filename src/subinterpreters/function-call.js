const { push, head, pop } = require('../utils/stack')
const { lookup } = require('../utils/lookup')
const { last } = require('../utils/last')
const { IsNative } = require('../native/IsNativeSymbol')

function functionCall (interpret, env) {
  return (node) => {
    const callee = interpret(node.callee)
    env.callStack = push(env.callStack, {})

    callee.args.forEach((arg, i) => {
      head(env.callStack)[arg.value] = interpret(node.args[i])
    })

    const result = callee[IsNative]
      ? callee.do(...callee.args.map((id) => lookup(env.callStack, id.value)))
      : last(callee.body.map(interpret))

    env.callStack = pop(env.callStack)
    return result
  }
}

module.exports = { functionCall }
