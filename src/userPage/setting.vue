<template>
  <div id="setting">
    <profile></profile>

    <div class="accountManageStruc">
      <div id="accountLoginTitle">登入方式</div>
      <div class="loginAccountStruc">
        <img src="@/assets/village.png" width="100" height="100"/>
        <div class="accountType">Coding Village 帳號</div>
        <Button class="connectAccount" type="success" ghost disabled>建立並連結帳號</Button>
      </div>
      <Divider dashed/>
      <div class="loginAccountStruc">
        <img src="@/assets/google.png" width="100" height="100"/>
        <div class="accountType">連結 Google 帳號</div>
        <Button class="connectAccount" type="success" ghost disabled>建立並連結帳號</Button>
      </div>
      <Divider dashed/>
      <div class="loginAccountStruc">
        <img src="@/assets/facebook.png" width="100" height="100"/>
        <div class="accountType">連結 Facebook 帳號</div>
        <Button class="connectAccount" type="success" ghost disabled>建立並連結帳號</Button>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/components/profile.vue";

export default {
  name: "setting",

  data() {
    return {};
  },

  components: {
    profile
  }
};
</script>

<style scoped>
#setting {
  display: flex;
  align-items: center;
}

.accountManageStruc {
  margin: 50px;
  margin-left: 0px;
  border: 1px solid rgb(218, 227, 234);
  width: 800px;
  padding: 20px;
}

#accountLoginTitle {
  font-size: 20px;
  margin-bottom: 20px;
}

.loginAccountStruc {
  display: flex;
  align-items: center;
  position: relative;
}

.accountType {
  font-size: 18px;
  margin-left: 20px;
}

.connectAccount {
  position: absolute;
  right: 20px;
}
</style>
