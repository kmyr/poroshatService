<template>
  <div>
    <table class="table users-table" id="workersTable">
      <thead class="thead-dark" id="workersTableHead">
        <tr>
          <th scope="col">نام</th>
          <th scope="col">نام پدر</th>
          <th scope="col">تاریخ تولد</th>
          <th scope="col">سمت</th>
          <th scope="col">کد ملی</th>
          <th scope="col">محل اشتغال</th>
          <th scope="col">تحصیلات</th>
          <th scope="col">آدرس</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(worker,i) in workers" :key="i">
          <th>{{ worker.name }}</th>
          <td>{{ worker.fatherName }}</td>
          <td>{{ worker.birthdayDate }}</td>
          <td>{{ worker.role }}</td>
          <td>{{ worker.idCard }}</td>
          <td>{{ worker.employmentPlace }}</td>
          <td>{{ worker.education }}</td>
          <td>{{ worker.address }}</td>
          <td>
            <button
              class="btn btn-outline-danger actionBtn"
              @click="deleteWorker(worker)"
              ref="btnToggle"
            >
              <span class="glyphicon">
                <svg
                  class="bi bi-trash-fill"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                  />
                </svg>
              </span>
            </button>
            <button
              @click="editWorkerModal(worker)"
              class="btn btn-outline-primary actionBtn"
              ref="btnToggle"
            >
              <span class="glyphicon">
                <svg
                  class="bi bi-pencil-square"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex flex bd-highlight mb-12 flex-button-section">
      <button @click="goBack('/')" class="btn btn-danger backBtn" id="workersTable-backBtn">بازگشت</button>
      <button
        type="button"
        class="btn btn-success addUserBtn"
        id="addWorkerBtn"
        @click="newWorkerModal()"
      >افزودن</button>
    </div>
    <!-- Modal -->

    <b-modal id="workerActionModal" class="modal" :title="modalStatus.title" hide-footer>
      <form id="workerActionsForm">
        <label>نام و نام خانوادگی</label>
        <input
          name="address"
          v-model="prepareWorker.name"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />

        <label>نام پدر</label>
        <input
          name="fatherName"
          v-model="prepareWorker.fatherName"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />

        <label>تاریخ تولد</label>
        <input
          name="birthdayDate"
          v-model="prepareWorker.birthdayDate"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />

        <label>کد ملی</label>
        <input
          name="idCard"
          v-model="prepareWorker.idCard"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />

        <label>سمت</label>
        <input
          name="role"
          v-model="prepareWorker.role"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />

        <label>محل اشتغال</label>
        <select name="employmentPlace" class="form-control" v-model="prepareWorker.employmentPlace">
          <option>تولید</option>
          <option>دفتر مرکزی</option>
          <option>دفتر فنی مهندسی</option>
          <option>انبار</option>
        </select>

        <label>تحصیلات</label>
        <select name="education" class="form-control" v-model="prepareWorker.education">
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
          v-model="prepareWorker.address"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />
      </form>
      <hr class="my-4" />

      <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
        <button
          type="button"
          class="btn btn-primary"
          v-if="modalStatus.newWorker"
          @click="inputValidation('submitWorker')"
        >ثبت</button>
        <button
          type="button"
          class="btn btn-primary"
          v-if="!modalStatus.newWorker"
          @click="inputValidation(updateWorker)"
        >ویرایش</button>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="toggleModal('workerActionModal')"
        >لغو</button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import $ from "jquery";
import getData from "../../../actions/getData";
import postData from "../../../actions/postData";
import updateData from "../../../actions/updateData";
import deleteData from "../../../actions/deleteData";
export default {
  data() {
    return {
      workers: [],
      editingWorker: null,
      prepareWorker: {},
      modalStatus: {
        title: "همکار جدید",
        newWorker: true
      },
      targetName: null
    };
  },
  mixins: [getData, postData, updateData, deleteData],
  created() {
    this.getData("savedWorkers", this.workers);
  },
  methods: {
    inputValidation(command) {
      if (
        $("input[name='fullname']").val() == "" ||
        $("input[name='fatherName']").val() == "" ||
        $("input[name='birthdayDate']").val() == "" ||
        $("input[name='role']").val() == "" ||
        $("select[name='employmentPlace']").val() == "" ||
        $("input[name='idCard']").val() == "" ||
        $("input[name='idNumber']").val() == "" ||
        $("select[name='education']").val() == "" ||
        $("input[name='address']").val() == ""
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
        if (command == "submitWorker") {
          this.sumbitWorker();
        } else {
          this.updateWorker();
        }
      }
    },

    newWorkerModal() {
      this.prepareWorker = {};
      this.modalStatus = {
        title: "همکار جدید",
        newWorker: true
      };
      this.toggleModal("workerActionModal");
    },
    editWorkerModal(worker) {
      this.modalStatus = {
        title: ` ویرایش اطلاعات ${worker.name}`,
        newWorker: false
      };
      this.prepareWorker = worker;
      this.targetName = worker.name;
      this.toggleModal("workerActionModal");
    },
    sumbitWorker() {
      this.postData("savedWorkers", this.prepareWorker, true);
      this.toggleModal("workerActionModal");
    },
    updateWorker() {
      this.updateData("savedWorkers", this.prepareWorker, this.targetName);
      this.toggleModal("workerActionModal");
    },
    deleteWorker(worker) {
      if (confirm(`${worker.name} پاک شود؟`)) {
        this.deleteData("savedWorkers", worker);
        this.postData("deleteItemsLog", worker, true);
      }
    },
    goBack(target) {
      this.$router.push(target);
    },
    toggleModal(action) {
      this.$root.$emit("bv::toggle::modal", action, "#btnToggle");
    }
  }
};
</script>
<style scoped>
@import url("../../../assets/style/poroshat-filter/workers/table.css");
@import url("../../../assets/style/poroshat-filter/workers/modal.css");
@import url("../../../assets/style/poroshat-filter/workers/form.css");
</style>