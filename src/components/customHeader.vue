<template>
  <div id="customHeader">
    <div id="guideAndLogo">
      <div class="logoStruc" @click="childChangePage('index')">
        <img src="@/assets/village.png" width="40px" height="40px">
        <div id="headerText">Coding Village</div>
      </div>

      <Dropdown style="margin:10px;" @on-click="childChangePage">
        <DropdownItem name="member">關於我們</DropdownItem>

        <DropdownMenu slot="list">
          <DropdownItem disabled>創作理念</DropdownItem>
          <DropdownItem name="member">成員介紹</DropdownItem>
          <DropdownItem disabled>合作計畫</DropdownItem>
          <DropdownItem name="consult">常見問題</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown style="margin:10px;" @on-click="childChangePage">
        <DropdownItem name="index">課程介紹</DropdownItem>
        <DropdownMenu slot="list">
          <DropdownItem name="python">Python</DropdownItem>
          <DropdownItem name="cPlusPlus" disabled>C++</DropdownItem>
          <DropdownItem name="web" disabled>Web</DropdownItem>
          <DropdownItem name="app" disabled>App</DropdownItem>
          <DropdownItem name="apcs" disabled>APCS</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button type="text" style="margin:10px;" @click="childChangePage('consult')">免費諮詢</Button>
    </div>

    <Button v-if="!username" type="text" style="margin:20px" @click="childChangePage('login')">登入</Button>

    <Dropdown v-else @on-click="childChangePage">
      <div class="user">
        <Icon type="md-contact" size="25"/>
        <div style="margin:5px">{{username}}</div>
      </div>
      <DropdownMenu slot="list" placement="bottom-start">
        <DropdownItem name="HWsystem">作業系統</DropdownItem>
        <DropdownItem name="setting">帳號設定</DropdownItem>
        <DropdownItem name="lessonList">課程清單</DropdownItem>
        <DropdownItem name="logout" divided>登出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "customHeader",

  data() {
    return {
      username: "",
      MainAppTop: 0,
      account: ""
    };
  },

  mounted() {
    let vm = this;
    this.username = localStorage.getItem("username");

    window.addEventListener("scroll", function() {
      vm.MainAppTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (vm.MainAppTop != 0) {
      } else {
      }
    });
  },

  methods: {
    ...mapMutations(['setUsername']),

    childChangePage(toWhatPage) {
      if (toWhatPage != "logout") {
        this.$emit("changePage", toWhatPage);
      } else {
        this.setUsername("");
        this.$emit("changePage", "index");
        this.$Message.success("登出了");
      }
    }
  },

  computed: {
    ...mapGetters(["getUsername"]),
  },

  watch: {
    //動態監聽state的變化，實時改變頁面的資料
    getUsername: function(username) {
      console.log(username);
      this.username = username; //data宣告一個變數，在html引用。如果storage的值發生變化就實時重新整理變數的值。
    }
  }
};
</script>

<style scoped>
#customHeader {
  position: fixed;
  background-color: white;
  color: rgb(0, 0, 0, 0.7);
  top: 0px;
  height: 60px;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(218, 227, 234);
}

#guideAndLogo {
  display: flex;
  align-items: center;
}

.HeaderOnTopStyle {
  position: fixed;
  display: flex;
  align-items: center;
  color: rgb(0, 0, 0, 0.7);
  top: 0px;
  height: 60px;
  width: "100%";
  z-index: "1";
}

.header {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0px;
  /* background-color: white; */
  height: 60px;
  width: 100%;
}

.logoStruc {
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  width: 300px;
}

#headerText {
  font-weight: bolder;
  font-size: 30px;
  margin: 10px;
}

#headerIcon {
  margin-left: 10px;
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin: 20px;
  cursor: pointer;
}
</style>
