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
              title: "قرارداد پروشات فیلتر",
              icon: "poroshatfilter-icn",
              child: [
                {
                  href: "/official-contract",
                  title: "قرارداد رسمی"
                }
              ]
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
        },
        {
          href: "/users",
          title: "مدیریت کاربران",
          icon: "fa fa-user"
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