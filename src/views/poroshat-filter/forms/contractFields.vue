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

      <label>جنسیت</label>
      <select name="gender" class="form-control" v-model="prepareWorker.gender">
        <option v-for="(gender,i) in dropdownData.genderList" :key="i">{{gender}}</option>
      </select>

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

      <label>واحد مربوطه</label>
      <select name="department" class="form-control" v-model="prepareWorker.department">
        <option v-for="(department,i) in dropdownData.departmentList" :key="i">{{department}}</option>
      </select>

      <label>تحصیلات</label>
      <select name="education" class="form-control" v-model="prepareWorker.education">
        <option v-for="(education,i) in dropdownData.educationList" :key="i">{{education}}</option>
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
import { formFields } from "../../../datastore/globalData";
import { education, gender, department } from "../../../datastore/globalData";
import postData from "../../../actions/postData";
import updateData from "../../../actions/updateData";

export default {
  data() {
    return {
      prepareWorker: {},
      targetName: null,
      dropdownData: null
    };
  },
  props: {
    editingWorkerInfo: Object,
    targetUpdateName: String
  },

  mixins: [postData, updateData],
  created() {
    this.dropdownData = {
      educationList: education,
      genderList: gender,
      departmentList: department
    };
  },
  mounted() {
    formFields.$on("newWorkerEmit", () => {
      this.inputValidation("newWorker");
    });
    formFields.$on("updateWorkerEmit", () => {
      this.inputValidation("updateWorker");
    });
  },
  methods: {
    inputValidation(command) {
      if (
        $("input[name='fullname']").val() == "" ||
        $("input[name='fatherName']").val() == "" ||
        $("input[name='gender']").val() == "" ||
        $("input[name='birthdayDate']").val() == "" ||
        $("input[name='role']").val() == "" ||
        $("select[name='employmentPlace']").val() == "" ||
        $("input[name='idCard']").val() == "" ||
        $("input[name='idNumber']").val() == "" ||
        $("select[name='education']").val() == "" ||
        $("select[name='department']").val() == "" ||
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
        } else if (command == "updateWorker") {
          this.updateData("savedWorkers", this.prepareWorker, this.targetName);
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
    },
    targetUpdateName: {
      handler(name) {
        this.targetName = name;
      },
      immediate: true
    }
  }
};
</script>