const { stack } = require('./utils/stack')
const nativeFunctions = require('./native/functions')

const { condition } = require('./subinterpreters/condition')
const { functionCall } = require('./subinterpreters/function-call')
const { identifier } = require('./subinterpreters/identifier')
const { infixFunctionCall } = require('./subinterpreters/infix-function-call')
const { lambda } = require('./subinterpreters/lambda')
const { number } = require('./subinterpreters/number')
const { prefixFunctionCall } = require('./subinterpreters/prefix-function-call')
const { program } = require('./subinterpreters/program')
const { valueDeclaration } = require('./subinterpreters/value-declaration')
const { array } = require('./subinterpreters/array')
const { group } = require('./subinterpreters/group')

const globalScope = {
  '+': nativeFunctions.sum,
  '-': nativeFunctions.subtract,
  '*': nativeFunctions.multiply,
  '/': nativeFunctions.divide,
  equals: nativeFunctions.equal,
  head: nativeFunctions.head,
  tail: nativeFunctions.tail,
  concat: nativeFunctions.concat,
  log: nativeFunctions.log,
  length: nativeFunctions.length
}

const TypeToSubinterpreter = {
  PROGRAM: program,
  VALUE_DECLARATION: valueDeclaration,
  NUMBER: number,
  LAMBDA: lambda,
  IDENTIFIER: identifier,
  FUNCTION_CALL: functionCall,
  INFIX_FUNCTION_CALL: infixFunctionCall,
  PREFIX_FUNCTION_CALL: prefixFunctionCall,
  CONDITION: condition,
  ARRAY: array,
  GROUP: group
}

function makeInterpreter () {
  const env = {
    callStack: stack(globalScope)
  }

  function interpret (node) {
    return TypeToSubinterpreter[node.type](interpret, env)(node)
  }

  interpret.env = env
  return interpret
}

module.exports = makeInterpreter
