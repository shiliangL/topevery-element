import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import topeveryUi from '~/index.js'

Vue.config.productionTip = false

Vue.use(topeveryUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
