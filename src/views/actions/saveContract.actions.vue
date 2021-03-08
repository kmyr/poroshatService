<script>
export default {
  methods: {
    saveContract() {
      let savingData = {};
      const savedContracts = JSON.parse(localStorage.savedContracts);
      console.log(savedContracts);
      if (this.$route.name === "preview-temp-contract") {
        savingData = {
          info: localStorage.preparingTempContractUserInfo,
          type: "temp",
        };
      } else {
        savingData = {
          info: localStorage.preparingContractUserInfo,
          type: "official",
        };
      }
      savedContracts.push(
        JSON.stringify(savingData).replace(/$(\r|\n)/gm, "")

        //   .replace(/[\\]/g, "")
        //   .replace(/\s+/g, "")
      );

      localStorage.setItem("savedContracts", JSON.stringify(savedContracts));
    },
  },
};
</script>
