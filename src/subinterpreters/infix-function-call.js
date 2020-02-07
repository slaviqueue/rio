function infixFunctionCall (interpret) {
  return (node) => interpret({ ...node, type: 'FUNCTION_CALL' })
}

module.exports = { infixFunctionCall }
