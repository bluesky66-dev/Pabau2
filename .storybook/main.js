
module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-knobs/register',
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
