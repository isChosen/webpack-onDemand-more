/*
 * @Author: Detcx 
 * @Date: 2018-12-01 09:12:24 
 * @Last Modified by: Detcx
 * @Last Modified time: 2018-12-01 09:22:11
 * @Description: production
 */

const os = require('os');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge.smart(base, {
  mode: 'production',
  output: {
    chunkFilename: "bundle/[id].bundle[chunkhash:6].js"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: path.resolve(__dirname, 'dist/cache'),
        parallel: os.cpus().length - 1
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          { // 压缩图片: 影响构建速度 -> production 需要压缩, development 不需要
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {quality: 75}
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 压缩分离的 css
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: { removeAll: true }
      },
      canPrint: true // 是否将插件信息打印到控制台
    })
  ]
})
