function makeInterpreter () {
  const callStack = []

  return function interpret (ast) {
    switch (ast.type) {
      case 'PROGRAM':
        return ast.children.map(interpret)

      
    }
  }
}

module.exports = makeInterpreter
