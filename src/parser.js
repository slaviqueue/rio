const fs = require('fs')
const peg = require('pegjs')

const grammar = fs.readFileSync('./src/grammar.pegjs', 'utf-8')
const parser = peg.generate(grammar)

module.exports = parser
