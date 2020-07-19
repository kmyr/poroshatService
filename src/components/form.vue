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
      info: {
        name: "",
        fatherName: "",
        birthdayDate: "",
        idCard: "",
        idNumber: "",
        education: "",
        address: "",
        startDate: "",
        endDate: ""
      },
      status: false
    };
  },
  created() {
    this.$parent.$data.status = this.status;
  },

  methods: {
    submitForm() {
      this.status = true;
      this.$parent.$data.status = this.status;
      this.$parent.$data.info = this.info;
    }
  }
};
</script>
