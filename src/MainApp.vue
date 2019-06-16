<template>
  <div>
    <div class="header">
      <Dropdown>
        <div id="headerIcon">
          <Icon type="md-menu" size="30"/>
        </div>
        <DropdownMenu slot="list">
          <Dropdown placement="right-start">
            <DropdownItem>
              關於我們
              <Icon type="ios-arrow-forward"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
              <DropdownItem>創作理念</DropdownItem>
              <DropdownItem>成員介紹</DropdownItem>
              <DropdownItem>合作計畫</DropdownItem>
              <DropdownItem>常見問題</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown placement="right-start">
            <DropdownItem>
              課程介紹
              <Icon type="ios-arrow-forward"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
              <DropdownItem>Python</DropdownItem>
              <DropdownItem>C++</DropdownItem>
              <DropdownItem>Web</DropdownItem>
              <DropdownItem>App</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <DropdownItem>免費諮詢</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div id="headerText">Coding Village</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MainApp",
};
</script>

<style>
</style>
