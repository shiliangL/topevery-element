/*
 * @Author: shiliangL
 * @Date: 2020-10-14 10:16:23
 * @LastEditTime: 2020-10-14 11:24:16
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-ui/vue.config.js
 */
const path = require('path')
module.exports = {

  lintOnSave: false, // 是否开启代码检查

  // 修改 pages 入口
  pages: {
    index: {
      entry: 'src/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },

  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录
    // 新增一个 ~ 指向 packages
    config.resolve.alias
      .set('~', path.resolve('packages'))
    // 把 packages 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },

  lintOnSave: 'default'
}
