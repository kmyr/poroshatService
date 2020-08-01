import Vue from "vue";
import VueRouter from "vue-router";
import form from "../views/poroshat-filter/contract/official-contract/form";
import preview from "../views/poroshat-filter/contract/official-contract/preview";
import home from "../views/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // component: form,
    component: home,
  },
  {
    path: "/contract/official-contract",
    component: form,
  },
  {
    path: "/contract/official-contract/preview",
    component: preview,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
