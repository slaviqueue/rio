const { push, head, copy } = require('../utils/stack')
const { lookup } = require('../utils/lookup')
const { last } = require('../utils/last')
const { IsNative } = require('../native/IsNativeSymbol')

function functionCall (interpret, env) {
  return (node) => {
    const callee = interpret(node.callee)
    const contextCallStack = callee[IsNative] ? env.callStack : push(callee.context, {})
    const originalCallStack = copy(env.callStack)
    env.callStack = contextCallStack

    callee.args.forEach((arg, i) => {
      head(env.callStack)[arg.value] = interpret(node.args[i])
    })

    const result = callee[IsNative]
      ? callee.do(...callee.args.map((id) => lookup(contextCallStack, id.value)))
      : last(callee.body.map(interpret))

    env.callStack = originalCallStack
    return result
  }
}

module.exports = { functionCall }
