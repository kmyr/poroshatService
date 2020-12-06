<template>
  <div>
    <form id="workerActionsForm">
      <label>نام</label>
      <input
        name="required"
        v-model="userInfo.firstName"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />
      <label>نام خانوادگی</label>
      <input
        name="required"
        v-model="userInfo.lastName"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>نام پدر</label>
      <input
        name="required"
        v-model="userInfo.fatherName"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>تاریخ تولد</label>
      <input
        name="required"
        v-model="userInfo.birthDate"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>کد ملی</label>
      <input
        name="required"
        v-model="userInfo.idCard"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
        maxlength="10"
      />

      <label>تحصیلات</label>
      <select name="required" class="form-control" v-model="userInfo.diploma">
        <option v-for="(diploma, i) in dropdownData.diplomaList" :key="i">
          {{ diploma }}
        </option>
      </select>

      <label>سمت</label>
      <input
        name="required"
        v-model="userInfo.role"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>محل اشتغال</label>
      <select
        name="required"
        class="form-control"
        v-model="userInfo.employmentPlace"
      >
        <option>تولید</option>
        <option>دفتر مرکزی</option>
        <option>دفتر فنی مهندسی</option>
        <option>انبار</option>
      </select>

      <label>آدرس محل سکونت</label>
      <input
        name="required"
        v-model="userInfo.address"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>تاریخ شروع قرارداد</label>
      <div class="form-row">
        <div class="col">
          <input
            name="startMonth"
            type="number"
            class="form-control"
            placeholder="ماه"
            v-model="userInfo.startDate.month"
          />
        </div>
        <div class="col">
          <input
            name="startDay"
            type="number"
            class="form-control"
            placeholder="روز"
            v-model="userInfo.startDate.day"
          />
        </div>
      </div>
      <label>(ماه) مدت قرارداد</label>
      <input
        name="contractPeriod"
        v-model="userInfo.periodDate"
        type="number"
        class="form-control"
      />

      <label>حقوق</label>
      <select
        name="salary"
        class="form-control"
        v-model="userInfo.salary"
        v-if="!salaryOptions.useOldSalary"
      >
        <option
          v-for="(salary, i) in salaryOptions.salaryList"
          :key="i"
          :value="salary.sumOfSalary"
        >
          {{ salary.sumOfSalary }}-{{ salary.description }}
        </option>
      </select>
      <select
        name="salary"
        class="form-control"
        v-model="userInfo.salary"
        v-if="salaryOptions.useOldSalary"
      >
        <option
          v-for="(salary, i) in salaryOptions.salaryListOldVersion"
          :key="i"
          :value="salary.sumOfSalary"
        >
          {{ salary.sumOfSalary }}-{{ salary.description }}
        </option>
      </select>
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input checkbox"
          v-model="salaryOptions.useOldSalary"
          id="perviousSalaryCheckbox"
        />
        <label
          id="perviousSalary-label"
          class="checkbox-label"
          for="perviousSalaryCheckbox"
          >پایه سنوات قدیمی</label
        >
      </div>
    </form>
  </div>
</template>
<script>
import $ from "jquery";
import { formFields } from "../../datastore/globalData";
import { diploma, gender, salaryList } from "../../datastore/globalData";
import postData from "../../actions/postData";
import getData from "../../actions/getData";
import updateData from "../../actions/updateData";
import dataValidate from "../../mixins/dataValidations";
export default {
  data() {
    return {
      salaryOptions: {
        salaryListOldVersion: null,
        salaryList: null,
        useOldSalary: false,
        selectedSalary: null,
      },

      userInfo: {},
      dropdownData: null,
    };
  },

  mixins: [postData, updateData, getData, dataValidate],

  created() {
    this.userInfo = {
      startDate: {
        month: "",
        day: "",
      },
    };

    this.dropdownData = {
      diplomaList: diploma,
      genderList: gender,
    };

    this.salaryOptions = {
      salaryList: salaryList.newSalaryList,
      salaryListOldVersion: salaryList.salaryListOldVersion,
    };
  },

  mounted() {
    formFields.$on("submitContractForm", () => {
      this.inputValidation();
    });
  },

  methods: {
    inputValidation() {
      this.detectEmptyData();
      if (this.detectEmptyData() == true) {
        this.findOutSelectedSalary();
        this.userInfo.periodDate !== 1 ? this.userInfo.periodDate-- : null;
        localStorage.setItem(
          "preparingContractUserInfo",
          JSON.stringify(this.userInfo)
        );
        this.$router.push(`/official-contract/preview`);
        $("html,body").animate({ scrollTop: 0 }, "slow");
      }
    },

    findOutSelectedSalary() {
      let selectedSalaryList = this.salaryOptions.salaryList;

      if (this.salaryOptions.useOldSalary) {
        selectedSalaryList = this.salaryOptions.salaryListOldVersion;
      }
      for (let i = 0; i < selectedSalaryList.length; i++) {
        const selectedSalary = selectedSalaryList[i];
        if (selectedSalary.sumOfSalary == this.userInfo.salary) {
          this.userInfo.salary = selectedSalary;
        }
      }
    },
  },

  watch: {
    "userInfo.startDate.month": function () {
      if (this.userInfo.startDate.month > 12) {
        this.userInfo.startDate.month = 12;
      } else if (this.userInfo.startDate.month < 1) {
        this.userInfo.startDate.month = "";
      }
    },

    "userInfo.startDate.day": function () {
      if (
        this.userInfo.startDate.month >= 7 &&
        this.userInfo.startDate.month <= 12
      ) {
        if (this.userInfo.startDate.day > 30) {
          this.userInfo.startDate.day = 30;
        }
      } else {
        if (this.userInfo.startDate.day > 31) {
          this.userInfo.startDate.day = 31;
        } else if (this.userInfo.startDate.day < 1) {
          this.userInfo.startDate.day = "";
        }
      }
    },

    "userInfo.periodDate": function () {
      const remainingMonth = 13 - parseInt(this.userInfo.startDate.month);
      if (this.userInfo.periodDate > remainingMonth) {
        this.userInfo.periodDate = remainingMonth;
      }
    },
  },
};
</script>
