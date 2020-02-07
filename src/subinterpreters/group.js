function group (interpret) {
  return (node) => interpret(node.children)
}

module.exports = { group }
