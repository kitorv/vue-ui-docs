import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/",
        name: "home-start",
        component: () => import("../docs/start.md")
      },
      {
        path: "/changelog",
        name: "changelog",
        component: () => import("../../CHANGELOG.md")
      },
      {
        path: "/start",
        name: "start",
        component: () => import("../docs/start.md")
      },
      {
        path: "/component/button",
        name: "component-button",
        component: () => import("../../src/button/index.md")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.NODE_ENV !== "production" ? "/" : "/vue-ui-docs",
  routes
});

export default router;
