<template>
  <div>
    <table class="table" id="usersTable">
      <thead class="thead-dark" id="usersTableHead">
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
        <tr v-for="(user,i) in users" :key="i">
          <th>{{ user.name }}</th>
          <td>{{ user.fatherName }}</td>
          <td>{{ user.birthdayDate }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.idCard }}</td>
          <td>{{ user.employmentPlace }}</td>
          <td>{{ user.education }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button
              id="actionBtn"
              @click="deleteUser(user)"
              class="btn btn-outline-danger"
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
              id="actionBtn"
              class="btn btn-outline-primary"
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
      <div class="d-flex flex-row-reverse bd-highlight mb-12">
        <button
          @click="goBack('/')"
          class="btn btn-outline-danger usersTable-backBtn"
          id="backBtn"
        >بازگشت</button>
        <button
          type="button"
          class="btn btn-outline-success"
          id="addUserBtn"
          @click="newUserModal()"
        >افزودن</button>
      </div>
    </table>
    <!-- Modal -->

    <b-modal id="userActionModal" class="modal" :title="modalStatus.title" hide-footer>
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
          <option>دفتر فنی مهندسی</option>
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
          @click="inputValidation(updateUser)"
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
import getData from "../../../actions/getData";
import postData from "../../../actions/postData";
import updateData from "../../../actions/updateData";
import deleteData from "../../../actions/deleteData";
export default {
  data() {
    return {
      users: [],
      editingUser: null,
      prepareUser: {},
      modalStatus: {
        title: "همکار جدید",
        newUser: true
      }
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
      this.toggleModal("userActionModal");
    },
    sumbitUser() {
      this.postData("savedUsers", this.prepareUser, true);
      this.toggleModal("userActionModal");
    },
    updateUser() {
      this.updateData("savedUsers", {
        name: this.prepareUser.name,
        fatherName: this.prepareUser.fatherName,
        idCard: this.prepareUser.idCard,
        education: this.prepareUser.education,
        employmentPlace: this.prepareUser.employmentPlace,
        birthdayDate: this.prepareUser.birthdayDate,
        address: this.prepareUser.address,
        role: this.prepareUser.role
      });
      this.toggleModal("userActionModal");
    },
    deleteUser(user) {
      if (confirm(`${user.name} پاک شود؟`)) {
        this.deleteData("savedUsers", user);
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
@import url("../../../assets/style/poroshat-filter/users/table.css");
@import url("../../../assets/style/poroshat-filter/users/modal.css");
@import url("../../../assets/style/poroshat-filter/users/form.css");
</style>