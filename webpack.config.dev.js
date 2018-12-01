/*
 * @Author: Detcx 
 * @Date: 2018-12-01 09:08:54 
 * @Last Modified by: Detcx
 * @Last Modified time: 2018-12-01 10:42:58
 * @Description: development
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge.smart(base, {
  mode: "development",
  output: {
    chunkFilename: "bundle/[name].bundle[chunkhash:6].js"
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('@CopyRight-Detcx'), // 无聊
    /*
    // 可视化分析
    new BundleAnalyzerPlugin({
      analyzerPort: 2018,
      generateStatsFile: true
    })
    */
  ]
});
