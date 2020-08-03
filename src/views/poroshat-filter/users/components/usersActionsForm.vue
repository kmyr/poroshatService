<template>
  <div>
    <form class="userActionsForm">
      <label>نام و نام خانوادگی</label>
      <input
        name="address"
        v-model="prepareUser.name"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>نام پدر</label>
      <input
        name="fatherName"
        v-model="prepareUser.fatherName"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>تاریخ تولد</label>
      <input
        name="birthdayDate"
        v-model="prepareUser.birthdayDate"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>کد ملی</label>
      <input
        name="idCard"
        v-model="prepareUser.idCard"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>سمت</label>
      <input
        name="role"
        v-model="prepareUser.role"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>محل اشتغال</label>
      <select name="employmentPlace" class="form-control" v-model="prepareUser.employmentPlace">
        <option>تولید</option>
        <option>دفتر مرکزی</option>
        <option>فنی مهندسی</option>
        <option>انبار</option>
      </select>

      <label>تحصیلات</label>
      <select name="education" class="form-control" v-model="prepareUser.education">
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
        v-model="prepareUser.address"
        type="text"
        class="form-control"
        style="margin-bottom:15px"
      />

      <label>حقوق</label>
      <select name="salary" class="form-control" v-model="prepareUser.salary">
        <option v-for="(salary, i) in salaryList" :key="i">{{salary.sumOfSalary}}</option>
      </select>
    </form>
  </div>
</template>
<script>
import postData from "../../../../actions/postData";
import getData from "../../../../actions/getData";
import { userActions } from "../../../../datastore/poroshat-filterData";
import { salaryList } from "../../../../datastore/poroshat-filterData";
import $ from "jquery";
export default {
  data() {
    return {
      prepareUser: {
        name: "",
        fatherName: "",
        birthdayDate: "",
        role: "",
        employmentPlace: "",
        idCard: "",
        education: "",
        address: "",
        salary: ""
      },
      salaryList: null,
      usersList: []
    };
  },
  props: {
    pendingUser: Object
  },
  mixins: [postData, getData],
  mounted() {
    //Validate Input For Add New User
    userActions.$on("inputValidate", () => {
      this.inputValidation();
    });
  },
  created() {
    this.salaryList = salaryList;
    this.getData("savedUsers", this.usersList);
    userActions.$on("fillInputOut", this.fillInputOut());
  },
  methods: {
    fillInputOut() {
      this.prepareUser = this.pendingUser;
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
        $("input[name='salary']").val() == ""
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
        this.addUser();
      }
    },
    addUser() {
      userActions.$emit("addUser", this.prepareUser);
    }
  }
};
</script>
<style scoped>
@import url("../../../../assets/style/poroshat-filter/users/form.css");
</style>