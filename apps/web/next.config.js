const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = {
  trailingSlash: false,
  ...withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif", "ico", "webp", "jp2", "avif", "woff", "woff2", "otf"],
    inlineImageLimit: 100000,
    ...withAntdLess({
      importLoaders: 3,
      cssLoaderOptions: {
        sourceMap: true,
        esModule: true,
        modules: {
          exportLocalsConvention: 'camelCase',
          // exportOnlyLocals: false,
          mode: 'local',
        },
      },
      ...withNx({
        cssModules: false,
      })
    })
  })
};
