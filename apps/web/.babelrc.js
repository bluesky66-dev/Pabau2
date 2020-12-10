// .babelrc.js
module.exports = {
  presets: [
    ['next/babel'],
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
  plugins: [
    // [
    //   'import',
    //   {
    //     libraryName: 'antd',
    //     style: true,
    //   },
    // ],
    // [
    //   'import',
    //   {
    //     libraryName: '@ant-design/icons',
    //     libraryDirectory: 'es',
    //     camel2DashComponentName: false,
    //   },
    //   '@ant-design/icons',
    // ],
  ],
}
