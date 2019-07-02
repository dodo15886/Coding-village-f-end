<template>
  <div id="login">
    <div class="inputStruc">
      <Input prefix="ios-contact" v-model="account" placeholder="帳號(不得超過10位數)" class="input"/>
      <Input prefix="md-key" v-model="password" placeholder="密碼(不得超過10位數)" class="input"/>
    </div>
    <Button class="btn" @click="login">登入</Button>
    <Button class="btn" @click="toRegister">快速註冊</Button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",

  data() {
    return {
      account: "",
      password: ""
    };
  },

  methods: {
    login() {
      let userData = {
        account: this.account,
        password: this.password
      };
      if (userData.account.length > 10) {
        this.$Message.warning("帳號不得超過10位數");
      } else if (userData.account.length == 0) {
        this.$Message.warning("帳號不得為空");
      } else if (userData.password.length > 10) {
        this.$Message.warning("密碼不得超過10位數");
      } else if (userData.password.length == 0) {
        this.$Message.warning("密碼不得為空");          
      } else {
        axios
          .post("http://192.168.1.197:3000/login", userData)
          .then(({ data }) => {
            if (data) {
              this.$Message.success("登入成功");
            } else {
              this.$Message.error("未註冊或帳號密碼錯誤");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },

    toRegister() {
      this.$router.push({
        name: "register"
      });
    }
  }
};
</script>

<style scoped>
.inputStruc {
  display: flex;
  flex-direction: column;
}

.input {
  width: 200px;
  margin: 20px;
}

.btn {
  margin: 20px;
}
</style>
