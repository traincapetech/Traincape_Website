const path = require('path');

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
            maxInitialRequests: 25,
            minSize: 20000,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
              },
              common: {
                minChunks: 2,
                chunks: 'all',
                priority: -20,
                reuseExistingChunk: true,
              },
            },
          },
          runtimeChunk: {
            name: 'runtime',
          },
        };

        const CompressionPlugin = require('compression-webpack-plugin');

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
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};
