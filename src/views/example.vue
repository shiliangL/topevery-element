<!--
 * @Author: shiliangL
 * @Date: 2020-10-17 11:07:21
 * @LastEditTime: 2020-10-17 11:17:31
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/src/views/Example.vue
-->
<template>
  <cube-Table :config="config" />
</template>

<script>
export default {
  data () {
    return {
      config: {
        data: [
          { date: '2016-05-02', name: '王富贵', gender: 1 },
          { date: '2016-05-02', name: '翠花', gender: 0 }
        ],
        columns: [
          { label: '姓名', key: 'name' },
          {
            label: '性别',
            key: 'gender', // render函数存在作为最高级别渲染。对应的key渲染将忽略
            render: (h, parmas) => {
              const { row } = parmas
              return <span> { row.gender ? '男' : '女'} </span>
            }
          }
        ]
      }
    }
  }
}
</script>
