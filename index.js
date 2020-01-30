const fs = require('fs')
const peg = require('pegjs')
const makeInterpreter = require('./src/interpreter')

const grammar = fs.readFileSync('./src/grammar.pegjs', 'utf-8')
const parser = peg.generate(grammar)
const interpret = makeInterpreter()

function run (code) {
  return interpret(parser.parse(code))
}

const code = `


value a is 5
value b is 4


`

console.log(run(code))

module.exports = run
