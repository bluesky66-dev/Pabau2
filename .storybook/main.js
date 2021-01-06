
module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
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
