<template>
  <div id="register">
    <div class="registerStruc">
      <div class="registerText">
        <Icon type="ios-settings" size="20"/>
        <div style="margin-left:5px;">註冊</div>
      </div>

      <div class="blank"></div>

      <div class="inputStruc">
        <Input prefix="ios-body" v-model="name" placeholder="姓名" class="input"/>
        <Input prefix="ios-mail" v-model="email" placeholder="信箱" class="input"/>
        <Input prefix="md-key" v-model="password" placeholder="密碼 (不得超過10位數)" class="input"/>
        <Input prefix="md-key" v-model="comfirmPW" placeholder="確認密碼" class="input"/>
      </div>

      <Button
        class="btn"
        @click="register"
        type="success"
        style="width:200px"
        :disabled="ableToRegister"
      >註冊</Button>

      <div style="display:flex; justify-content: center; align-items: center">
        <div class="blank"></div>
        <div id="DIYtext">社群帳號註冊</div>
        <div class="blank"></div>
      </div>

      <div class="inputStruc">
        <div @click="toFacebook" class="FBbtn">
          <Icon type="logo-facebook" size="15"/>
          <div style="margin-left:5px">使用 Facebook 註冊</div>
        </div>
        <div @click="toGoogle" class="googleBtn">
          <Icon type="logo-google" size="15"/>
          <div style="margin-left:5px">使用 Google 註冊</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",

  data() {
    return {
      name: "",
      password: "",
      email: "",
      comfirmPW: "",
      localhostUrl: ""
    };
  },

  methods: {
    register() {
      let userData = {
        name: this.name,
        password: this.password,
        email: this.email
      };
      let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      if (this.password != this.comfirmPW) {
        this.$Message.error("密碼打錯了拉幹");
      } else if (this.email.search(emailRule) == -1) {
        this.$Message.error("Email格式錯了");
      } else if (this.password.length > 10) {
        this.$Message.error("密碼只能10個字拉");
      } else {
        axios
          .post(this.localhostUrl + "/register", userData)
          .then(({ data }) => {
            let vm = this;
            if (data) {
              this.$Modal.success({
                title: "HI, "+data+", 恭喜你註冊成功",
                content: "暑期營隊熱烈報名中唷",
                okText: "去看看",
                closable: true,
                onOk: function() {
                  vm.$router.push({
                    name: "python"
                  });
                }
              });
              localStorage.setItem("username", data);
              // location.reload();
              // BUG: 用localStorage+vuex解決, 監聽不了用localStorage
              this.$router.push({
                name: "index"
              });
            } else {
              this.$Message.error("此帳號已有人使用");
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
    }
  },

  created() {
    this.localhostUrl = this.$store.state.localhostUrl;
  },

  computed: {
    ableToRegister() {
      if (
        this.comfirmPW != 0 &&
        this.password != 0 &&
        this.email &&
        this.name
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
#register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.registerStruc {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid rgb(218, 227, 234);
  margin-top: 50px;
}

.registerText {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-weight: bold;
  font-size: 15px;
  margin: 5px;
}
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
