'use strict'

const { lstatSync, readdirSync } = require('fs')
const { join, resolve } = require('path')
const { execSync } = require('child_process')
const inquirer = require('inquirer')

const EX_DIR = resolve('examples')
const IS_WIN = /^win/.test(process.platform)

const dirs = readdirSync(EX_DIR).map(fn => join(EX_DIR, fn)).filter(f => (
  lstatSync(f).isDirectory()
))

inquirer.prompt([{
  type: 'list',
  name: 'ex',
  message: 'Which example would you like to run?',
  choices: dirs.map(dir => dir.replace(`${EX_DIR}/`, ''))
}])
  .then(r => {execSync(IS_WIN ? `poi ${r.ex}` : `poi ${join(EX_DIR, r.ex)}`, { stdio: [0, 1, 2] }) })
  // swallow child exit exceptions
  .catch(() => process.exit(0))
