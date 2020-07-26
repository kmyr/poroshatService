<template>
  <div>
    <form>
      <div class="col-md-2">
        <div class="form-group" id="infoForm">
          <label>نام و نام خانوادگی</label>
          <input v-model="info.name" type="text" class="form-control" />

          <label>نام پدر</label>
          <input v-model="info.fatherName" type="text" class="form-control" />

          <label>تاریخ تولد</label>
          <input v-model="info.birthdayDate" type="text" class="form-control" />

          <label>سمت</label>
          <input v-model="info.role" type="text" class="form-control" />

          <label>محل خدمت</label>
          <select class="form-control" v-model="info.employmentPlace">
            <option>تولید</option>
            <option>دفتر مرکزی</option>
            <option>فنی مهندسی</option>
          </select>

          <label>کد ملی</label>
          <input v-model="info.idCard" type="number" class="form-control" />

          <label>شماره شناسنامه</label>
          <input v-model="info.idNumber" type="number" class="form-control" />

          <label>تحصیلات</label>
          <select class="form-control" v-model="info.education">
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
          <input v-model="info.address" type="text" class="form-control" />

          <label>تاریخ شروع قرارداد</label>
          <input v-model="info.startDate" type="text" class="form-control" />

          <label>تاریخ پایان قرارداد</label>
          <input v-model="info.endDate" type="text" class="form-control" />

          <label>حقوق</label>
          <select class="form-control" v-model="info.salary">
            <option>25،189،697</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <button type="button" @click="submitForm" class="btn btn-primary">ثبت</button>
      </div>
    </form>
  </div>
</template>
<script>
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
            "بیست و سه میلیون و سیصد و پنجاه و چهار هزار و دویست و هفتاد ریال"
        },
        {
          baseSalary: "a2",
          years: "b2",
          worker: "2",
          housing: "2",
          children: "2",
          sumOfSalary: "2"
        },
        {
          baseSalary: "a3",
          years: "b3",
          worker: "3",
          housing: "3",
          children: "3",
          sumOfSalary: "3"
        }
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
        startDate: "",
        endDate: "",
        salary: ""
      },
      status: false
    };
  },
  created() {
    this.$parent.$data.status = this.status;
  },

  methods: {
    submitForm() {
      for (let i = 0; i < this.salaryList.length; i++) {
        const selectedSalary = this.salaryList[i];
        if (selectedSalary.sumOfSalary == this.info.salary) {
          this.info.salary = selectedSalary;
        }
      }
      this.status = true;
      this.$parent.$data.status = this.status;
      this.$parent.$data.info = this.info;
    }
  }
};
</script>
