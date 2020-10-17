/*
 * @Author: shiliangL
 * @Date: 2020-10-14 10:13:13
 * @LastEditTime: 2020-10-17 14:42:21
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/babel.config.js
 */
module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
