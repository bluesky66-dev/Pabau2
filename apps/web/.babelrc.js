// .babelrc.js
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {},
        // 'styled-jsx': {
        //   plugins: ['styled-jsx-plugin-postcss'],
        // },

        'styled-jsx': {
          //plugins: ['styled-jsx-plugin-less'],
        },
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        // libraryDirectory: 'es',
        style: false,
      },
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
      },
      '@ant-design/icons',
    ],
  ],
}
