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

  value fac is function of (n) do
    if 1 'equals' n
      then n
      else n '*' fac(n '-' 1)
  end

  fac' a
  fac' b
`

console.log(run(code))

module.exports = run
