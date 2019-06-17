<template>
  <div>
    <div class="header">Python村：熟悉程式語言</div>
    <div class="subHeader">適合對象：12歲以上，想嘗試寫寫看程式者。</div>
    <div class="content">
      <p>內容內容內容內容內容內容內容內容內容內容內容內容內容</p>
      <p>內容內容內容內容內容內容內容內容內容內容內容內容內容</p>
      <p>內容內容內容內容內容內容內容內容內容內容內容內容內容</p>
      <p>內容內容內容內容內容內容內容內容內容內容內容內容內容</p>
    </div>
    <div class="photoStruc">
      <img src="@/assets/python1.jpg" width="250px" height="150px" style="margin:10px">
      <img src="@/assets/python2.jpg" width="250px" height="150px" style="margin:10px">
    </div>
    <div class="btnStruc">
      <Button class="btn" @click="toConsult" type="primary" size="large">免費諮詢</Button>
      <Button class="btn" to="https://www.iviewui.com/" target="_blank" type="primary" size="large">立即報名</Button>
    </div>
  </div>
</template>

<script scoped>
export default {
  methods: {
    toConsult() {
      this.$router.push({
        name: "consult"
      });
    },

    // toSignUp() {
    //   this.$router.push({
    //     name: "signUp"
    //   });
    // }
  },
  mounted() {}
};
</script>

<style scoped>
.header {
  font-size: 30px;
  margin-left: 20px;
  margin-top: 20px;
}

.subHeader {
  font-size: 12px;
  margin-left: 20px;
}

.content {
  font-size: 18px;
  margin: 20px;
}

.btnStruc {
  display: flex;
}

.btn {
  margin: 10px;
}
</style>
