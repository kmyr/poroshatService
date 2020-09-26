<template>
  <div class="details-sheet" style="padding-top:10px">
    <button
      @click="goBack('/computers')"
      class="btn btn-outline-danger hide-on-print"
      style="margin-bottom:10px"
    >
      بازگشت
    </button>
    <button
      @click="printPage()"
      class="btn btn-outline-success hide-on-print"
      style="margin-bottom:10px"
    >
      پرینت
    </button>
    <button
      @click="editComputerModal(showingComputer)"
      class="btn btn-outline-primary hide-on-print"
      style="margin-bottom:10px"
    >
      ویرایش
    </button>

    <div class="hide-on-print">
      USER: {{ showingComputer.deviceUsername }} - PASSWORD:
      {{ showingComputer.devicePassword }}
    </div>
    <div class="sheet" id="computersDetailsSheet">
      <div class="header">
        <table class="headerTableIMS">
          <tr id="firstRow">
            <td id="firstCol">C.N:</td>
            <td id="middleCol">
              <h3 class="font-italic text-center">IMS</h3>
            </td>
            <td rowspan="3">
              <img
                class="IMSheaderLogo text-center"
                src="../../img/poroshat-logo.png"
                alt
              />
            </td>
          </tr>
          <tr id="secondRow">
            <td id="firstCol">Issue date:</td>
            <td id="middleCol" rowspan="2" class="text-center">
              <h4 class="bold">فرم تحویل سیستم های اداری</h4>
            </td>
          </tr>
          <tr id="thirdRow">
            <td id="firstCol">Revision date:</td>
          </tr>
        </table>
      </div>
      <div class="body-part">
        <table class="IMStable">
          <tr id="IMStallParts">
            <td id="firstCol" rowspan="8">
              <p>تحویل دهنده</p>
            </td>
            <td id="secondCol" rowspan="2" class="align-top">
              <span class="bold">نوع دستگاه :</span>
              <p class="text-left">{{ showingComputer.deviceType }}</p>
            </td>
            <td id="thirdCol" rowspan="2" class="align-top">
              <span class="bold">نام دستگاه :</span>
              <p class="text-left">{{ showingComputer.deviceName }}</p>
            </td>
            <td id="forthCol" class="align-top">
              <span class="bold">کد اموال:</span>
            </td>
          </tr>
          <tr>
            <td id="forthCol" class="text-left">
              <span class="bold">IP Address:</span>
            </td>
          </tr>
          <tr>
            <td id="secondCol" colspan="3" class="text-center bold">
              مشخصات فنی
            </td>
          </tr>
          <tr>
            <td id="secondCol" class="text-left">
              <span class="bold">Storage:</span>
              {{ showingComputer.storage }} G
            </td>
            <td id="thirdCol" class="text-left">
              <span class="bold">RAM:</span>
              {{ showingComputer.ram }} G
            </td>
            <td id="forthCol" class="text-left">
              <span class="bold">Motherboard:</span>
              {{ showingComputer.motherboard }}
            </td>
          </tr>
          <tr>
            <td id="secondCol" class="text-left">
              <span class="bold">Display:</span>
              {{ showingComputer.display }}
            </td>
            <td id="thirdCol" class="text-left">
              <span class="bold">Graphic Card:</span>
              {{ showingComputer.graphic }}
            </td>
            <td id="forthCol" class="text-left">
              <span class="bold">CPU:</span>
              {{ showingComputer.cpu }}
            </td>
          </tr>
          <tr id="IMStallParts">
            <td id="secondCol" colspan="3" class="align-top">
              نرم افزارهای مورد نیاز/ نصب شده:
            </td>
          </tr>
          <tr style="height:150px">
            <td id="secondCol" colspan="3">
              دستگاه با مشخصات فوق بر اساس درخواست به شماره
              ..................................... مورخ
              ................................. به آقا/خانم
              ................................. به کد
              پرسنلی............................................. و پست سازمانی
              ..................................... جهت استفاده و تسریع در انجام
              امور محوله تحویل داده می شود.
            </td>
          </tr>
          <tr id="IMStallParts">
            <td id="secondCol" colspan="2">نام و نام خانوادگی:</td>
            <td id="forthCol" class="align-top">تاریخ و امضاء:</td>
          </tr>
          <tr>
            <td id="firstCol" rowspan="2">
              <p style="width:100%">سرپرست مربوطه</p>
            </td>
            <td id="secondCol" colspan="3">
              تحویل دستگاه با شرایط فوق به آقا/خانم
              ............................................. مورد تایید است
            </td>
          </tr>
          <tr id="IMStallParts">
            <td id="secondCol" colspan="2">نام و نام خانوادگی:</td>
            <td id="forthCol" class="align-top">تاریخ و امضاء:</td>
          </tr>
          <tr>
            <td id="firstCol" rowspan="2">
              <p>تحویل گیرنده</p>
            </td>
            <td
              id="secondCol"
              colspan="3"
              style="height:250px"
              class="align-top"
            >
              <br />سیستم با مشخصات فوق، با قبول تعهد و رعایت الزامات زیر تحویل
              اینجانب ............................................... به کد
              پرسنلی ....................................... و پست سازمانی
              ..................................گردید: <br />- هرگونه نقل و
              انتقال که منجر به تحویل سیستم به دیگر کارکنان در واحد گردد، باید
              با اطلاع قبلی و تایید سرپرست مربوطه و انباردار صورت پذیرد. <br />-
              با توجه به این که سیستم های شرکت بخشی از اموال غیرمصرفی مجموعه
              بوده و در حکم مصرفی در اختیار تحویل گیرنده قرار می گیرد، وی موظف
              است در مورد حسن نگهداری و استفاده صحیح از آن نهایت دقت را به عمل
              آورده و هرگاه کسر یا نقصانی در اموال موجود به وجود آمد، مراتب را
              فورا با تایید سرپرست مربوطه به تحویل دهنده اعلام نماید. <br />-
              تحویل گیرنده حق خروج اموال از شرکت را ندارد.
            </td>
          </tr>
          <tr id="IMStallParts">
            <td id="secondCol" colspan="2">نام نام خانوادگی:</td>
            <td id="forthCol" class="align-top">تاریخ و امضاء:</td>
          </tr>
        </table>

        <div class="IMSfooterSign text-right">
          <h3 class="bold">مهراعتبار</h3>
          <p class="bold">
            این سند فقط با مهراصلی دارای اعتبار بوده و کپی برداری از آن ممنوع می
            باشد.
          </p>
        </div>
      </div>
    </div>
    <b-modal
      id="computerActionModal"
      class="modal"
      :title="modalStatus.title"
      hide-footer
    >
      <fields :editingComputerInfo="editingComputer"></fields>

      <hr class="my-4" />

      <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
        <button type="button" class="btn btn-primary" @click="updateComputer()">
          ویرایش
        </button>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="toggleModal('computerActionModal')"
        >
          لغو
        </button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import $ from "jquery";
