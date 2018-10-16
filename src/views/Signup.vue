<template lang="pug">
  .signup-container
    el-form(class="signup-form", :model="input", :rules="rules", label-position="top", v-loading="isLoading", status-icon, ref="signin")
      h1 Signup
      el-form-item(label="Email", prop="email")
        el-input(v-model="input.email", type="email")
      el-form-item(label="Password" prop="password")
        el-input(v-model="input.password", type="password")
      el-form-item
        el-button(type="primary", native-type="submit", v-on:click.prevent="signup", class="full-width") Join
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Signup',
  data() {
    return {
      isLoading: false,
      input: { email: '', password: '' },
      rules: {
        email: [
          {
            required: true,
            message: 'Please input your email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input a password',
            trigger: 'blur',
          },
          { min: 8, message: 'Length should be at least 8', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    signup() {
      this.$refs['signin'].validate(valid => {
        if (!valid) {
          return;
        }

        this.isLoading = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.input.email, this.input.password)
          .then(user => {
            this.$router.push('/login');
          })
          .catch(err => {
            console.log(err);
            this.isLoading = false;
            this.$message({
              showClose: true,
              message: err.code + ' ' + err.message,
              type: 'error',
            });
          });
      });

      return false;
    },
  },
};
</script>

<style lang="css" scoped>
.signup-container {
  position: fixed;
  height: 100%;
  width: 100%;
}

.signup-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 520px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}

.full-width {
  width: 100%;
}
</style>
