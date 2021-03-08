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
    };
  },
  created() {
    if (!localStorage.savedContracts) {
      const savedContracts = [];
      localStorage.setItem("savedContracts", JSON.stringify(savedContracts));
    }
  },
};
</script>
<style></style>
