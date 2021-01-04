const withAntdLess = require('next-plugin-antd-less');
const withNx = require('@nrwl/next/plugins/with-nx');
const path = require('path')

module.exports = withAntdLess(withNx({
  cssModules: true,

  cssLoaderOptions: {

  },

  lessLoaderOptions: {
    webpackImporter: false,
    rewriteUrls: 'local',
    lessOptions: {
      javascriptEnabled: true,

    },
  },

}));
