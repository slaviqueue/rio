const { head } = require('../utils/stack')
const { makeScope } = require('../utils/scope')

function lambda (interpret, env) {
  return (node) => ({
    ...node,
    scope: makeScope({ parent: head(env.callStack).scope, local: {} })
  })
}

module.exports = { lambda }
