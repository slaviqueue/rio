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

  value multiplied_by is *
  value minus is -

  value fac is function of (n) do
    if 1 'equals' n
      then n
      else n 'multiplied_by' fac(n 'minus' 1)
  end

  value do_complex_shit is function of (n) do
    value a is n '+' 1
    value b is a '+' 3
    b
  end

  value process is function of (fn, n) do fn' n end

  do_complex_shit 'process' fac 'process' 4

  fac' a
  fac' b
`

console.log(run(code))

module.exports = run
