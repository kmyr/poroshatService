<template>
  <div>
    <form>
      <div class="col-md-12">
        <div class="form-group" id="infoForm">
          <label>نام و نام خانوادگی</label>
          <input v-model="info.name" type="text" class="form-control" required />

          <label>نام پدر</label>
          <input v-model="info.fatherName" type="text" class="form-control" required />

          <label>تاریخ تولد</label>
          <input v-model="info.birthdayDate" type="text" class="form-control" required />

          <label>سمت</label>
          <input v-model="info.role" type="text" class="form-control" required />

          <label>محل خدمت</label>
          <select class="form-control" v-model="info.employmentPlace">
            <option>تولید</option>
            <option>دفتر مرکزی</option>
            <option>فنی مهندسی</option>
          </select>

          <label>کد ملی</label>
          <input v-model="info.idCard" type="number" class="form-control" required />

          <label>شماره شناسنامه</label>
          <input v-model="info.idNumber" type="number" class="form-control" required />

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
          <input
            v-model="info.address"
            type="text"
            class="form-control"
            style="margin-bottom:15px"
            required
          />

          <label>تاریخ شروع قرارداد</label>
          <div class="form-row">
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Month"
                v-model="info.startDate.month"
                required
              />
            </div>
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Day"
                v-model="info.startDate.day"
                required
              />
            </div>
          </div>
          <label>مدت قرارداد</label>
          <input v-model="info.periodDate" type="number" class="form-control" required />

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
        <input id="submitBtn" type="submit" @click="submitForm" class="btn btn-primary" value="ثبت" />
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
          sumOfSalary: "2",
          salaryLetter:
            "بیست و سه میلیون و سیصد و پنجاه و چهار هزار و دویست و هفتاد ریال"
        },
        {
          baseSalary: "a3",
          years: "b3",
          worker: "3",
          housing: "3",
          children: "3",
          sumOfSalary: "3",
          salaryLetter:
            "بیست و سه میلیون و سیصد و پنجاه و چهار هزار و دویست و هفتاد ریال"
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
        startDate: {
          month: "",
          day: ""
        },
        periodDate: 1,
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
    }
  }
};
</script>


