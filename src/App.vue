<!--
 * @Author: shiliangL
 * @Date: 2020-10-14 10:13:13
 * @LastEditTime: 2020-10-14 17:22:21
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import hljs from 'highlight.js'

export default {
  name: 'App',
  mounted () {
    this.$nextTick(() => {
      const blocks = document.querySelectorAll('pre code:not(.hljs)')
      Array.prototype.forEach.call(blocks, hljs.highlightBlock)
    })
  }
}
</script>
