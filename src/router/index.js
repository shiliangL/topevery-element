// import navConfig from './nav.config'
import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/button',
    component: () => import('@/layout'),
    children: [
      {
        path: 'button',
        component: () => import(/* webpackChunkName: "about" */ './md-docs/button.md')
        // component: r => require.ensure([], () => r(require('../../md-docs/button.md')))
      },
      {
        path: '/button2',
        component: () => import(/* webpackChunkName: "about2" */ './md-docs/button2.md')
        // component: r => require.ensure([], () => r(require('../../md-docs/button2.md')))
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  setTimeout(() => {
    Vue.nextTick(() => {
      const blocks = document.querySelectorAll('pre code:not(.hljs)')
      Array.prototype.forEach.call(blocks, hljs.highlightBlock)
    })
  }, 0)
})

export default router
