/*
 * @Author: shiliangL
 * @Date: 2020-10-17 17:08:00
 * @LastEditTime: 2020-11-26 14:11:40
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-pro/babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
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
