/* global describe it */
const expect = require('chai').expect
const { parse } = require('../src/parser')

describe('parser', () => {
  describe('parser.parse', () => {
    it('creates global ast node', () => {
      const ast = parse('')

      expect(ast.type).to.be.eq('PROGRAM')
    })

    it('parses number expression', () => {
      const code = '3'
      const ast = parse(code)

      expect(ast).to.be.an('object')
      expect(ast.body[0].type).to.be.eq('NUMBER')
    })
  })
})
