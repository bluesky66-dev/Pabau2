const path = require('path')

/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  // Make whatever fine-grained changes you need

  config.plugins.push([
    "@babel/plugin-transform-runtime",
    {
      "absoluteRuntime": false,
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "useESModules": false,
      "version": "7.12.5"
    }
  ])

  // Return the altered config
  return config
}
