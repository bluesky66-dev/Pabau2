
module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    'storybook-addon-playroom',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  }
}
