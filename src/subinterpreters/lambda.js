const { scope, currentFrameScope } = require('../utils/scope')

function lambda (interpret, env) {
  return (node) => ({
    ...node,
    scope: scope(currentFrameScope(env.callStack), {})
  })
}

module.exports = { lambda }
