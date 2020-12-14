const rootMain = require('../../../.storybook/main')
const path = require('path')

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)']
)

rootMain.addons.push({
  name: '@storybook/addon-storysource',
  options: {
    rule: {
      // test: [/\.stories\.jsx?$/], This is default
      include: [path.resolve(__dirname, '../src')], // You can specify directories
    },
    loaderOptions: {
      prettierConfig: { printWidth: 80, singleQuote: false },
    },
  },
})

module.exports = rootMain
