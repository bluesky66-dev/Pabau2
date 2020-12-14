const path = require('path')

module.exports = {
  components: './src/index.ts',
  outputPath: './dist/playroom',
  typeScriptFiles: ['src/**/*.{ts,tsx}', '!**/node_modules'],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              //presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
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
                    libraryDirectory: 'es/icons',
                    camel2DashComponentName: false,
                  },
                  '@ant-design/icons',
                ],
              ],
            },
          },
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                fallback: require.resolve('null-loader'),
              },
            },
          ],
        },
        {
          test: /\.less$/,
          //exclude: /node_modules/,
          use: [
            // {
            //   loader: 'style-loader',
            // },
            // {
            //   loader: 'css-loader',
            // },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
                webpackImporter: false,
              },
            },
          ],
          //include: path.resolve(__dirname, './src/'),
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.less'],
    },
  }),
}
