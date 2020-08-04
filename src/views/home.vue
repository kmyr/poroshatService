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
          title: "قرارداد ها",
          icon: "fa fa-file",
          child: [
            {
              href: "/contract/official-contract",
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
              href: "/users/poroshat-filter",
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