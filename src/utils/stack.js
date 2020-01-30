function stack (...elements) {
  return elements
}

function push (stack, element) {
  return [element, ...stack]
}

function head (stack) {
  return stack[0]
}

module.exports = {
  stack,
  push,
  head
}
