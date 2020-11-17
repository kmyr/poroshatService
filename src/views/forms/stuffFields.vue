<template>
  <div>
    <form id="workerActionsForm">
      <label>نام</label>
      <input
        name="required"
        v-model="prepareInfo.stuffName"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>دسته بندی</label>
       <select name="required" class="form-control" v-model="prepareInfo.category">
        <option>کابل</option>
        <option>قطعات جانبی</option>
        <option>لوازم الترونیکی</option>
      </select>

      <label>تعداد</label>
      <input
        name="required"
        v-model="prepareInfo.amount"
        type="number"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>وضعیت</label>
      <select name="required" class="form-control" v-model="prepareInfo.status">
        <option>سالم</option>
        <option>خراب</option>
        <option>نیاز به تعمیر</option>
      </select>

       <label>توضیحات</label>
      <textarea class="form-control" style="text-align:right" v-model="prepareInfo.notes"></textarea>

      <!-- <label>کاربر</label>
      <select name="required" class="form-control" v-model="prepareInfo.stuffOwner">
        <option>سالم</option>
        <option>خراب</option>
        <option>نیاز به تعمیر</option>
      </select> -->
<p style="text-align:right">{{prepareInfo.createdDate}} :تاریخ ثبت</p>
<p style="text-align:right" v-if="prepareInfo.lastUpdate !== undefined">{{prepareInfo.lastUpdate}} :تاریخ بروزرسانی</p>
    </form>
  </div>
</template>
<script>
// import $ from "jquery";
import { formFields } from "../../datastore/globalData";
import postData from "../../actions/postData";
import getData from "../../actions/getData";
import updateData from "../../actions/updateData";
import dataValidate from "../../mixins/dataValidations";
export default {
  data() {
    return {
      prepareInfo: {},
      isEditing: false
    };
  },
  props: {
    editingStuff: Object
  },

  mixins: [postData, updateData, getData, dataValidate],

  created() {},

  mounted() {
    formFields.$on("newStuffEmit", () => {
      this.inputValidation("newStuff");
    });

    formFields.$on("updateStuffEmit", () => {
      this.inputValidation("updateStuff");
    });
  },

  methods: {
    inputValidation(command) {
      this.detectEmptyData();
      if (this.detectEmptyData() == true) {
        if (command == "newStuff") {
          this.postData("stuff", this.prepareInfo, true);
        } else if (command == "updateStuff") {
          this.updateData("stuff", {...this.prepareInfo,lastUpdate: Date.now()});
        }
      }
    }
  },

  watch: {
    editingStuff: {
      handler(stuff) {
        if (stuff == null || stuff == undefined) {
          this.prepareInfo = {};
          this.isEditing = false;
        } else {
          this.prepareInfo = stuff;
          this.isEditing = true;
        }
      },
      immediate: true
    }
  }
};
</script>
