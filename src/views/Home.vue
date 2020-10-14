<!--
 * @Author: shiliangL
 * @Date: 2020-10-14 10:56:37
 * @LastEditTime: 2020-10-14 16:23:41
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/src/views/Home.vue
-->
<template>
  <div class="home">
    <ButtonMd />
  </div>
</template>

<script>
// @ is an alias to /src

import ButtonMd from '~md/button.md'

export default {
  name: 'Home',
  components: {
    ButtonMd
  }
}
</script>
