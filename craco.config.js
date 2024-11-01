const path = require("path");
const CracoLessPlugin = require('craco-less');
const addPath = dir => path.join(__dirname, dir);
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
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
}
