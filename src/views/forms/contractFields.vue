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
            name="required"
            type="number"
            class="form-control"
            placeholder="ماه"
            v-model="userInfo.startDate.month"
          />
        </div>
        <div class="col">
          <input
            name="required"
            type="number"
            class="form-control"
            placeholder="روز"
            v-model="userInfo.startDate.day"
          />
        </div>
      </div>
      <label>(ماه) مدت قرارداد</label>
      <input
        name="required"
        v-model="userInfo.periodDate"
        type="number"
        class="form-control"
      />
      <hr />
      <label>پایه حقوق</label>
      <input
        name="base-salary"
        :placeholder="thousandSeprator(salaryOptions.salaryDetails.baseSalary)"
        v-model="salaryOptions.customizeSalary.finalSalary.baseSalary"
        type="text"
        class="form-control"
      />
      <label>عائله مندی</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input
              type="checkbox"
              v-model="salaryOptions.customizeSalary.calculateChildren"
            />
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="salaryOptions.customizeSalary.finalSalary.children"
        />
      </div>
      <label>بن کارگری</label>
      <input
        name="base-salary"
        :placeholder="thousandSeprator(salaryOptions.salaryDetails.worker)"
        v-model="salaryOptions.customizeSalary.finalSalary.worker"
        type="text"
        class="form-control"
      />
      <label>حق مسکن</label>
      <input
        name="base-salary"
        :placeholder="thousandSeprator(salaryOptions.salaryDetails.housing)"
        v-model="salaryOptions.customizeSalary.finalSalary.housing"
        type="text"
        class="form-control"
      />
      <label>سنوات</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input
              type="checkbox"
              v-model="salaryOptions.customizeSalary.calculateYears"
            />
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          id="yearsBase"
          v-model="salaryOptions.customizeSalary.finalSalary.years"
          aria-label="calculate childrens"
        />
      </div>
    </form>
  </div>
</template>
<script>
import numeral from "numeral";
import Num2persian from "num2persian";
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
        customizeSalary: {
          finalSalary: {
            years: "",
            worker: "",
            housing: "",
            children: "",
            baseSalary: "",
          },
        },
        salaryDetails: null,
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
      salaryDetails: salaryList.salaryDetails,
      customizeSalary: this.salaryOptions.customizeSalary,
    };
  },

  mounted() {
    formFields.$on("submitContractForm", () => {
      this.inputValidation();
    });
  },

  methods: {
    thousandSeprator(number) {
      return numeral(parseInt(number)).format("0,0");
    },

    inputValidation() {
      this.detectEmptyData();
      if (this.detectEmptyData() == true) {
        this.calculateSalary();
        this.userInfo.periodDate !== 1 ? this.userInfo.periodDate-- : null;
        localStorage.setItem(
          "preparingContractUserInfo",
          JSON.stringify(this.userInfo)
        );
        this.$router.push(`/preview`);
        $("html,body").animate({ scrollTop: 0 }, "slow");
      }
    },

    calculateSalary() {
      const customizedSalary = this.salaryOptions.customizeSalary;
      const salaryDetails = this.salaryOptions.salaryDetails;
      let totalSalary = 0;

      if (
        customizedSalary.totalSalary !== undefined ||
        customizedSalary.salaryLetter !== undefined
      ) {
        delete customizedSalary.totalSalary;
        delete customizedSalary.salaryLetter;
      }

      if (
        customizedSalary.calculateChildren &&
        customizedSalary.finalSalary.children !== ""
      ) {
        customizedSalary.finalSalary.children =
          customizedSalary.finalSalary.children * salaryDetails.childrenBase;
        customizedSalary.calculateChildren = false;
      }

      customizedSalary.finalSalary.children == ""
        ? delete customizedSalary.finalSalary.children
        : "";

      customizedSalary.finalSalary.baseSalary == ""
        ? (customizedSalary.finalSalary.baseSalary = salaryDetails.baseSalary)
        : "";

      customizedSalary.finalSalary.worker == ""
        ? (customizedSalary.finalSalary.worker = salaryDetails.worker)
        : "";

      customizedSalary.finalSalary.housing == ""
        ? (customizedSalary.finalSalary.housing = salaryDetails.housing)
        : "";

      customizedSalary.finalSalary.years == "" &&
      !customizedSalary.calculateYears
        ? delete customizedSalary.finalSalary.years
        : "";

      for (const fields in customizedSalary.finalSalary) {
        totalSalary =
          parseInt(totalSalary) +
          parseInt(customizedSalary.finalSalary[fields]);
      }
      customizedSalary.salaryLetter = Num2persian(totalSalary) + " ریال";
      customizedSalary.totalSalary = totalSalary;

      this.userInfo.salary = {
        ...customizedSalary.finalSalary,
        salaryLetter: customizedSalary.salaryLetter,
        totalSalary: customizedSalary.totalSalary,
      };
    },
  },

  watch: {
    "salaryOptions.customizeSalary.calculateYears": function () {
      const customizedSalary = this.salaryOptions.customizeSalary;
      const salaryDetails = this.salaryOptions.salaryDetails;

      if (!customizedSalary.calculateYears) {
        delete customizedSalary.finalSalary.years;
      } else if (customizedSalary.calculateYears) {
        customizedSalary.finalSalary.years = salaryDetails.years;
      }
    },
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
