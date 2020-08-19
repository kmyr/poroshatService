<template>
  <div>
    <form id="workerActionsForm">
      <label>نام</label>
      <input
        name="required"
        v-model="prepareWorker.firstName"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />
      <label>نام خانوادگی</label>
      <input
        name="required"
        v-model="prepareWorker.lastName"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>نام پدر</label>
      <input
        name="required"
        v-model="prepareWorker.fatherName"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>جنسیت</label>
      <select name="required" class="form-control" v-model="prepareWorker.gender">
        <option v-for="(gender,i) in dropdownData.genderList" :key="i">{{gender}}</option>
      </select>

      <label>تاریخ تولد</label>
      <input
        name="required"
        v-model="prepareWorker.birthdayDate"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>محل تولد</label>
      <input
        name="required"
        v-model="prepareWorker.birthPlace"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>کد ملی</label>
      <input
        name="required"
        v-model="prepareWorker.idCard"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
        maxlength="10"
      />

      <label>محل صدور</label>
      <input
        name="required"
        v-model="prepareWorker.issuePlace"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>تابعیت</label>
      <input
        name="required"
        v-model="prepareWorker.citizenship"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>دین</label>
      <input
        name="required"
        v-model="prepareWorker.religion"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>تحصیلات</label>
      <select name="required" class="form-control" v-model="prepareWorker.education">
        <option v-for="(education,i) in dropdownData.educationList" :key="i">{{education}}</option>
      </select>

      <label>سمت</label>
      <input
        name="required"
        v-model="prepareWorker.role"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>واحد مربوطه</label>
      <select name="required" class="form-control" v-model="prepareWorker.department">
        <option v-for="(department,i) in dropdownData.departmentList" :key="i">{{department}}</option>
      </select>

      <label>محل اشتغال</label>
      <select name="required" class="form-control" v-model="prepareWorker.employmentPlace">
        <option>تولید</option>
        <option>دفتر مرکزی</option>
        <option>دفتر فنی مهندسی</option>
        <option>انبار</option>
      </select>

      <label>تلفن ثابت</label>
      <input v-model="prepareWorker.tel" type="text" class="form-control" maxlength="8" />

      <label>تلفن همراه</label>
      <input
        name="required"
        v-model="prepareWorker.phoneNumber"
        type="text"
        class="form-control"
        maxlength="11"
      />

      <label>آدرس محل سکونت</label>
      <input
        name="required"
        v-model="prepareWorker.address"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />
    </form>
  </div>
</template>
<script>
// import $ from "jquery";
import { formFields } from "../../../datastore/globalData";
import { education, gender, department } from "../../../datastore/globalData";
import postData from "../../../actions/postData";
import updateData from "../../../actions/updateData";
import dataValidate from "../../../mixins/dataValidations";
export default {
  data() {
    return {
      prepareWorker: {},
      dropdownData: null
    };
  },
  props: {
    editingWorkerInfo: Object,
    targetUpdateName: String
  },

  mixins: [postData, updateData, dataValidate],
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

  methods: {},
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