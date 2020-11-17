import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
// const moment = require('moment-jalaali')

Vue.use(VueSidebarMenu);
if (localStorage.databaseADDRESS == undefined) {
  localStorage.databaseADDRESS == "http://192.168.165.187:3000"
}

axios.defaults.baseURL = localStorage.databaseADDRESS;

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
