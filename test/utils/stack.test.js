const expect = require('chai').expect
const { stack } = require('../../src/utils/stack')

describe('#stack', () => {
  it ('creates new stack', () => {
    const callStack = stack()

    expect(callStack).to.haveOwnProperty('length')
    expect(callStack).to.be.an('array')
  })
})
