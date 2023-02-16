<template>
  <div>
    <el-form
      :model="login"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Введите имя" prop="name">
        <el-input v-model="login.name"></el-input>
      </el-form-item>
      <el-form-item label="Введите пароль" prop="pass">
        <el-input
          type="password"
          v-model="login.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="userLogin()">Вход</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "login",
  data() {
    return {
      login: {
        name: "",
        password: "",
      },

      rules: {
        name: [
          { required: true, message: "Заполните поле имя", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Заполните поле e-mail", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });

        const token = response.data.token;
        this.$store.dispatch("token/setToken", token);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>