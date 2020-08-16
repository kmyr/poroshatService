<template>
  <div>
    <div class="container login-form">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>
              <form class="form-signin">
                <div class="form-label-group">
                  <label for="inputEmail">ایمیل</label>
                  <input
                    type="text"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    v-model="userInfo.username"
                    required
                    autofocus
                  />
                </div>

                <div class="form-label-group">
                  <label for="inputPassword">پسوورد</label>
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    v-model="userInfo.password"
                    required
                  />
                </div>

                <button
                  @click="logUserIn()"
                  class="btn btn-outline-primary"
                  id="logUserIn"
                  type="button"
                >ورود</button>

                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getData from "../actions/getData";
import $ from "jquery";
import { userActions } from "../main";
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      },
      userStatus: {
        logedIn: false,
        username: ""
      },
      users: []
    };
  },
  mixins: [getData],
  created() {
    this.getData("savedUsers", this.users);
    this.checkUserLogedIn();
  },
  methods: {
    checkUserLogedIn() {
      const logedIn = localStorage.logedIn;
      if (logedIn == "true") {
        this.$router.push("/");
      }
    },
    logUserIn() {
      for (let i = 0; i < this.users.length; i++) {
        const currentUser = this.users[i];
        if (
          currentUser.email == this.userInfo.username &&
          currentUser.userPassword == this.userInfo.password
        ) {
          userActions.$emit("userLogedIn");
        } else {
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
        }
      }
    }
  }
};
</script> 
<style>
@import url("../assets/style/login.css");
</style>