<!--
 * @Author: shiliangL
 * @Date: 2020-10-14 16:44:33
 * @LastEditTime: 2020-10-14 17:42:59
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/src/layout/index.vue
-->
<template>
  <div class="layout">
    <siderBar :data="navsData['zh-CN']"></siderBar>
    <div class="main-content">
      <router-view class="content" />
    </div>
  </div>
</template>

<script>

import navsData from '../../nav.config.json'
import siderBar from './siderBar'

export default {
  components: {
    siderBar
  },
  data () {
    return {
      navsData
    }
  }
}
</script>

<style lang="scss" scoped>

.layout{
    display: flex;
    .main-content{
      overflow-x: hidden;
      overflow-y: auto;
    }
}

</style>
