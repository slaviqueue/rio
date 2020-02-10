const { copy } = require('../utils/stack')

function lambda (interpret, env) {
  return (node) => ({
    ...node,
    context: copy(env.callStack)
  })
}

module.exports = { lambda }
