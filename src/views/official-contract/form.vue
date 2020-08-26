<template>
  <div class="contractInfoForm">
    <form class="contractForm">
      <div class="col-md-12">
        <div class="form-group" id="poroshatUserInfoForm">
          <label>کاربر های ذخیره شده</label>
          <select name="savedUsers" class="form-control" v-model="savedUsers.selectedUser">
            <option v-for="(user, i) in savedUsers.usersList" :key="i">{{user.name}}</option>
          </select>
          <fields></fields>

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
            >{{salary.sumOfSalary}}-{{salary.description}}</option>
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
            >{{salary.sumOfSalary}}-{{salary.description}}</option>
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
            >پایه سنوات قدیمی</label>
          </div>
          <br />
          <br />
          <div class="form-check" v-if="!savedUsers.useSavedUsers">
            <input
              type="checkbox"
              class="form-check-input checkbox"
              v-model="savedUsers.saveThisUser"
              id="saveUserCheckbox"
            />
            <label id="saveUser-label" class="checkbox-label" for="saveUserCheckbox">ذخیره مشخصات</label>
          </div>
        </div>
        <div class="buttonSection">
          <button
            id
            @click="goBack('/')"
            type="button"
            class="btn btn-outline-danger backBtn"
          >بازگشت</button>
          <br />
          <button
            id
            @click="submitContractForm()"
            type="button"
            class="btn btn-primary submitBtn"
          >ثبت</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import $ from "jquery";
import postData from "../../actions/postData";
import getData from "../../actions/getData";
import { salaryList } from "../../datastore/globalData";
import { formFields } from "../../datastore/globalData";
import fields from "../forms/contractFields";
export default {
  data() {
    return {
      salaryOptions: {
        salaryListOldVersion: null,
        salaryList: null,
        useOldSalary: false,
        selectedSalary: null
      },
      userInfo: {},
      savedUsers: {
        saveThisUser: false,
        usersList: [],
        currentUser: "",
        useSavedUsers: false,
        selectedUser: ""
      }
    };
  },
  components: { fields },

  mixins: [postData, getData],

  created() {
    this.getData("savedUsers", this.savedUsers.usersList);
    this.salaryOptions = {
      salaryList: salaryList.newSalaryList,
      salaryListOldVersion: salaryList.salaryListOldVersion
    };
  },

  mounted() {
    if (this.userInfo.startDate == undefined) {
      this.userInfo = {
        startDate: {
          month: "",
          day: ""
        }
      };
    }
  },

  methods: {
    goBack(target) {
      this.$router.push(target);
    },
    submitContractForm() {
      formFields.$emit("submitContractForm");
      this.findOutSelectedSalary();

      this.userInfo.periodDate--;

      this.$parent.$data.poroshatOfficialContractInfo = this.userInfo;
      this.$router.push("/official-contract/preview");
      $("html,body").animate({ scrollTop: 0 }, "slow");
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
    }
  },

  watch: {
    "userInfo.startDate.month": function() {
      if (this.userInfo.startDate.month > 12) {
        this.userInfo.startDate.month = 12;
      } else if (this.userInfo.startDate.month < 1) {
        this.userInfo.startDate.month = "";
      }
    },
    "userInfo.startDate.day": function() {
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
    "userInfo.periodDate": function() {
      const remainingMonth = 13 - parseInt(this.userInfo.startDate.month);
      if (this.userInfo.periodDate > remainingMonth) {
        this.userInfo.periodDate = remainingMonth;
      }
    },
    "savedUsers.selectedUser": function() {
      if (this.savedUsers.selectedUser !== "") {
        this.savedUsers.saveThisUser = false;
        this.savedUsers.useSavedUsers = true;

        for (let i = 0; i < this.savedUsers.usersList.length; i++) {
          const selectedUser = this.savedUsers.usersList[i];
          if (selectedUser.name == this.savedUsers.selectedUser) {
            this.savedUsers.currentUser = selectedUser;
            break;
          }
        }
        //change input values

        this.userInfo = this.savedUsers.currentUser;
      } else {
        this.savedUsers.useSavedUsers = false;
        //change input values to empty
        this.userInfo = {};
      }
    }
  }
};
</script>
<style scoped>
@import url("../../assets/style/official-contract/form.css");
</style>