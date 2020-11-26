const fs = require('fs')
const path = require('path')
function resolve (dir) {
  return path.resolve(__dirname, dir)
}
const join = path.join
function getEntries (path) {
  const files = fs.readdirSync(resolve(path))
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.js'))
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}
// 开发环境配置
const devConfig = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'src/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        main: resolve('src'),
        packages: resolve('packages')
      }
    }
  },
  chainWebpack: config => {
    // 新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('main', path.resolve('src'))
      .set('packages', path.resolve('packages'))
      .set('~', path.resolve('packages'))
      .set('~md', path.resolve('md-docs'))

    // config.module
    //   .rule('js')
    //   .include.add('/packages')
    //   .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
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
  },
  devServer: {
    port: 8090,
    hot: true,
    open: 'Google Chrome'
  }
}
// 生成环境配置
const buildConfig = {
  css: {
    sourceMap: false,
    extract: {
      filename: 'style/[name].css'
    }
  },
  configureWebpack: {
    entry: {
      ...getEntries('packages'),
      index: './src/index.js'
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2'
    }
  },
  chainWebpack: config => {
    // 新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('main', path.resolve('src'))
      .set('packages', path.resolve('packages'))
      .set('~', path.resolve('packages'))
      .set('~md', path.resolve('md-docs'))

    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')

    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(option => {
        option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
        return option
      })
  },
  outputDir: 'lib',
  productionSourceMap: false
}

module.exports =
  process.env.NODE_ENV === 'development' ? devConfig : buildConfig
