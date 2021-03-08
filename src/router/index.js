import Vue from "vue";
import VueRouter from "vue-router";

import form from "../views/official-contract/form";
import index from "../index.vue";
import formTemp from "../views/temp-contract/form";
import preview from "../views/official-contract/preview";
import previewTemp from "../views/temp-contract/preview";

Vue.use(VueRouter);

const routes = [
  {
    path: "/form",
    component: form,
  },
  { path: "/", component: index },
  {
    path: "/preview",
    name: "preview-contract",
    component: preview,
  },
  {
    path: "/form-temp",
    component: formTemp,
  },
  {
    path: "/preview-temp",
    name: "preview-temp-contract",
    component: previewTemp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
