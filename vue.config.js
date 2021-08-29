const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    performance: {
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000,
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.ANALYZER == '1'?'static':'none',
      }),
    ],
  },
};
