/*
 * @Author: Detcx 
 * @Date: 2018-12-01 09:19:11 
 * @Last Modified by: Detcx 
 * @Last Modified time: 2018-12-01 09:19:11 
 * @Description: dll.pro
 */

const os = require('os');
const merge = require('webpack-merge');
const base = require('./webpack.config.dll.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge.smart(base, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: os.cpus().length - 1
      })
    ]
  }
})
