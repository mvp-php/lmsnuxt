<template>
  <div>
    <h1 class="login-title mb-30">Set Password</h1>
    <form v-on:submit.prevent="onSubmit">
      <setPassword :the-user="user" />

    </form>

    <errorToastr :errorMessage="errorMessage" v-if="!hides" />
    <successToastr :successMessage="successMessage" v-if="!hidessucces" />
  </div>
</template>

<script>

import authService from '../../components/Service/AuthService';
import errorToastr from '../../components/element/errorToastr.vue';
import successToastr from '../../components/element/successToastr.vue';
import setPassword from '../../components/SetPassword/setPassword.vue';
export default {
  layout: 'auth',
  components: {
    errorToastr,
    successToastr,
    setPassword
  },
  props: {
    isTableDataVisible: {
      type: Boolean,
      default: true
    },
    showForm: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      user: {},
      errorMessage: "",

      hides: true,
      hidessucces: true,
      successMessage: ""
    };
  },
  mounted() {
    console.log(123, 'abc');
  },

  methods: {
    onSubmit(event) {
      console.log("rere");
      event.preventDefault();
      var params = {
        password: this.user.password,
        confirm_password:this.user.confirm_password
        
      };

      document.getElementById("password_error").textContent = "";
        document.getElementById("cpassword_error").textContent = "";
     

      var cnt = 0;

      if (!this.user.password) {
        document.getElementById("password_error").textContent = "Enter the new password";
        event.preventDefault();
        cnt = 1;
      }
    if (!this.user.confirm_password) {
        document.getElementById("cpassword_error").textContent = "Enter the confirm password";
        event.preventDefault();
        cnt = 1;
      }
     
      if (cnt == 0) {
        authService.callResetPassword(params,this.$route.params.id).then((result) => {
        
          this.$router.push({ path: '/reset-success' });
          this.successMessage = result.data.response_msg;

          //this.successToastrShow();
        }).catch(error => {
          this.errorMessage = error.response.data.response_msg;
          this.errorToastrShow();
   
        })
      }


    },

    errorToastrShow() {
      this.hides = false;
      setTimeout(() => this.hides = true, 3000);
    },
    successToastrShow() {
      this.hidessucces = false;
      setTimeout(() => this.hidessucces = true, 3000);
    },

  }
};
</script>