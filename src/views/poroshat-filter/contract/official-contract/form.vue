<template>
  <div class="contractInfoForm">
    <form class="contractForm">
      <div class="col-md-12">
        <div class="form-group" id="infoForm">
          <label>کاربر های ذخیره شده</label>
          <select name="savedUsers" class="form-control" v-model="savedUsers.selectedUser">
            <option v-for="(user, i) in savedUsers.usersList" :key="i">{{user.name}}</option>
          </select>

          <label>نام و نام خانوادگی</label>
          <input name="fullname" v-model="info.name" type="text" class="form-control" />

          <label>نام پدر</label>
          <input name="fatherName" v-model="info.fatherName" type="text" class="form-control" />

          <label>تاریخ تولد</label>
          <input name="birthdayDate" v-model="info.birthdayDate" type="text" class="form-control" />

          <label>سمت</label>
          <input name="role" v-model="info.role" type="text" class="form-control" />

          <label>محل خدمت</label>
          <select name="employmentPlace" class="form-control" v-model="info.employmentPlace">
            <option>تولید</option>
            <option>دفتر مرکزی</option>
            <option>فنی مهندسی</option>
            <option>انبار</option>
          </select>

          <label>کد ملی</label>
          <input name="idCard" v-model="info.idCard" type="text" class="form-control" />

          <label>تحصیلات</label>
          <select name="education" class="form-control" v-model="info.education">
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
            v-model="info.address"
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
                v-model="info.startDate.month"
              />
            </div>
            <div class="col">
              <input
                name="startDay"
                type="number"
                class="form-control"
                placeholder="روز"
                v-model="info.startDate.day"
              />
            </div>
          </div>
          <label>(ماه) مدت قرارداد</label>
          <input name="contractPeriod" v-model="info.periodDate" type="number" class="form-control" />

          <label>حقوق</label>
          <select name="salary" class="form-control" v-model="info.salary">
            <option v-for="(salary, i) in salaryList" :key="i">{{salary.sumOfSalary}}</option>
          </select>

          <div class="form-check" v-if="!savedUsers.useSavedUsers">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="savedUsers.saveThisUser"
              id="saveUser"
            />
            <label class="saveUser-label" for="saveUser">ذخیره این کاربر</label>
          </div>
        </div>
        <div class="col">
          <button id="backBtn" @click="goBack()" type="button" class="btn btn-outline-danger">بازگشت</button>
          <button
            id="submitBtn"
            @click="inputValidation()"
            type="button"
            class="btn btn-primary"
          >ثبت</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import $ from "jquery";
