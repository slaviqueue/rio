function condition (interpret) {
  return (node) => interpret(node.condition) ? interpret(node.ifTrue) : interpret(node.ifFalse)
}

module.exports = { condition }
