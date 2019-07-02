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

    <div class="loginStruc" style="margin-right:20px;">
      <Button type="text" style="margin:10px" @click="childChangePage('login')">登入</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "customHeader",

  data() {
    return {
      MainAppTop: 0,
      account: ""
    };
  },

  mounted() {
    let vm = this;
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
    childChangePage(toWhatPage) {
      this.$emit("changePage", toWhatPage);
    },
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
</style>
