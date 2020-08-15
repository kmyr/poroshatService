import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home";
//poroshatfilter
import form from "../views/poroshat-filter/contract/official-contract/form";
import preview from "../views/poroshat-filter/contract/official-contract/preview";
import workers from "../views/poroshat-filter/workers/poroshat-workers";
import users from "../views/users/manage-users";
import login from "../views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/contract/official-contract",
    component: form,
  },
  {
    path: "/contract/official-contract/preview",
    component: preview,
  },
  {
    path: "/workers/poroshat-filter",
    component: workers,
  },
  {
    path: "/users",
    component: users,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
