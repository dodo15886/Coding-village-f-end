<template>
  <div>
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
              <DropdownItem name="web">Web</DropdownItem>
              <DropdownItem name="app">App</DropdownItem>
              <DropdownItem name="apcs">APCS</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <DropdownItem name="consult">免費諮詢</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div id="headerText">Coding Village</div>
    </div>
    <div id="divider"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MainApp",
  methods: {
    changePage(toWhatPage) {
      this.$router.push({
        name: toWhatPage
      })
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 60px;
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
  height: 3px;
}

</style>
