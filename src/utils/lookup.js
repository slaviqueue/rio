const { isNil } = require('lodash')

function lookup (scope, id) {
  if (scope.local.hasOwnProperty(id)) {
    return scope.local[id]
  }

  if (!scope.parent) {
    throw new Error(`${id} is not defined`)
  }

  return lookup(scope.parent, id)
}

module.exports = { lookup }
