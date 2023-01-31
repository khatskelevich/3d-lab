const webpack = require('webpack')

module.exports = {
  webpack: {
    // resolve: {
    //   fallback: {
    //     path: require.resolve("path-browserify"),
    //     fs: false
    //   }
    // },
    plugins: {
      add: [
        new webpack.DefinePlugin({
          process: {env: {}}
        })
      ]
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        fs: false,
        "path": require.resolve("path-browserify")
      }
      return webpackConfig;
    },
  },
};
