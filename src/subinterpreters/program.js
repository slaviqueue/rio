function program (interpret) {
  return (node) => node.body.map(interpret)
}

module.exports = { program }
