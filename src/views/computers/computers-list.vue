<template>
  <div>
    <table class="table users-table" id="workersTable">
      <thead class="thead-dark" id="workersTableHead">
        <tr>
          <th scope="col">نام دستگاه</th>
          <th scope="col">Ram</th>
          <th scope="col">Storage</th>
          <th scope="col">CPU</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(computer, i) in computers" :key="i">
          <th>
            <router-link :to="'/computers/'+ computer._ID">{{ computer.deviceName }}</router-link>
          </th>
          <td>{{ computer.ram }}</td>
          <td>{{ computer.storage }}</td>
          <td>{{ computer.cpu }}</td>
          <td>
            <button
              class="btn btn-outline-danger actionBtn"
              @click="deleteComputer(computer)"
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
              @click="editComputerModal(computer)"
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
        <tr>
          <div class="container">تعداد سیستم ها: {{computers.length}}</div>
        </tr>
      </tbody>
    </table>
    <div class="d-flex flex bd-highlight mb-12 flex-button-section">
      <button @click="goBack('/')" class="btn btn-danger backBtn" id="workersTable-backBtn">بازگشت</button>
      <button
        type="button"
        class="btn btn-success addUserBtn"
        id="addWorkerBtn"
        @click="newComputerModal()"
      >افزودن</button>
    </div>
    <!-- Modal -->

    <b-modal id="computerActionModal" class="modal" :title="modalStatus.title" hide-footer>
      <fields :editingComputerInfo="editingComputer"></fields>

      <hr class="my-4" />

      <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
        <button
          type="button"
          class="btn btn-primary"
          v-if="modalStatus.newComputer"
          @click="saveComputer()"
        >ثبت</button>
        <button
          type="button"
          class="btn btn-primary"
          v-if="!modalStatus.newComputer"
          @click="updateComputer()"
        >ویرایش</button>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="toggleModal('computerActionModal')"
        >لغو</button>
      </div>
    </b-modal>
  </div>
</template>
<script>
// import $ from "jquery";
import { formFields } from "../../datastore/globalData";
import getData from "../../actions/getData";
import postData from "../../actions/postData";
import updateData from "../../actions/updateData";
import deleteData from "../../actions/deleteData";
import fields from "../forms/computersInfoFields";
export default {
  data() {
    return {
      computers: [],
      editingComputer: null,
      modalStatus: {
        title: "همکار جدید",
        newComputer: true
      }
    };
  },

  components: { fields },
  mixins: [getData, postData, updateData, deleteData],
  created() {
    this.getData("savedComputersInfo", this.computers);
  },

  methods: {
    editComputerModal(computer) {
      this.modalStatus = {
        title: ` ویرایش اطلاعات ${computer.deviceName}`,
        newComputer: false
      };
      this.editingComputer = computer;
      this.toggleModal("computerActionModal");
    },
    updateComputer() {
      formFields.$emit("updateComputerEmit");
    },
    newComputerModal() {
      this.modalStatus = {
        title: "همکار جدید",
        newComputer: true
      };
      this.clearForm();
      this.toggleModal("computerActionModal");
    },
    saveComputer() {
      formFields.$emit("newComputerEmit");
    },
    clearForm() {
      this.editingComputer = null;
    },
    deleteComputer(computer) {
      if (confirm(` Delete ${computer.deviceName}?`)) {
        this.deleteData("savedComputersInfo", computer);
        this.postData("deleteComputersLog", computer, true);
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
@import url("../../assets/style/items/table.css");
@import url("../../assets/style/items/modal.css");
@import url("../../assets/style/items/form.css");
</style>
