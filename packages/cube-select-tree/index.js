import component from './src'

component.install = function (Vue, opts = {}) {
  Vue.component(component.name, component)
}

export default component
