var path = require('path')
var fs = require('fs')
var nodeExternals = require('webpack-node-externals')
var Components = require('../components.json')

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))
var externals = {}

Object.keys(Components).forEach(function (key) {
  externals[`cube-element/packages/${key}`] = `cube-element/lib/${key}`
})

utilsList.forEach(function (file) {
  file = path.basename(file, '.js')
  externals[`cube-element/src/utils/${file}`] = `cube-element/lib/utils/${file}`
})

mixinsList.forEach(function (file) {
  file = path.basename(file, '.js')
  externals[`cube-element/src/mixins/${file}`] = `cube-element/lib/mixins/${file}`
})

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  utils: path.resolve(__dirname, '../src/utils'),
  mixins: path.resolve(__dirname, '../src/mixins'),
  packages: path.resolve(__dirname, '../packages'),
  '@': path.resolve(__dirname, '../src'),
  '~packages': path.resolve(__dirname, '../packages')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
