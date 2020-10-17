<!--
 * @Author: shiliangL
 * @Date: 2020-10-15 09:46:14
 * @LastEditTime: 2020-10-17 10:27:04
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/src/layout/headerBar.vue
-->
<template>
  <header class="clearfix header">
    <div class="header-logo">
      TOPEVERY-ELEMENT
    </div>
    <div v-if="0" class="header-nav">
      <div class="header-nav-item">
        导航
      </div>
      <div class="header-nav-item">
        导航
      </div>
      <div class="header-nav-item">
        导航
      </div>
      <div class="header-nav-item">
        导航
      </div>
      <div class="header-nav-item">
        导航
      </div>
    </div>
  </header>
</template>

<script>
export default {

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
  background: #000000;
  color: #ffffff;
  box-shadow: 0 2px 8px #f0f1f2;
  align-items: center;
  .header-logo {
    width: 260px;
  }
  .header-nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .header-nav-item{
        cursor: pointer;
        margin: 0 10px;
    }
  }
}
</style>
