const { head } = require('./stack')

function frame (scope) {
  return { scope }
}

function scope (parent, local) {
  return { parent, local }
}

function currentFrameScope (callStack) {
  return head(callStack).scope
}

module.exports = { frame, scope, currentFrameScope }
