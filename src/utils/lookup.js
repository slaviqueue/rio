const { isNil } = require('lodash')
const { empty, head, pop, stack } = require('./stack')

function lookup (scope, id) {
  function iter (scope) {
    console.log(scope, id)
    if (scope.local && scope.local[id]) {
      return scope.local[id]
    }

    if (!scope.parent) {
      return null
    }

    return iter(scope.parent)
  }

  const result = iter(scope)

  if (!result) {
    throw new Error(`${id} is not defined.`)
  }

  return result
}

module.exports = { lookup }
