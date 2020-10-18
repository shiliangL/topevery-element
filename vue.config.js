/*
 * @Author: shiliangL
 * @Date: 2020-10-14 10:16:23
 * @LastEditTime: 2020-10-18 20:17:52
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-pro/vue.config.js
 */
const path = require('path')

module.exports = {

  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  // lintOnSave: false, // 是否开启代码检查
  productionSourceMap: false,

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
      .set('~md', path.resolve('md-docs'))
    // 把 packages 加入编译，因为新增的文件默认是不被 webpack 处理的
    // config.module
    //   .rule('js')
    //   .include.add(/packages/).end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options
    //   })
    // 解析Markdown文件转成vue组件
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('markdown-loader')
      .loader(require('path').resolve(__dirname, './scripts/md-loader/index.js'))
      .end()

    // config.optimization.splitChunks({
    //   chunks: 'all',
    //   maxInitialRequests: Infinity,
    //   // 依赖包超过300000bit将被单独打包
    //   minSize: 300000,
    //   automaticNameDelimiter: '-',
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name (module) {
    //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
    //         return `chunk.${packageName.replace('@', '')}`
    //       },
    //       priority: 10
    //     }
    //   }
    // })
  }
}
