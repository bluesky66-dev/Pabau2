module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-a11y', 'storybook-addon-i18next/register', '@storybook/addon-actions'],
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
