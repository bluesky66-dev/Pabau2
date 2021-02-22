module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials', 'storybook-addon-i18next/register'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
}
