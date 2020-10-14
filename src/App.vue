<!--
 * @Author: shiliangL
 * @Date: 2020-10-14 10:13:13
 * @LastEditTime: 2020-10-14 11:41:22
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-v3/src/App.vue
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'" />
        below
      </p>
      <el-button>el-button</el-button>
      <cube-table />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
