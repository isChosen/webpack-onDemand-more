/*
 * @Author: Detcx 
 * @Date: 2018-12-01 09:18:32 
 * @Last Modified by: Detcx 
 * @Last Modified time: 2018-12-01 09:18:32 
 * @Description: dll.dev
 */

const merge = require('webpack-merge');
const base = require('./webpack.config.dll.base');

module.exports = merge.smart(base, {
  mode: 'development'
})
