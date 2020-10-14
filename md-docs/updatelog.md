<!--
 * @Author: shiliangL
 * @Date: 2020-05-30 12:25:29
 * @LastEditTime: 2020-09-23 09:30:56
 * @LastEditors: Do not edit
 * @Description: 
 * @FilePath: /topevery-element-ui-v2/examples/docs/zh-CN/updatelog.md
--> 
### 版本更新日志

- 2020年05月30日

更新可配置项主要针对可以配置`TokenKey`以及配置请求数据返回结构，适配不同的后台数据结构。

``` JS
import Element from 'topevery-element-ui';
Vue.use(Element, {
    adminToken: 'shiliangl',
    code:'code',
    data:'data',
    success:'success',
    page:'records',
    total:'total'
});
```

- 2020年06月05日 - 0.0.30

新增业务级联组件cube-select-cascad，配置化快速实现业务数据二级联动。


- 2020年07月01日 - 0.0.33

列表组件添加row双击表格行事件

列表组件新增配置默认设置项immediateLoad:true是否组件创建就加载数据

弹窗组件设置默认默认项ESC不关闭。点击遮罩层不关闭

cube-cascader 添加可删除

- 2020年07月22日

"0.0.35" 作为分界线（接口拦截还在组件中）

"0.0.36" 测试版本接口方法放到vue原型对象中

"0.0.37" 测试版本接口方法放到vue原型对象中+fix cube-select + .babelrc修改


- 2020年09月23日
"0.0.38" fix cube-Table-List 分页检索重置问题。和初始值问题

```
///顶部检索组件 添加时间可配置 pickerOptions
{
    type: 'daterange',
    value: null,
    initValue: [
     '2020-09-23',
     '2020-09-23'
    ],
    key1: 'beginDate',
    key2: 'endDate',
    placeholder1: '开始日期',
    placeholder2: '结束日期'
}

{
    value: null,
    type: 'date',
    key: 'carNo',
    placeholder: '时间',
    pickerOptions: {
        disabledDate(time) {
            return time.getTime() + (1000 * 60 * 60 * 24) > Date.now() ;
        }
    }
}           
```