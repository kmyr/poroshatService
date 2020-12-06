import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home";

import form from "../views/official-contract/form";
import preview from "../views/official-contract/preview";
import workers from "../views/workers/workers-list";
import workerDetails from "../views/workers/worker-details";
import users from "../views/users/manage-users";
import stuff from "../views/stuff/stuff-list.vue";
import computers from "../views/computers/computers-list.vue";
import computerDetails from "../views/computers/computer-details";
import login from "../views/login";
import logout from "../views/logout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: home
  },
  {
    path: "/login",
    component: login
  },
  {
    path: "/official-contract",
    component: form
  },
  {
    path: "/official-contract/preview",
    component: preview
  },
  {
    path: "/workers",
    component: workers
  },
  {
    path: "/workers/:id",
    component: workerDetails
  },
  {
    path: "/users",
    component: users
  },
  {
    path: "/stuff",
    component: stuff
  },
  {
    path: "/computers",
    component: computers
  },
  {
    path: "/computers/:id",
    component: computerDetails
  },
  {
    path: "/logout",
    component: logout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
