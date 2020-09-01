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
          title: localStorage.username,
          hiddenOnCollapse: true,
          icon: "fas fa-power-off",
          href: "/logout"
        },
        {
          title: "قرارداد پروشات فیلتر",
          icon: "fa fa-file",
          child: [
            {
              href: "/official-contract",
              title: "قرارداد رسمی"
            }
          ]
        },
        {
          href: "",
          title: "همکاران",
          icon: "fa fa-users",
          child: [
            {
              href: "/workers",
              title: "همکاران پروشات فیلتر"
            }
          ]
        }
      ]
    };
  },

  created() {
    this.menuAccess();
  },

  methods: {
    menuAccess() {
      if (localStorage.userRole == "admin") {
        this.menu.push({
          title: "کاربران",
          icon: "fa fa-user",
          href: "/users"
        });
      }
    }
  }
};
</script> 
<style>
@import url("../assets/style/font-awesome/css/all.css");
.vsm--icon.fas.fa-power-off {
  color: red;
}
</style>