const { parser } = require('./src/parser')
const { makeInterpreter } = require('./src/interpreter')
const { last } = require('./src/utils/last')

const interpret = makeInterpreter()

function run (code) {
  const result = interpret(parser.parse(code))
  return last(result)
}

module.exports = { run }
