<template>
  <div>
    <table class="table users-table" id="usersTable">
      <thead class="thead-dark" id="usersTableHead">
        <tr>
          <th scope="col">نام</th>
          <th scope="col">ایمیل</th>
          <th scope="col">رمز عبور</th>
          <th scope="col">سطح دسترسی</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,i) in users" :key="i">
          <th>{{ user.name }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.userPassword }}</td>
          <td>{{ user.accessLevel }}</td>

          <td>
            <button
              class="btn btn-outline-danger actionBtn"
              @click="deleteUser(user)"
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
              @click="editUserModal(user)"
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
      <button @click="goBack('/')" class="btn btn-danger backBtn" id="usersTable-backBtn">بازگشت</button>
      <button
        type="button"
        class="btn btn-success addUserBtn"
        id="addUserBtn"
        @click="newUserModal()"
      >افزودن</button>
    </div>
    <!-- Modal -->

    <b-modal id="userActionModal" class="modal" :title="modalStatus.title" hide-footer>
      <form id="userActionsForm">
        <label>نام و نام خانوادگی</label>
        <input
          name="address"
          v-model="prepareUser.name"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />

        <label>ایمیل</label>
        <input
          name="email"
          v-model="prepareUser.email"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />

        <label>رمز عبور</label>
        <input
          name="userPassword"
          v-model="prepareUser.userPassword"
          type="text"
          class="form-control"
          style="margin-bottom:15px"
        />

        <label>سطح دسترسی</label>
        <input
          name="accessLevel"
          v-model="prepareUser.accessLevel"
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
          v-if="modalStatus.newUser"
          @click="inputValidation('submitUser')"
        >ثبت</button>
        <button
          type="button"
          class="btn btn-primary"
          v-if="!modalStatus.newUser"
          @click="inputValidation('updateUser')"
        >ویرایش</button>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="toggleModal('userActionModal')"
        >لغو</button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import $ from "jquery";
import getData from "../../actions/getData";
import postData from "../../actions/postData";
import updateData from "../../actions/updateData";
import deleteData from "../../actions/deleteData";
export default {
  data() {
    return {
      users: [],
      editingUser: null,
      prepareUser: {},
      modalStatus: {
        title: "همکار جدید",
        newUser: true
      },
      targetName: null
    };
  },
  mixins: [getData, postData, updateData, deleteData],
  created() {
    this.getData("savedUsers", this.users);
  },
  methods: {
    inputValidation(command) {
      if (
        $("input[name='fullname']").val() == "" ||
        $("input[name='email']").val() == "" ||
        $("input[name='userPassword']").val() == "" ||
        $("input[name='accessLevel']").val() == ""
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
        if (command == "submitUser") {
          this.sumbitUser();
        } else {
          this.updateUser();
        }
      }
    },

    newUserModal() {
      this.prepareUser = {};
      this.modalStatus = {
        title: "همکار جدید",
        newUser: true
      };
      this.toggleModal("userActionModal");
    },
    editUserModal(user) {
      this.modalStatus = {
        title: ` ویرایش اطلاعات ${user.name}`,
        newUser: false
      };
      this.prepareUser = user;
      this.targetName = user.name;
      this.toggleModal("userActionModal");
    },
    sumbitUser() {
      this.postData("savedUsers", this.prepareUser, true);
      this.toggleModal("userActionModal");
    },
    updateUser() {
      this.updateData("savedUsers", this.prepareUser, this.targetName);
      this.toggleModal("userActionModal");
    },
    deleteUser(user) {
      if (confirm(`${user.name} پاک شود؟`)) {
        this.deleteData("savedUsers", user);
        this.postData("deleteItemsLog", user, true);
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
@import url("../../assets/style/poroshat-filter/persons/table.css");
@import url("../../assets/style/poroshat-filter/persons/modal.css");
@import url("../../assets/style/poroshat-filter/persons/form.css");
</style>