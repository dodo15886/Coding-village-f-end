<template>
  <div class="mainApp">
    <Affix :offset-top="0">
      <div class="header">
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
          <div id="headerText" >Coding Village</div>
        </div>
      </div>
      <div id="divider"></div>
    </Affix>
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
  display: flex;
  align-items: center;
  background-color: white;
  height: 60px;
}

.logoStruc {
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}

#headerText {
  font-weight: bolder;
  font-size: 25px;
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
  justify-content:flex-end;
  width: 100%;
}

#blank {
  height: 50px;
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
  bottom: 20px;
  right: 20px;
}
</style>
