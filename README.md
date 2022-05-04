# eslint-config-cupshe 介绍
eslint-config-cupshe是CUPSHE团队的ESLint配置。目前发布初版，目前大约有130条规则，包含可能存在的错误、最佳实践、变量、代码风格、ES6相关等5个大的规则板块。

# 项目接入使用
第一步：安装eslint-config-cupshe

第二步：添加或者修改.eslintrc.js 配置文件

```js
module.exports = {
  ……
  extends: ['eslint-config-cupshe'],
  extends: ['eslint-config-cupshe', 'plugin:prettier/recommended'], // 如果需要用prettier覆盖eslint的代码格式化规则，将prettier配置放置在最后
  ……
}
```