import postData from "../../../../actions/postData";
import getData from "../../../../actions/getData";
export default {
  data() {
    return {
      salaryList: [
        {
          baseSalary: "19,104,270",
          years: "1،000،000",
          worker: "4،000،000",
          housing: "3،000،000",
          children: "1,910,427",
          sumOfSalary: "29,014,697",
          salaryLetter: "بیست و نه میلیون و چهارده هزار و ششصد و نود و هفت ریال"
        },
        {
          baseSalary: "19,104,270",
          years: "0",
          worker: "4,000,000",
          housing: "3,000,000",
          children: "1,910,427",
          sumOfSalary: "28,014,697",
          salaryLetter:
            "بیست و هشت میلیون و چهارده هزار و ششصد و نود و هفت ریال"
        },
        {
          baseSalary: "19,104,270",
          years: "1،000،000",
          worker: "4,000,000",
          housing: "3،000،000",
          children: "3,820,854",
          sumOfSalary: "30,925,124",
          salaryLetter:
            "سی میلیون و نهصد و بیست و پنج هزار و صد و بیست و چهار ریال"
        },
        {
          baseSalary: "19,104,270",
          years: "0",
          worker: "4,000,000",
          housing: "3،000،000",
          children: "3,820,854",
          sumOfSalary: "29,925,124",
          salaryLetter:
            "بیست و نه میلیون و  نهصد و  بیست و پنج هزار و صد و بیست و چهار ریال"
        },
        {
          baseSalary: "19,104,270",
          years: "1،000،000",
          worker: "4,000,000",
          housing: "3،000،000",
          children: "0",
          sumOfSalary: "27,104,270",
          salaryLetter:
            "بیست و هفت میلیون و صد و چهار هزار و دویست و هفتاد ریال"
        },
        {
          baseSalary: "19,104,270",
          years: "0",
          worker: "4,000,000",
          housing: "3،000،000",
          children: "0",
          sumOfSalary: "26,104,270",
          salaryLetter: "بیست و شش میلیون و صد و چهار هزار و دویست و هفتاد ریال"
        },
        {
          baseSalary: "21،703،260",
          years: "1,000,000",
          worker: "4,000,000",
          housing: "3،000،000",
          children: "1،910،427",
          sumOfSalary: "31،613،687",
          salaryLetter:
            "سی و یک میلیون و ششصد و سیزده هزار و ششصد و هشتاد و هفت ریال"
        }
      ],
      info: {
        name: "",
        fatherName: "",
        birthdayDate: "",
        role: "",
        employmentPlace: "",
        idCard: "",
        education: "",
        address: "",
        startDate: {
          month: "",
          day: ""
        },
        periodDate: 1,
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
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    submitForm() {
      if (this.savedUsers.saveThisUser) {
        this.postData("savedUsers", {
          name: this.info.name,
          fatherName: this.info.fatherName,
          birthdayDate: this.info.birthdayDate,
          role: this.info.role,
          employmentPlace: this.info.employmentPlace,
          idCard: this.info.idCard,
          education: this.info.education,
          address: this.info.address,
          salary: this.info.salary
        });
      }
      this.info.periodDate--;
      for (let i = 0; i < this.salaryList.length; i++) {
        const selectedSalary = this.salaryList[i];
        if (selectedSalary.sumOfSalary == this.info.salary) {
          this.info.salary = selectedSalary;
        }
      }
      this.$parent.$data.info = this.info;
      this.$router.push("/contract/official-contract/preview");
      $("html,body").animate({ scrollTop: 0 }, "slow");
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
    "info.startDate.month": function() {
      if (this.info.startDate.month > 12) {
        this.info.startDate.month = 12;
      } else if (this.info.startDate.month < 1) {
        this.info.startDate.month = "";
      }
    },
    "info.startDate.day": function() {
      if (this.info.startDate.month >= 7 && this.info.startDate.month <= 12) {
        if (this.info.startDate.day > 30) {
          this.info.startDate.day = 30;
        }
      } else {
        if (this.info.startDate.day > 31) {
          this.info.startDate.day = 31;
        } else if (this.info.startDate.day < 1) {
          this.info.startDate.day = "";
        }
      }
    },
    "info.periodDate": function() {
      const remainingMonth = 13 - parseInt(this.info.startDate.month);
      if (this.info.periodDate > remainingMonth) {
        this.info.periodDate = remainingMonth;
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
        this.info.name = this.savedUsers.currentUser.name;
        this.info.fatherName = this.savedUsers.currentUser.fatherName;
        this.info.birthdayDate = this.savedUsers.currentUser.birthdayDate;
        this.info.role = this.savedUsers.currentUser.role;
        this.info.employmentPlace = this.savedUsers.currentUser.employmentPlace;
        this.info.idCard = this.savedUsers.currentUser.idCard;
        this.info.education = this.savedUsers.currentUser.education;
        this.info.address = this.savedUsers.currentUser.address;
        this.info.salary = this.savedUsers.currentUser.salary;
      } else {
        this.savedUsers.useSavedUsers = false;
        //change input values to empty
        this.info.name = "";
        this.info.fatherName = "";
        this.info.birthdayDate = "";
        this.info.role = "";
        this.info.employmentPlace = "";
        this.info.idCard = "";
        this.info.education = "";
        this.info.address = "";
        this.info.salary = "";
      }
    }
  }
};
</script>
<style>
@import url("../../../../assets/style/poroshat-filter/contract/official-contract/form.css");
</style>