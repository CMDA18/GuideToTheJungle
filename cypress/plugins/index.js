// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require('fs')
const paths = require('../../config/paths')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // handle ENV vars
  // https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
  // (modified)
  const dotenvFiles = [
    `${paths.dotenv}.local`,
    paths.dotenv
  ].filter(Boolean)

  // Load environment variables from .env* files. Suppress warnings using silent
  // if this file is missing. dotenv will never modify any environment variables
  // that have already been set.
  // https://github.com/motdotla/dotenv
  dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
      require('dotenv').config({
        path: dotenvFile
      })
    }
  })

  // asign env vars IF they match cypressprefix
  const CYPRESS_ENVS = /^CYPRESS_/i
  config.env =
    Object.keys(process.env)
      .filter(key => CYPRESS_ENVS.test(key))
      .reduce((env, key) => Object.assign(env, {[key]: process.env[key]}), config.env)

  return config
}
