/*
 * @Author: shiliangL
 * @Date: 2020-05-22 11:02:08
 * @LastEditTime: 2020-11-25 21:29:07
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-pro/packages/cube-max-height/index.js
 */
import component from './src'
component.install = function (Vue) {
  Vue.component(component.name, component)
}
export default component
