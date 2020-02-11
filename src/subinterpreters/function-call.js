const { push, head, pop } = require('../utils/stack')
const { lookup } = require('../utils/lookup')
const { last } = require('../utils/last')
const { IsNative } = require('../native/IsNativeSymbol')
const { makeStackFrame } = require('../utils/scope')

function functionCall (interpret, env) {
  return (node) => {
    const callee = interpret(node.callee)
    const stackFrame = makeStackFrame({ id: node.callee.value, scope: callee.scope })
    env.callStack = push(env.callStack, stackFrame)

    callee.args.forEach((arg, i) => {
      head(env.callStack).scope.local[arg.value] = interpret(node.args[i])
    })
    console.log(head(env.callStack))

    const result = callee[IsNative]
      ? callee.do(...callee.args.map((id) => lookup(env.callStack.scope, id.value)))
      : last(callee.body.map(interpret))

    env.callStack = pop(env.callStack)
    return result
  }
}

module.exports = { functionCall }
