<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { userActions } from "./datastore/globalData";

export default {
  data() {
    return {
      poroshatOfficialContractInfo: null,
      userStatus: {
        logedIn: "false",
        username: ""
      }
    };
  },
  beforeCreate() {
    if (localStorage.logedIn == undefined) {
      localStorage.logedIn = "false";
    }
  },
  created() {
    this.checkLogedIn();
  },
  mounted() {
    userActions.$on("userLogedIn", user => {
      localStorage.logedIn = "true";
      localStorage.username = user.name;
      localStorage.userRole = user.accessLevel;
      location.reload();
    });
  },
  methods: {
    checkLogedIn() {
      this.userStatus.logedIn = localStorage.logedIn;

      if (this.$router.currentRoute.path !== "/login") {
        if (localStorage.logedIn == "false") {
          this.$router.push("/login");
        }
      }
    }
  }
};
</script>
<style></style>
