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
              href: "/workers/poroshat-filter",
              title: "همکاران پروشات فیلتر"
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