import { formFields } from "../../datastore/globalData";
import getData from "../../actions/getData";
import fields from "../forms/computersInfoFields";
export default {
  data() {
    return {
      computersList: [],
      showingComputer: {},
      modalStatus: "",
      editingComputer: {}
    };
  },
  mixins: [getData],

  components: { fields },

  created() {
    this.getData("savedComputersInfo", this.computersList);
    this.scrollTop();
  },

  methods: {
    scrollTop() {
      $("html,body").animate({ scrollTop: 0 }, "slow");
    },
    goBack(target) {
      this.$router.push(target);
    },
    printPage() {
      window.print();
    },
    editComputerModal(computer) {
      this.modalStatus = {
        title: `${computer.deviceName} ویرایش اطلاعات `
      };
      this.editingComputer = computer;
      this.toggleModal("computerActionModal");
    },
    updateComputer() {
      formFields.$emit("updateComputerEmit");
    },
    toggleModal(action) {
      this.$root.$emit("bv::toggle::modal", action, "#btnToggle");
    }
  },

  watch: {
    computersList: function() {
      const currentComputerId = this.$route.params.id;

      for (let i = 0; i < this.computersList.length; i++) {
        const currentComputer = this.computersList[i];

        if (currentComputer._ID == currentComputerId) {
          this.showingComputer = currentComputer;
        }
      }
    }
  }
};
</script>
<style  scoped>
@import url("../../assets/style/items/computers-details.css");
</style>