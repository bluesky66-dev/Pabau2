const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = {
  trailingSlash: true,
  ...withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif", "ico", "webp", "jp2", "avif"],
    inlineImageLimit: 10000,
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
