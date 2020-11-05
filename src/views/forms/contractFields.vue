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
      <span v-if="showSpecialInfo">
        <label>جنسیت</label>
        <select
          name="required"
          class="form-control"
          v-model="prepareWorker.gender"
        >
          <option v-for="(gender, i) in dropdownData.genderList" :key="i">{{
            gender
          }}</option>
        </select>
      </span>

      <label>تاریخ تولد</label>
      <input
        name="required"
        v-model="prepareWorker.birthdayDate"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />
      <span v-if="showSpecialInfo">
        <label>محل تولد</label>
        <input
          name="required"
          v-model="prepareWorker.birthPlace"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />
      </span>

      <label>کد ملی</label>
      <input
        name="required"
        v-model="prepareWorker.idCard"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
        maxlength="10"
      />
      <span v-if="showSpecialInfo">
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
      </span>

      <label>تحصیلات</label>
      <select
        name="required"
        class="form-control"
        v-model="prepareWorker.education"
      >
        <option v-for="(education, i) in dropdownData.educationList" :key="i">{{
          education
        }}</option>
      </select>

      <label>سمت</label>
      <input
        name="required"
        v-model="prepareWorker.role"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />
      <span v-if="showSpecialInfo">
        <label>واحد مربوطه</label>
        <br />
        <br />
        <template v-for="(department, i) in dropdownData.departmentList">
          <div class="form-check checkbox-section" :key="i">
            <input
              type="checkbox"
              name="departmentCheck"
              :id="'departmentIndex' + i"
              :value="department"
              v-model="prepareWorker.department[i].status"
              class="form-check-input checkbox"
            />
            <label :for="'departmentIndex' + i" class="checkbox-label">{{
              department.name
            }}</label>
            <br />
            <br />
          </div>
        </template>
      </span>

      <label>محل اشتغال</label>
      <select
        name="required"
        class="form-control"
        v-model="prepareWorker.employmentPlace"
      >
        <option>تولید</option>
        <option>دفتر مرکزی</option>
        <option>دفتر فنی مهندسی</option>
        <option>انبار</option>
      </select>

      <span v-if="showSpecialInfo">
        <label>تلفن ثابت</label>
        <input
          v-model="prepareWorker.tel"
          type="text"
          class="form-control"
          maxlength="8"
        />

        <label>تلفن همراه</label>
        <input
          name="required"
          v-model="prepareWorker.phoneNumber"
          type="text"
          class="form-control"
          maxlength="11"
        />
      </span>

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
import { formFields } from "../../datastore/globalData";
import { education, gender, department } from "../../datastore/globalData";
import postData from "../../actions/postData";
import getData from "../../actions/getData";
import updateData from "../../actions/updateData";
import dataValidate from "../../mixins/dataValidations";
export default {
  data() {
    return {
      prepareWorker: {},
      dropdownData: null,
      isEditing: false,
      showSpecialInfo: true
    };
  },
  props: {
    editingWorkerInfo: Object,
    specialInfo: Boolean,
    selectedWorker: Object
  },

  mixins: [postData, updateData, getData, dataValidate],
  created() {
    this.dropdownData = {
      educationList: education,
      genderList: gender,
      departmentList: department
    };
    this.setDepartmentDefaults();
  },

  mounted() {
    formFields.$on("newWorkerEmit", () => {
      this.inputValidation("newWorker");
    });

    formFields.$on("updateWorkerEmit", () => {
      this.inputValidation("updateWorker");
    });

    formFields.$on("submitContractForm", () => {
      this.$parent.$data.userInfo = {
        ...this.$parent.$data.userInfo,
        ...this.prepareWorker
      };
    });
  },

  methods: {
    inputValidation(command) {
      this.detectEmptyData();
      if (this.detectEmptyData() == true) {
        if (command == "newWorker") {
          this.postData("savedWorkers", this.prepareWorker, true);
        } else if (command == "updateWorker") {
          this.updateData("savedWorkers", this.prepareWorker);
        }
      }
    },
    setDepartmentDefaults() {
      if (!this.isEditing) {
        let dataValue = [];
        for (let i = 0; i < this.dropdownData.departmentList.length; i++) {
          const departmentItem = this.dropdownData.departmentList[i];
          dataValue.push({
            name: departmentItem.name,
            title: departmentItem.title,
            status: false
          });
        }
        this.prepareWorker.department = dataValue;
      }
    }
  },

  watch: {
    editingWorkerInfo: {
      handler(worker) {
        if (worker == null || worker == undefined) {
          this.prepareWorker = {};
          this.isEditing = false;
        } else {
          this.prepareWorker = worker;
          this.isEditing = true;
        }
      },
      immediate: true
    },

    specialInfo: {
      handler(status) {
        if (status == null || status == undefined) {
          this.showSpecialInfo = true;
        } else {
          this.showSpecialInfo = status;
        }
      },
      immediate: true
    },

    selectedWorker: {
      handler(status) {
        if (status == null || status == undefined) {
          return;
        } else {
          this.prepareWorker = status;
        }
      },
      immediate: true
    }
  }
};
</script>
