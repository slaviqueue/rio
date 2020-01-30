const parser = require('./src/parser')
const makeInterpreter = require('./src/interpreter')
const interpret = makeInterpreter()

function run (code) {
  const result = interpret(parser.parse(code))
  return result
}

const code = `
  value a is 5
  value b is 4

  value test is function of () do 3 '+' 4 end

  test(1, 2)
`

console.log(run(code))

module.exports = run
