<template>
  <div id="login">
    <div class="loginStruc">
      <div class="loginText">
        <Icon type="ios-exit-outline" size="20"/>
        <div style="margin-left:5px;">登入</div>
      </div>

      <div class="blank"></div>

      <div class="inputStruc">
        <div @click="toFacebook" class="FBbtn">
          <Icon type="logo-facebook" size="15"/>
          <div style="margin-left:5px">使用 Facebook 登入</div>
        </div>
        <div @click="toGoogle" class="googleBtn">
          <Icon type="logo-google" size="15"/>
          <div style="margin-left:5px">使用 Google 登入</div>
        </div>
      </div>

      <div style="display:flex; justify-content: center; align-items: center">
        <div class="blank"></div>
        <div id="DIYtext">使用DIY登入</div>
        <div class="blank"></div>
      </div>

      <div class="inputStruc">
        <Input prefix="ios-contact" v-model="email" placeholder="請輸入註冊信箱" class="input"/>
        <Input prefix="md-key" v-model="password" placeholder="請輸入密碼" class="input"/>
      </div>

      <Button
        class="btn"
        @click="login"
        type="success"
        style="width:200px"
        :disabled="ableToLogin"
      >登入</Button>

      <div class="others">
        <div @click="toForgetPW" class="forgetPW">忘記密碼？</div>
        <div @click="toRegister" class="register">快速註冊</div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import {mapMutations} from "vuex";

export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
      localhostUrl: ""
    };
  },

  methods: {

    ...mapMutations(['setUsername']),

    login() {
      let userData = {
        email: this.email,
        password: this.password
      };

      let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      if (userData.email.search(emailRule) == -1) {
        this.$Message.error("Email格式錯了");
      } else if (userData.password.length > 10) {
        this.$Message.warning("密碼不得超過10位數");
      } else if (userData.password.length == 0) {
        this.$Message.warning("密碼不得為空");
      } else {
        axios
          .post(this.localhostUrl+"/login", userData)
          .then(({ data }) => {
            if (data) {
              let vm = this;

              vm.setUsername(data); // 用vuex的mutation去操作localStorage
              
              this.$Modal.success({
                title: "HI, "+data+"!",
                content: "暑期營隊熱烈報名中唷",
                okText: "去看看",
                closable: true,
                onOk: function() {
                  vm.$router.push({
                    name: "python"
                  });
                }
              });
              this.$router.push({
                name: "index"
              })
            } else {
              this.$Message.error("未註冊或帳號密碼錯誤");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },

    toFacebook() {
      this.$Message.warning("註冊拉幹");
    },

    toGoogle() {
      this.$Message.warning("用啥google拉幹");
    },

    toForgetPW() {
      this.$Message.warning("你487ㄇ");
    },

    toRegister() {
      this.$router.push({
        name: "register"
      });
    }
  },

  created() {
    this.localhostUrl = this.$store.state.localhostUrl;
  },

  computed: {
    ableToLogin() {
      if (this.account != 0 && this.password != 0) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginStruc {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid rgb(218, 227, 234);
  margin-top: 50px;
}

.loginText {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-weight: bold;
  font-size: 15px;
  margin: 5px;
}

.blank {
  border: 1px solid rgb(218, 227, 234);
  height: 1px;
  width: 100%;
}

#DIYtext {
  width: 250px;
  text-align: center;
  font-weight: bold;
}

.inputStruc {
  display: flex;
  flex-direction: column;
}

.input {
  width: 200px;
  margin: 20px;
  margin-bottom: 5px;
}

.FBbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(68, 105, 176);
  width: 200px;
  height: 30px;
  border-radius: 5px;
  color: white;
  margin: 20px;
  margin-bottom: 0px;
  cursor: pointer;
}

.googleBtn {
  display: flex;
  justify-content: center;
  border: 1px solid rgb(218, 227, 234);
  align-items: center;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
}

.btn {
  margin: 15px;
}

.others {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.forgetPW {
  font-size: 13px;
  cursor: pointer;
}

.register {
  color: orange;
  cursor: pointer;
}
</style>
