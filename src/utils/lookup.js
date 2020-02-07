const { isNil } = require('lodash')
const { empty, head, pop, stack } = require('./stack')

function lookup (callStack, id) {
  let tempStack = stack(...callStack)

  while (!empty(tempStack)) {
    if (!isNil(head(tempStack)[id])) {
      return head(tempStack)[id]
    }

    tempStack = pop(tempStack)
  }

  throw new Error(`${id} is not defined.`)
}

module.exports = { lookup }
