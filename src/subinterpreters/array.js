function array (interpret) {
  return (node) => node.value.map(interpret)
}

module.exports = { array }
