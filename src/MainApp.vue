<template>
  <div class="mainApp">
    <div :style="[MainAppTop ? HeaderOnOthersStyle:HeaderOnTopStyle]">
      <Dropdown @on-click="changePage">
        <div id="headerIcon">
          <Icon type="md-menu" size="30"/>
        </div>
        <DropdownMenu slot="list">
          <Dropdown placement="right-start">
            <DropdownItem name="member">
              關於我們
              <Icon type="ios-arrow-forward"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
              <DropdownItem disabled>創作理念</DropdownItem>
              <DropdownItem name="member">成員介紹</DropdownItem>
              <DropdownItem disabled>合作計畫</DropdownItem>
              <DropdownItem name="consult">常見問題</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown placement="right-start">
            <DropdownItem name="index">
              課程介紹
              <Icon type="ios-arrow-forward"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
              <DropdownItem name="python">Python</DropdownItem>
              <DropdownItem name="cPlusPlus">C++</DropdownItem>
              <DropdownItem name="web" disabled>Web</DropdownItem>
              <DropdownItem name="app" disabled>App</DropdownItem>
              <DropdownItem name="apcs" disabled>APCS</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <DropdownItem name="consult">免費諮詢</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div class="logoStruc" @click="changePage('index')">
        <img src="@/assets/village.png" width="40px" height="40px">
        <div id="headerText">Coding Village</div>
      </div>
    </div>
    <router-view></router-view>
    <div class="footerStruc">
      <div id="blank"></div>
      <footer class="footer">
        <div id="copyrightText">Coding Village © All Rights Reserved.</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainApp",

  data() {
    return {

      MainAppTop: 0,

      HeaderOnTopStyle: {
        position: 'fixed',
        display: 'flex',
        "align-items": 'center',
        color: 'rgb(0,0,0,0.7)',
        top: '0px',
        height: '60px',
        width: '100%',
        "z-index": '1'
      },

      HeaderOnOthersStyle: {
        "position": 'fixed',
        display: 'flex',
        "align-items": 'center',
        top: '0px',
        color: 'white',
        "background-color": 'rgb(0,0,0,0.7)',
        height: '60px',
        width: '100%',
        "z-index": '1'

      },
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
    changePage(toWhatPage) {
      this.$router.push({
        name: toWhatPage
      });
    }
  }
};
</script>

<style scoped>
.mainApp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
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

#divider {
  background-color: rgb(218, 227, 234);
  height: 5px;
}

.footerStruc {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
}

#blank {
  height: 100px;
  width: 100%;
  background-color: white;
}

.footer {
  background-color: rgb(218, 227, 234);
  position: relative;
  height: 50px;
  width: 100%;
}

#copyrightText {
  position: absolute;
  bottom: 15px;
  right: 20px;
}
</style>
