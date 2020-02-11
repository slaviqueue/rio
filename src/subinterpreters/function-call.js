const { push, pop } = require('../utils/stack')
const { lookup } = require('../utils/lookup')
const { last } = require('../utils/last')
const { IsNative } = require('../native/IsNativeSymbol')
const { currentFrameScope, frame } = require('../utils/scope')

function functionCall (interpret, env) {
  return (node) => {
    const callee = interpret(node.callee)
    const currentFrame = frame(callee.scope)

    callee.args.forEach((arg, i) => {
      currentFrame.scope.local[arg.value] = interpret(node.args[i])
    })
    console.log(currentFrameScope(env.callStack))

    env.callStack = push(env.callStack, currentFrame)

    const result = callee[IsNative]
      ? callee.do(...callee.args.map((id) => lookup(currentFrameScope(env.callStack), id.value)))
      : last(callee.body.map(interpret))

    env.callStack = pop(env.callStack)
    return result
  }
}

module.exports = { functionCall }
