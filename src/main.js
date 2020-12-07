import Vue from "vue";
import axios from "axios";
import tableSorter from "tablesorter";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

Vue.use(tableSorter);
Vue.use(VueSidebarMenu);

axios.defaults.baseURL = "http://localhost:3000";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

module.exports = {
  apps: [
    {
      name: "WEB",
      script: "./node_modules/@vue/cli-service/bin/vue-cli-service.js",
      args: "serve",
    },
  ],
};
