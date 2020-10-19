<!--
 * @Author: shiliangL
 * @Date: 2020-10-17 11:07:21
 * @LastEditTime: 2020-10-19 09:21:49
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element-pro/src/views/example.vue
-->
<template>
  <div>
    <div class="tools">
      <el-button
        type="primary"
        v-for="(item,index) in tools"
        :key="index"
        @click="item.action"
      > {{ item.title }}</el-button>
    </div>
    <cube-Table
      ref="CubeTable"
      :loading="cubeTableConfig.loading"
      :config="config"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      cubeTableConfig: {
        loading: false
      },
      tools: [
        { title: '加载效果', action: () => { this.changeProps('loading') } },
        { title: '高亮选中', action: () => { this.setCurrentRow() } },
        { title: '设置勾选', action: () => { this.toggleRowSelection() } },
        { title: '获取勾选', action: () => { this.getTableSelection() } }
      ],
      config: {
        data: [
          { date: '2016-05-02', name: '王富贵1', gender: 1 },
          { date: '2016-05-02', name: '王富贵2', gender: 1 },
          { date: '2016-05-02', name: '王富贵3', gender: 1 },
          { date: '2016-05-02', name: '王富贵4', gender: 1 },
          { date: '2016-05-02', name: '王富贵5', gender: 1 },
          { date: '2016-05-02', name: '王富贵6', gender: 1 },
          { date: '2016-05-02', name: '王富贵7', gender: 1 }
        ],
        columns: [
          { label: '选项', type: 'selection' },
          { label: '序号', type: 'index' },
          { label: '姓名', key: 'name' },
          {
            label: '性别',
            key: 'gender', // render函数存在作为最高级别渲染。对应的key渲染将忽略
            render: (h, parmas) => {
              const { row } = parmas
              return <span> {row.gender ? '男' : '女'} </span>
            }
          }
        ]
      }
    }
  },
  methods: {
    changeProps (key) {
      this.cubeTableConfig[key] = !this.cubeTableConfig[key]
    },
    setCurrentRow () {
      this.toggleRowSelection()
      if (!this.setCurrentRowTag) {
        this.setCurrentRowTag = true
        this.$refs.CubeTable.setCurrentRow(this.config.data[1])
      } else {
        this.setCurrentRowTag = false
        this.$refs.CubeTable.setCurrentRow([])
      }
    },
    toggleRowSelection () {
      if (!this.toggleRowSelectionTag) {
        this.toggleRowSelectionTag = true
        this.$refs.CubeTable.toggleRowSelection(this.config.data[1], true)
      } else {
        this.toggleRowSelectionTag = false
        this.$refs.CubeTable.toggleRowSelection(this.config.data[1], false)
      }
    },
    getTableSelection () {
      const list = this.$refs.CubeTable.getTableSelection()
      this.$alert(list, '收集参数', {
        confirmButtonText: '确定',
        callback: action => {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tools {
  margin: 6px 0;
}
</style>
