<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="input" :rules="rules"
      label-position="top" v-loading="isLoading">
      <h1 class="h1">Login</h1>
      <el-form-item label="Email" prop="email">
        <el-input v-model="input.email" type="email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="input.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" @click="login" class="full-width">
            Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      error: false,
      isLoading: false,
      rules: {
        email: {
          required: true,
          message: "Please input your email",
          trigger: "blur"
        },
        password: {
          required: true,
          message: "Please input your passord",
          trigger: "blur"
        }
      },
      input: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    /* eslint-disable no-console */
    login() {
      this.isLoading = true;
      if (
        this.input.email === "julien@kumojin.com" &&
        this.input.password === "plop"
      ) {
        const user = {
          email: "julien@kumojin.com",
          name: "Julien Maitrehenry",
          profile: {
            audition: {}
          }
        };
        console.log("Login valid, process to login");
        this.$store.dispatch("login", user);
        this.$router.push("/app/profile");
        return;
      }

      if (
        this.input.email === "kim@kumojin.com" &&
        this.input.password === "plop"
      ) {
        const user = {
          email: "kim@kumojin.com",
          name: "Kim Auclair",
          profile: {
            audition: {
              steps: [250, 500, 1000, 2000, 4000, 8000],
              left: {
                250: 110,
                500: 110,
                1000: 105,
                2000: 90,
                4000: 85,
                8000: 85
              },
              right: {
                250: 105,
                500: 115,
                1000: 115,
                2000: 110,
                4000: 110,
                8000: 95
              }
            }
          }
        };
        console.log("Login valid, process to login");
        this.$store.dispatch("login", user);
        this.$router.push("/app/dashboard");
        return;
      }

      this.isLoading = false;
      this.$message({
        showClose: true,
        message: "Email or password invalid",
        type: "error"
      });
    }
  }
};
</script>


<style lang="css" scoped>
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
}

.login-form {
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
