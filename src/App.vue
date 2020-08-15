<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      poroshatOfficialContractInfo: null,
      userStatus: {
        logedIn: false,
        username: ""
      }
    };
  },
  created() {
    this.logedIn = localStorage.logedIn;
    if (this.$router.currentRoute.path !== "/login") {
      if (this.logedIn == "false") {
        this.$router.push("/login");
      }
    }
  }
};
</script>
<style>
</style>
