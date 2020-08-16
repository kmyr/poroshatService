<template>
  <div>
    <form id="workerActionsForm">
      <label>نام و نام خانوادگی</label>
      <input
        name="address"
        v-model="prepareWorker.name"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>نام پدر</label>
      <input
        name="fatherName"
        v-model="prepareWorker.fatherName"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>تاریخ تولد</label>
      <input
        name="birthdayDate"
        v-model="prepareWorker.birthdayDate"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>کد ملی</label>
      <input
        name="idCard"
        v-model="prepareWorker.idCard"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>سمت</label>
      <input
        name="role"
        v-model="prepareWorker.role"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>محل اشتغال</label>
      <select name="employmentPlace" class="form-control" v-model="prepareWorker.employmentPlace">
        <option>تولید</option>
        <option>دفتر مرکزی</option>
        <option>دفتر فنی مهندسی</option>
        <option>انبار</option>
      </select>

      <label>تحصیلات</label>
      <select name="education" class="form-control" v-model="prepareWorker.education">
        <option>ابتدایی</option>
        <option>سیکل</option>
        <option>دیپلم</option>
        <option>فوق دیپلم</option>
        <option>لیسانس</option>
        <option>فوق لیسانس</option>
        <option>کارشناسی</option>
        <option>کارشناسی ارشد</option>
        <option>دکترا</option>
      </select>

      <label>آدرس محل سکونت</label>
      <input
        name="address"
        v-model="prepareWorker.address"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />
    </form>
  </div>
</template>
<script>
import $ from "jquery";
import { formFields } from "../../../main";
import postData from "../../../actions/postData";

export default {
  data() {
    return {
      prepareWorker: {}
    };
  },
  props: {
    editingWorkerInfo: Object
  },

  mixins: [postData],
  created() {},
  mounted() {
    formFields.$on("newWorkerEmit", () => {
      this.inputValidation("newWorker");
    });
    formFields.$on("updateWorkerEmit", () => {
      this.inputValidation("newWorker");
    });
  },
  methods: {
    inputValidation(command) {
      if (
        $("input[name='fullname']").val() == "" ||
        $("input[name='fatherName']").val() == "" ||
        $("input[name='birthdayDate']").val() == "" ||
        $("input[name='role']").val() == "" ||
        $("select[name='employmentPlace']").val() == "" ||
        $("input[name='idCard']").val() == "" ||
        $("input[name='idNumber']").val() == "" ||
        $("select[name='education']").val() == "" ||
        $("input[name='address']").val() == ""
      ) {
        $("input,select")
          .filter(function() {
            return this.value == "";
          })
          .addClass("is-invalid");
        $("input,select")
          .filter(function() {
            return this.value !== "";
          })
          .removeClass("is-invalid");
      } else {
        if (command == "newWorker") {
          this.postData("savedWorkers", this.prepareWorker, true);
        }
      }
    }
  },
  watch: {
    editingWorkerInfo: {
      handler(worker) {
        this.prepareWorker = worker;
      },
      immediate: true
    }
  }
};
</script>