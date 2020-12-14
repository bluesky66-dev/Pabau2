const withNx = require('@nrwl/next/plugins/with-nx')
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const nextTranslate = require('next-translate')

module.exports =
  withCss({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
    },
    ...withLess({
      ...withNx({
        // Set this to true if you use CSS modules.
        // See: https://github.com/css-modules/css-modules
        cssModules: false,
        // ...nextTranslate(),
      }),
      //options: {
        lessLoaderOptions: {
          javascriptEnabled: true,
          cssModules: false,
        },
      //},
      // webpack: (config, { isServer }) => {
      //   if (isServer) {
      //     const antStyles = /antd\/.*?\/style.*?/;
      //     const origExternals = [...config.externals];
      //     config.externals = [
      //       (context, request, callback) => {
      //         if (request.match(antStyles)) return callback();
      //         if (typeof origExternals[0] === 'function') {
      //           origExternals[0](context, request, callback);
      //         } else {
      //           callback();
      //         }
      //       },
      //       ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      //     ];
      //
      //     config.module.rules.unshift({
      //       test: antStyles,
      //       use: 'null-loader',
      //     });
      //   }
      //   return config;
      // },
    })
  })
