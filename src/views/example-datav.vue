<!--
 * @Author: shiliangL
 * @Date: 2020-11-21 09:32:05
 * @LastEditTime: 2020-11-21 10:02:20
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-pro/src/views/example-datav.vue
-->
<template>
  <div class="example-datav">
    数据可视化
    <VueCountup
      ref="VueCountup"
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
    />
  </div>
</template>

<script>

import VueCountup from 'vue-countup-v2'

export default {
  name: 'example-datav',
  components: {
    VueCountup
  },
  data () {
    return {
      delay: 1000,
      endVal: 0,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      const randomNum = this.randomNum([10, 60])
      this.endVal = this.endVal + randomNum
    }, 5000)
    this.$once('hook:beforeDestroy', () => { clearInterval(this.timer) })
  },
  methods: {
    onReady: function (instance, CountUp) {
    //   const _this = this
    //   instance.update(_this.endVal + 1)
    },
    randomNum (range) {
      const [min, max] = range
      return parseInt(Math.random() * (max - min + 1) + min, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
.example-datav {
  font-size: 4em;
  margin: 0;
  color: #4d63bc;
}
</style>
