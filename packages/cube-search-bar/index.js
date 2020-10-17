/*
 * @Author: shiliangL
 * @Date: 2020-05-22 11:02:08
 * @LastEditTime: 2020-10-16 10:59:26
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/packages/cube-search-bar/index.js
 */
import component from './src'

component.install = function (Vue) {
  Vue.component(component.name, component)
}

export default component
