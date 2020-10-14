/*
 * @Author: shiliangL
 * @Date: 2020-10-14 10:13:13
 * @LastEditTime: 2020-10-14 16:03:54
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/src/main.js
 */
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/atom-one-dark.css'
import './style/demo-styles/index.scss'
import './style/index.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import topeveryUi from '~/index.js'
import demoBlock from './components/demo-block'

Vue.component('demo-block', demoBlock)
Vue.use(topeveryUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
