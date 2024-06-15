import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../page/home/index.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/message",
    component: () => import("../page/message/index.vue"),
    meta: { title: "消息" },
  },
  {
    path: "/shopping-center",
    component: () => import("../page/shopping-center/index.vue"),
    meta: { title: "租币商城" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
