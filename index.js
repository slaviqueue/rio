const parser = require('./src/parser')
const makeInterpreter = require('./src/interpreter')
const interpret = makeInterpreter()

function run (code) {
  const result = interpret(parser.parse(code))
  return result
}

const code = `
  value list is [1, 2, 3]

  value is_empty is function of (list) do
    length' list 'equals' 0
  end

  value map is function of (list, fn) do
    if is_empty' list
      then list
      else [fn' head' list] 'concat' (tail' list 'map' fn)
  end

  value increment is function of (n) do n '+' 1 end

  [1, 2, 3, 4, 5, 6] 'map' increment
`

console.log(run(code))

module.exports = run
