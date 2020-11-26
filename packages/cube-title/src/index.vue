<template>
  <div class="cube-title">
    <div
      class="cube-title-top"
      v-if="$slots.title"
    >
      <div class="title tag">
        <slot
          name="title"
          class="title-name"
        />
      </div>
      <div class="title-right">
        <slot name="right" />
        <div
          @click="visible=!visible"
          class="canCollapse"
          v-if="canCollapse"
        >
          <span class="collapse-text"> {{ visible ? '收起' :'展开'}} </span>
          <i
            :class="visible?'is-active':''"
            class="el-collapse-item__arrow el-icon-arrow-right"
          ></i>
        </div>
      </div>
    </div>

    <transition name="el-zoom-in-top">
      <div
        v-show="visible"
        class="cube-title-content"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'CubeTitle',
  props: {
    canCollapse: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cube-title {
  width: 100%;
  .cube-title-top {
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: aliceblue;
    .title {
      display: flex;
      align-items: center;
      padding-left: 0.625rem;
      font-size: 1rem;
    }
    .tag {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 4px;
        height: 90%;
        background: #2f86f6;
      }
    }
    .title-right {
      display: flex;
      align-items: center;
    }
  }
  .el-collapse-item__arrow {
    margin: 0 8px 0 auto;
    transition: transform 0.3s;
    font-weight: 300;
    cursor: pointer;
    &.is-active {
      transform: rotate(90deg);
    }
  }
  .cube-title-content {
    padding: 0.625rem;
  }
  .canCollapse {
    margin-left: 6px;
    color: #2f86f6;
    font-size: 0.75rem;
    display: inline-block;
    cursor: pointer;
  }
  margin-bottom: 0.25rem;
}
</style>
