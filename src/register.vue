<template>
  <div id="register">
    <div class="inputStruc">
      <Input prefix="ios-contact" v-model="account" placeholder="帳號(不得超過10位數)" class="input"/>
      <Input prefix="md-key" v-model="password" placeholder="密碼(不得超過10位數)" class="input"/>
      <Input prefix="ios-mail" v-model="email" placeholder="信箱" class="input"/>
      <Input prefix="ios-body" v-model="age" placeholder="年紀" class="input"/>
    </div>
    <Button class="btn" @click="register">註冊</Button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",

  data() {
    return {
      account: "",
      password: "",
      email: "",
      age: ""
    };
  },

  methods: {
    register() {
      let userData = {
        account: this.account,
        password: this.password,
        email: this.email,
        age: this.age
      };
      console.log(userData);
      axios
        .post("http://192.168.1.197:3000/register", userData)
        .then(({ data }) => {
          if (data) {
            this.$Message.success("註冊成功");
          } else {
            this.$Message.error("此帳號已有人使用");
          }
        })
        .catch(err => {
          console.log(err);
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
