// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = process.env.BABEL_ENV || 'production'
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

// Ensure environment variables are read.
const envVars = require('../config/env')().raw
for (const envVar in envVars) {
  process.env[envVar] = envVars[envVar]
}

require('babel-register')
require('../config/polyfills')

if (process.env.NODE_ENV === 'development') {
  require('piping')({
    hook: true,
    ignore: /(\/\.|~$|node_modules\/$)/i
  })
}

require('../src/server')
