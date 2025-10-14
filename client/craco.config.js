const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Production optimizations
      if (env === 'production') {
        // Add chunk loading error handling
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
                priority: 10,
              },
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 5,
                reuseExistingChunk: true,
              },
            },
          },
          runtimeChunk: {
            name: 'runtime',
          },
        };

        // Add compression plugin
        webpackConfig.plugins.push(
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 8192,
            minRatio: 0.8,
          })
        );

        // Optimize CSS
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
            },
          }),
          new CssMinimizerPlugin(),
        ];

        // Add chunk loading error handling
        webpackConfig.output = {
          ...webpackConfig.output,
          chunkLoadingGlobal: 'webpackChunkTraincape',
          globalObject: 'self',
        };
      }

      return webpackConfig;
    },
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
};
