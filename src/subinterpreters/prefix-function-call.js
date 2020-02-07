function prefixFunctionCall (interpret) {
  return (node) => interpret({ ...node, type: 'FUNCTION_CALL' })
}

module.exports = { prefixFunctionCall }
