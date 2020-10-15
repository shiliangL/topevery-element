<!--
 * @Author: shiliangL
 * @Date: 2020-10-14 16:44:33
 * @LastEditTime: 2020-10-15 08:46:00
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/src/layout/index.vue
-->
<template>
  <div class="layout">
    <header class="clearfix header">
    </header>
    <div class="main-wrapper">
      <siderBar :data="navsData['zh-CN']"></siderBar>
      <div class="main-content">
        <router-view class="content" />
      </div>
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
.layout {
  height: 100%;
  overflow: hidden;

  .header {
    position: relative;
    height: 64px;
    z-index: 10;
    max-width: 100%;
    background: #000000;
    color: #ffffff;
    box-shadow: 0 2px 8px #f0f1f2;
  }

  .main-content {
    flex: 1;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .main-wrapper {
    display: flex;
    height: 100%;
    overflow: auto;
  }
}
</style>
