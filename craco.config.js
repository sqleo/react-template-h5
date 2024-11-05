const path = require("path");
const CracoLessPlugin = require('craco-less');
module.exports = {
  style: {
    postcss: {
      loaderOptions: () => ({
        postcssOptions: {
          ident: 'postcss',
        }
      })
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        sourceMap: true
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@views': path.resolve(__dirname, 'src/views'),
    }
  },
}
