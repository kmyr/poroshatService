<template>
  <div class="contractInfoForm">
    <form class="contractForm">
      <div class="col-md-12">
        <div class="form-group" id="poroshatUserInfoForm">
          <label>کاربر های ذخیره شده</label>
          <select name="savedUsers" class="form-control" v-model="savedUsers.selectedUser">
            <option v-for="(user, i) in savedUsers.usersList" :key="i">{{user.name}}</option>
          </select>

          <label>نام و نام خانوادگی</label>
          <input name="fullname" v-model="userInfo.name" type="text" class="form-control" />

          <label>نام پدر</label>
          <input name="fatherName" v-model="userInfo.fatherName" type="text" class="form-control" />

          <label>تاریخ تولد</label>
          <input
            name="birthdayDate"
            v-model="userInfo.birthdayDate"
            type="text"
            class="form-control"
          />

          <label>سمت</label>
          <input name="role" v-model="userInfo.role" type="text" class="form-control" />

          <label>محل اشتغال</label>
          <select name="employmentPlace" class="form-control" v-model="userInfo.employmentPlace">
            <option>تولید</option>
            <option>دفتر مرکزی</option>
            <option>فنی مهندسی</option>
            <option>انبار</option>
          </select>

          <label>کد ملی</label>
          <input name="idCard" v-model="userInfo.idCard" type="text" class="form-control" />

          <label>تحصیلات</label>
          <select name="education" class="form-control" v-model="userInfo.education">
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

          <label>آدرس</label>
          <input
            name="address"
            v-model="userInfo.address"
            type="text"
            class="form-control"
            style="margin-bottom:15px"
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
              class="form-check-input"
              v-model="salaryOptions.useOldSalary"
              id="saveUser"
            />
            <label id="saveUser-label" for="saveUser">پایه سنوات قدیمی</label>
          </div>
          <br />
          <br />
          <div class="form-check" v-if="!savedUsers.useSavedUsers">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="savedUsers.saveThisUser"
              id="saveUser"
            />
            <label id="saveUser-label" for="saveUser">ذخیره مشخصات</label>
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
          <button id @click="inputValidation()" type="button" class="btn btn-primary submitBtn">ثبت</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import $ from "jquery";
import postData from "../../../../actions/postData";
import getData from "../../../../actions/getData";
import { salaryList } from "../../../../datastore/poroshat-filterData";
export default {
  data() {
    return {
      salaryOptions: {
        salaryListOldVersion: null,
        salaryList: null,
        useOldSalary: false,
        selectedSalary: null
      },
      userInfo: {
        startDate: {
          month: "",
          day: ""
        },
        salary: ""
      },
      savedUsers: {
        saveThisUser: false,
        usersList: [{}],
        currentUser: "",
        useSavedUsers: false,
        selectedUser: ""
      }
    };
  },
  mixins: [postData, getData],
  created() {
    this.getData("savedUsers", this.savedUsers.usersList);
    this.salaryOptions.salaryList = salaryList.newSalaryList;
    this.salaryOptions.salaryListOldVersion = salaryList.salaryListOldVersion;
  },
  methods: {
    goBack(target) {
      this.$router.push(target);
    },
    submitForm() {
      this.findOutSelectedSalary();
      if (this.savedUsers.saveThisUser) {
        this.postData(
          "savedUsers",
          {
            name: this.userInfo.name,
            fatherName: this.userInfo.fatherName,
            birthdayDate: this.userInfo.birthdayDate,
            role: this.userInfo.role,
            employmentPlace: this.userInfo.employmentPlace,
            idCard: this.userInfo.idCard,
            education: this.userInfo.education,
            address: this.userInfo.address
          },
          false
        );
      }
      this.userInfo.periodDate--;

      this.$parent.$data.poroshatOfficialContractInfo = this.userInfo;
      this.$router.push("/contract/official-contract/preview");
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
    },
    inputValidation() {
      if (
        $("input[name='fullname']").val() == "" ||
        $("input[name='fatherName']").val() == "" ||
        $("input[name='birthdayDate']").val() == "" ||
        $("input[name='role']").val() == "" ||
        $("select[name='employmentPlace']").val() == "" ||
        $("input[name='idCard']").val() == "" ||
        $("input[name='idNumber']").val() == "" ||
        $("select[name='education']").val() == "" ||
        $("input[name='address']").val() == "" ||
        $("input[name='startMonth']").val() == "" ||
        $("input[name='startDay']").val() == "" ||
        $("input[name='contractPeriod']").val() == "" ||
        $("select[name='salary']").val() == ""
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
        this.submitForm();
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
        this.userInfo.name = this.savedUsers.currentUser.name;
        this.userInfo.fatherName = this.savedUsers.currentUser.fatherName;
        this.userInfo.birthdayDate = this.savedUsers.currentUser.birthdayDate;
        this.userInfo.role = this.savedUsers.currentUser.role;
        this.userInfo.employmentPlace = this.savedUsers.currentUser.employmentPlace;
        this.userInfo.idCard = this.savedUsers.currentUser.idCard;
        this.userInfo.education = this.savedUsers.currentUser.education;
        this.userInfo.address = this.savedUsers.currentUser.address;
      } else {
        this.savedUsers.useSavedUsers = false;
        //change input values to empty
        this.userInfo.name = "";
        this.userInfo.fatherName = "";
        this.userInfo.birthdayDate = "";
        this.userInfo.role = "";
        this.userInfo.employmentPlace = "";
        this.userInfo.idCard = "";
        this.userInfo.education = "";
        this.userInfo.address = "";
        this.userInfo.salary = "";
      }
    }
  }
};
</script>
<style scoped>
@import url("../../../../assets/style/poroshat-filter/contract/official-contract/form.css");
</style>