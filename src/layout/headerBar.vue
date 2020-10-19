<!--
 * @Author: shiliangL
 * @Date: 2020-10-15 09:46:14
 * @LastEditTime: 2020-10-19 10:13:36
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-pro/src/layout/headerBar.vue
-->
<template>
  <header class="clearfix header">
    <div class="header-logo">
      <img
        src="~@/assets/logo.png"
        style="height: 54px;"
        alt=""
      >
    </div>
    <div
      v-if="1"
      class="header-nav"
    >
      <div
        class="header-nav-item"
        v-for="(item,index) in list"
        :key="index"
      >
        <sapn v-text="item.text"></sapn>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { text: '数据可视化' },
        { text: '后台管理系统' },
        { text: '地图相关' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0 10px;
  position: relative;
  height: 64px;
  z-index: 10;
  display: flex;
  max-width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 8px #f0f1f2;
  align-items: center;
  .header-logo {
    width: 260px;
  }
  .header-nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    font-family: "微软雅黑";
    font-weight: 400;
    .header-nav-item {
      cursor: pointer;
      margin: 0 10px;
      transition: all 0.22;
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
