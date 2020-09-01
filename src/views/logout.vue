<script>
export default {
  created() {
    if (localStorage.logedIn == "true") {
      if (confirm("آیا میخواهید خارج شوید؟")) {
        localStorage.removeItem("logedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("userRole");
        location.reload();
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>