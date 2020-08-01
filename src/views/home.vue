<template>
  <div>
    <sidebar-menu class="sidebar-menu" :menu="menu" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Poroshat Service",
          hiddenOnCollapse: true
        },
        {
          href: "",
          title: "Contracts",
          icon: "fa fa-file",
          child: [
            {
              href: "/contract/official-contract",
              title: "Official Contract"
            }
          ]
        },
        {
          href: "",
          title: "Users",
          icon: "fa fa-users",
          child: [
            {
              href: "/users/poroshat-filter",
              title: "Poroshat Filter Users"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
@import url("../assets/style/font-awesome/css/all.css");
</style>