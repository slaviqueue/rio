/* global describe it */
const expect = require('chai').expect
const { stack, push, head, pop, empty } = require('../../src/utils/stack')

describe('Stack', () => {
  describe('Stack::stack()', () => {
    it('creates new stack', () => {
      const callStack = stack()

      expect(callStack).to.haveOwnProperty('length')
      expect(callStack).to.be.an('array')
    })

    it('adds passed args to stack', () => {
      const elements = [1, 2, 3]

      expect(stack(...elements)).to.deep.eq(elements)
    })
  })

  describe('Stack::push(stack, element)', () => {
    it('pushes element to stack', () => {
      const callStack = stack(1)
      const newStack = push(callStack, 2)

      expect(newStack[0]).to.eq(2)
    })
  })

  describe('Stack::head(stack)', () => {
    it('shows head of stack', () => {
      const callStack = stack(1)
      expect(head(callStack)).to.eq(1)
    })
  })

  describe('Stack::pop(stack)', () => {
    it('pops stack', () => {
      const callStack = stack(1, 2)
      const newStack = pop(callStack)

      expect(newStack.length).to.eq(1)
      expect(newStack[0]).to.eq(2)
    })
  })

  describe('Stack::empty(stack)', () => {
    it('returns true if stack is empty', () => {
      const callStack = stack()
      const isEmpty = empty(callStack)

      expect(isEmpty).to.eq(true)
    })
  })
})
