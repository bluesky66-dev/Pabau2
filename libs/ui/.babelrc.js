module.exports = {
  presets: [
    ['@nrwl/react/babel'],
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
    //     libraryDirectory: 'es/icons',
    //     camel2DashComponentName: false,
    //   },
    //   '@ant-design/icons',
    // ],
  ],
}
