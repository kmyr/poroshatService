<template>
  <div class="home">
    <infoForm v-if="!status"></infoForm>
    <contract v-if="status"></contract>
  </div>
</template>

<script>
// @ is an alias to /src
import form from "@/components/form";
import contract from "@/components/preview";

export default {
  data() {
    return {
      status: null,
      info: null
    };
  },
  components: {
    infoForm: form,
    contract
  }
};
</script>
