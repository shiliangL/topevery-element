import component from './src'

/* istanbul ignore next */
component.install = function (Vue) {
  Vue.component(component.name, component)
}

export default component
