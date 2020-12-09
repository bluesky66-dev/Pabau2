module.exports = {
  presets: ['@nrwl/react/babel'],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
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
