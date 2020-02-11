function makeScope (parent, local = {}) {
  return {
    local,
    parent
  }
}

function makeStackFrame ({ scope, id }) {
  return { scope, id }
}

module.exports = {
  makeStackFrame,
  makeScope
}
