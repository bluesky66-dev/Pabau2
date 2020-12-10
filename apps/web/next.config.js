const withNx = require('@nrwl/next/plugins/with-nx')
const withLess = require('@zeit/next-less')
const nextTranslate = require('next-translate')

module.exports = withLess({
    ...withNx({
      // Set this to true if you use CSS modules.
      // See: https://github.com/css-modules/css-modules
      cssModules: false,
      // ...nextTranslate({
      //   locales: ["en", "fr"],
      // }),
    }),
    javascriptEnabled: true,
    cssModules: false,
    lessLoaderOptions: {
      javascriptEnabled: true,
      cssModules: false,
    },
  });
