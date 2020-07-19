<template>
  <div class="home">
    <infoForm v-if="!status"></infoForm>
    <agreement v-if="status"></agreement>
  </div>
</template>

<script>
// @ is an alias to /src
import form from "@/components/form";
import agreement from "@/components/preview";

export default {
  data() {
    return {
      status: null,
      info: null,
    };
  },
  components: {
    infoForm: form,
    agreement,
  },
};
</script>
