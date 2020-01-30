/* global describe it */
const expect = require('chai').expect
const { stack, push, head } = require('../../src/utils/stack')

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

  describe('Stack::push()', () => {
    it('pushes elements to stack', () => {
      const callStack = stack(1)
      const newStack = push(callStack, 2)

      expect(newStack[0]).to.eq(2)
    })
  })

  describe('Stack::head()', () => {
    it('shows head of stack', () => {
      const callStack = stack(1)
      expect(head(callStack)).to.eq(1)
    })
  })
})
