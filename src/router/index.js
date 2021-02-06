import Vue from "vue";
import VueRouter from "vue-router";

import form from "../views/official-contract/form";
import preview from "../views/official-contract/preview";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: form,
  },
  {
    path: "/preview",
    component: preview,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
