function stack (...elements) {
  return elements
}

function push (stack, element) {
  return [element, ...stack]
}

function head (stack) {
  return stack[0]
}

function pop ([head, ...stack]) {
  return stack
}

function empty (stack) {
  return !stack.length
}

function copy (copiable) {
  return stack(...copiable)
}

module.exports = {
  stack,
  push,
  head,
  pop,
  empty,
  copy
}
