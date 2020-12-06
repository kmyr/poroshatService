<template>
  <div class="contractInfoForm">
    <form class="contractForm">
      <div class="col-md-12">
        <div class="form-group" id="poroshatUserInfoForm">
          <fields></fields>
          <br />
          <br />
        </div>
        <div class="buttonSection">
          <button
            id
            @click="goBack('/')"
            type="button"
            class="btn btn-outline-danger backBtn"
          >
            بازگشت
          </button>
          <br />
          <button
            id
            @click="submitContractForm()"
            type="button"
            class="btn btn-primary submitBtn"
          >
            ثبت
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import fields from "../forms/contractFields";
import { formFields } from "../../datastore/globalData";
export default {
  data() {
    return {};
  },

  components: { fields },

  methods: {
    goBack(target) {
      this.$router.push(target);
    },

    submitContractForm() {
      formFields.$emit("submitContractForm");
    },
  },

  watch: {},
};
</script>

<style scoped>
@import url("../../assets/style/official-contract/form.css");
</style>
