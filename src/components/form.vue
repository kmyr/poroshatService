<template>
  <div>
    <form class="contractForm">
      <div class="col-md-12">
        <div class="form-group" id="infoForm">
          <label>نام و نام خانوادگی</label>
          <input
            name="fullname"
            v-model="info.name"
            type="text"
            class="form-control"
          />

          <label>نام پدر</label>
          <input
            name="fatherName"
            v-model="info.fatherName"
            type="text"
            class="form-control"
          />

          <label>تاریخ تولد</label>
          <input
            name="birthdayDate"
            v-model="info.birthdayDate"
            type="text"
            class="form-control"
          />

          <label>سمت</label>
          <input
            name="role"
            v-model="info.role"
            type="text"
            class="form-control"
          />

          <label>محل خدمت</label>
          <select
            name="employmentPlace"
            class="form-control"
            v-model="info.employmentPlace"
          >
            <option>تولید</option>
            <option>دفتر مرکزی</option>
            <option>فنی مهندسی</option>
          </select>

          <label>کد ملی</label>
          <input
            name="idCard"
            v-model="info.idCard"
            type="number"
            class="form-control"
          />

          <label>شماره شناسنامه</label>
          <input
            name="idNumber"
            v-model="info.idNumber"
            type="number"
            class="form-control"
          />

          <label>تحصیلات</label>
          <select
            name="education"
            class="form-control"
            v-model="info.education"
          >
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
                placeholder="Month"
                v-model="info.startDate.month"
              />
            </div>
            <div class="col">
              <input
                name="startDay"
                type="number"
                class="form-control"
                placeholder="Day"
                v-model="info.startDate.day"
              />
            </div>
          </div>
          <label>مدت قرارداد</label>
          <input
            name="contractPeriod"
            v-model="info.periodDate"
            type="number"
            class="form-control"
          />

          <label>حقوق</label>
          <select name="salary" class="form-control" v-model="info.salary">
            <option>25،189،697</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <button
          id="submitBtn"
          @click="inputValidation"
          type="button"
          class="btn btn-primary"
        >
          ثبت
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      salaryList: [
        {
          baseSalary: "18،354،270",
          years: "0",
          worker: "4،000،000",
          housing: "1،000،000",
          children: "1،835،427",
          sumOfSalary: "25،189،697",
          salaryLetter:
            "بیست و سه میلیون و سیصد و پنجاه و چهار هزار و دویست و هفتاد ریال",
        },
        {
          baseSalary: "a2",
          years: "b2",
          worker: "2",
          housing: "2",
          children: "2",
          sumOfSalary: "2",
          salaryLetter:
            "بیست و سه میلیون و سیصد و پنجاه و چهار هزار و دویست و هفتاد ریال",
        },
        {
          baseSalary: "a3",
          years: "b3",
          worker: "3",
          housing: "3",
          children: "3",
          sumOfSalary: "3",
          salaryLetter:
            "بیست و سه میلیون و سیصد و پنجاه و چهار هزار و دویست و هفتاد ریال",
        },
      ],
      info: {
        name: "",
        fatherName: "",
        birthdayDate: "",
        role: "",
        employmentPlace: "",
        idCard: "",
        idNumber: "",
        education: "",
        address: "",
        startDate: {
          month: "",
          day: "",
        },
        periodDate: 1,
        salary: "",
      },
      status: false,
    };
  },
  mounted() {},
  created() {
    this.$parent.$data.status = this.status;
  },

  methods: {
    submitForm() {
      this.info.periodDate--;
      for (let i = 0; i < this.salaryList.length; i++) {
        const selectedSalary = this.salaryList[i];
        if (selectedSalary.sumOfSalary == this.info.salary) {
          this.info.salary = selectedSalary;
        }
      }
      this.status = true;
      this.$parent.$data.status = this.status;
      this.$parent.$data.info = this.info;
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
    },
  },
};
</script>
