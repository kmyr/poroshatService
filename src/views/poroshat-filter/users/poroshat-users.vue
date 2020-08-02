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
          <th scope="col">حقوق</th>
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
          <td>{{ user.salary }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button id="actionBtn" class="btn btn-outline-danger" ref="btnToggle">
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
            <button id="actionBtn" class="btn btn-outline-primary" ref="btnToggle">
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

    <!-- Modal -->

    <button
      type="button"
      class="btn btn-primary"
      @click="toggleModal('newUserModal')"
    >Launch demo modal</button>
    <b-modal id="newUserModal" class="modal" title="همکار جدید" hide-footer>
      <hr class="my-4" />

      <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
        <button type="button" class="btn btn-primary" @click="addUser()">ثبت</button>
        <button type="button" class="btn btn-outline-dark" @click="toggleModal('newUserModal')">لغو</button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import getData from "../../../actions/getData";

export default {
  data() {
    return {
      users: []
    };
  },
  mixins: [getData],
  created() {
    this.getData("savedUsers", this.users);
  },
  methods: {
    toggleModal(action) {
      this.$root.$emit("bv::toggle::modal", action, "#btnToggle");
    }
  }
};
</script>
<style scoped>
@import url("../../../assets/style/poroshat-filter/users/table.css");
@import url("../../../assets/style/poroshat-filter/users/modal.css");
</style>