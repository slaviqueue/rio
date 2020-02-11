#!/usr/bin/env node
const { readFileSync } = require('fs')
const { run } = require('./run')

function execute ([_, __, path]) {
  const code = readFileSync(path, 'utf-8')
  console.log(run(code))
}

execute(process.argv)
