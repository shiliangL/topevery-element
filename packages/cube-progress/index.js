/*
 * @Author: shiliangL
 * @Date: 2020-05-22 11:02:08
 * @LastEditTime: 2020-11-26 09:20:44
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-pro/packages/cube-progress/index.js
 */
import component from './src/index'

component.install = function (Vue) {
  Vue.component(component.name, component)
}

export default component
