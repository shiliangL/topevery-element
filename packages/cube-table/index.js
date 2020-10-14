/*
 * @Author: shiliangL
 * @Date: 2020-05-22 11:02:08
 * @LastEditTime: 2020-10-14 11:52:32
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/packages/cube-table/index.js
 */
import component from './src'

/* istanbul ignore next */
component.install = function (Vue) {
  Vue.component(component.name, component)
}

export default component
