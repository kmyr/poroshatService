<template>
  <div class="previewSheet">
    <button id="hideOnPrintBtn" class="btn btn-danger backBtn" @click="goBack">Back</button>
    <button id="hideOnPrintBtn" class="btn btn-success" @click="printSheet">Print</button>

    <div class="paper" id="paper">
      <div class="header">
        <div class="part1"></div>
        <div class="part2">
          <span class="bold">فرم قراردادکار موقت</span>
          <br />صنایع پالایش پروشات پالاد
        </div>
        <div class="part3"></div>
      </div>
      <div class="bodyPart">
        اين قرارداد في‌مابين شركت صنایع پالایش پروشات پالاد به نمايندگي آقای
        نصیر صفاری كه در اين قرارداد اختصاراً «كـارفرمـا» ناميده می‌شود و طرف
        ديگر قرارداد كه اختصاراً « همکار » ناميده مي شود، با مشخصات زير منعقد مي
        گردد
        <br />
        آقای/خانم: {{info.name}}
        فرزند: {{info.fatherName}}
        متولد: {{info.birthdayDate}}
        شماره شناسنامه : {{info.idNumber}}
        شماره ملی: {{info.idCard}}
        میزان تحصیلات: {{info.education}}
        به نشانی: {{info.address}}
        <br />ماده 1) مـوضـوع قـرارداد
        : عبارتست از انجـام وظايف ذيـل تـوسـط همکار در پسـت سـازمـانـي، تحـت
        عنـوان کارگر ساده و هم چنین انجام ساير امـور محـوله و وظايف مرتبـط با
        شغـل كـارمنـد براسـاس دستـورات كـارفـرمـا
        <br />ماده 2) محل خدمت و
        انجام موضوع قـرارداد : محل خدمت و انجام موضوع قرارداد، در تولید مي باشد
        ليكن با توجه به بنـد « د » ماده 10 قانون كار،‌ همکار اختيار تغيير محل
        خدمت خـود را به كارفرما تفويض مي نمايد. بنابراين كارفرما حـق خواهد داشت
        با توجه نياز شركت، در هر زمان كه اقتضا نمايد محل خدمت كارمند را تغيير
        دهد. چنانچه همکار در واحد جديد حاضر به ادامه همكاري نباشد، اين موضوع به
        منزله استعفاي كارمند تلقي مي‌گرد؛ و همچنین همکار ضامن میشود که در مدت
        زمان همکاری با شرکت پروشات فیلتر، ساکن اصفهان باشد؛ در صورت قطع چنین
        ضمانتی، همکار میبایست در اسرع وقت به شرکت اطلاع دهد
        <br />ماده 3) زمـان
        انجـام كـار: زمان انجام كار ، 44 ساعت در هفته تعيين مي گردد كه توزيع آن
        در ماه براساس آئين نامه ها و ضوابط صورت مي پذيرد
        <br />ماده 4) حقـوق و
        مـزايـا:
        <!--
  table
        -->
        <table class="costs">
          <tbody>
            <tr>
              <td>حقوق پایه</td>
              <td></td>
              <td>ریال</td>
            </tr>
            <tr>
              <td>پایه سنوات</td>
              <td></td>
              <td>ریال</td>
            </tr>
            <tr>
              <td>بن کارگری</td>
              <td></td>
              <td>ریال</td>
            </tr>
            <tr>
              <td>حق مسکن</td>
              <td></td>
              <td>ریال</td>
            </tr>
            <tr>
              <td>حق عائله مندی و اولاد</td>
              <td></td>
              <td>ریال</td>
            </tr>
            <tr>
              <td>جمع کل</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="paper">
      <div class="header">
        <div class="part1"></div>
        <div class="part2"></div>
        <div class="part3"></div>
      </div>
      <div class="bodyPart">sdf</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: null
    };
  },
  created() {
    this.info = this.$parent.$data.info;
  },
  methods: {
    printSheet() {
      window.print();
    },
    goBack() {
      this.$parent.$data.status = !this.$parent.$data.status;
    }
  }
};
</script>
<style>
@import url("../assets/style/agreement.css");
</style>
