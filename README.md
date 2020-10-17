<!--
 * @Author: shiliangL
 * @Date: 2020-10-14 10:13:35
 * @LastEditTime: 2020-10-17 11:39:16
 * @LastEditors: Do not edit
 * @Description: 
 * @FilePath: /topevery-element/README.md
-->
### topevery-element-ui v3版本 

- 抽离
- 细化
- 分离

### 关键文件说明

- src 文件大部分作为组件库样例使用
- packages 主机源码
- md-docs 组件md文件

### vue-cli3.0 添加对应的md loader

```
  chainWebpack: config => {
    // 解析Markdown文件转成vue组件
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('markdown-loader')
      .loader(require('path').resolve(__dirname, './scripts/md-loader/index.js'))
      .end()
  }
  
```


### 配置Travis自动构建部署

- Github 授权配置 https://github.com/settings/tokens 并且记录 GITHUB_TOKEN 的值
- NPM 创建一个 token 授权码，记录该授权码
- githbub 授权访问 https://www.travis-ci.org
- 设置 Travis 构建环境变量

### 开始项目支持jsx

npm install babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props babel-preset-env --save-dev