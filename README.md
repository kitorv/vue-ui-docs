# VUE-UI-DOCS

## Roadamp

- 基础项目创建
- 目录结构调整
  - 1. 入口 site
  - 2. 路由调整 Home.vue import HelloWorld from "../components/HelloWorld";

├─site //示例网站目录
│ └─components //示例网站组件
│ └─router //路由配置
│ │ └─index.js //路由配置文件
│ └─views //示例页面
│ │ └─Home.vue //示例网站首页
│ └─App.vue //项目入口
│ └─main.js //启动文件

```javascript
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
```

```vue
<template>
  <h1>
    Home
  </h1>
</template>

<script>
export default {
  name: "Home"
};
</script>
```

```vue
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
```

```javascript
module.exports = {
  pages: {
    index: {
      entry: "site/main.js"
    }
  }
};
```

npm i markdown-it markdown-it-container highlight.js -D

代码解析组件 vue
