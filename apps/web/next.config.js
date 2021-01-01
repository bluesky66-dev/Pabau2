const withAntdLess = require('next-plugin-antd-less');
const path = require('path')

module.exports = withAntdLess({
  cssModules: true,
  lessVarsFilePath: path.resolve(__dirname, './styles/antd.less'),
  cssLoaderOptions: {
    sourceMap: true,
    esModule: true,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    importLoaders: 0,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.lss$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
        loaders: ['url-loader'],
        include: path.resolve(__dirname, '../')
      }
    );
    return config;
  },
});
