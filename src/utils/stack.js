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

module.exports = {
  stack,
  push,
  head,
  pop
}
