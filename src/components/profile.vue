<template>
  <div class="profileStruc">
    <div class="profile">
      <img class="photo" src="@/assets/chien.jpg">
      <div id="name">{{username}}</div>
    </div>
    <div class="detail">
      <div class="course">
        <div class="courseDetail">
          <div class="joinText">已參加</div>
          <div class="courseNumText">{{courserNum}}堂課</div>
        </div>
        <div class="courseDetail">
          <div class="joinText">已參加</div>
          <div class="courseNumText">{{campNum}}營隊</div>
        </div>
      </div>
      <Button
        @click="reviseAccount"
        style="margin-bottom: 10px"
        type="success"
        size="large"
        ghost
        long
      >修改個人檔案</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courserNum: 0,
      campNum: 0,
      username: "李嘉蕾"
    };
  },

  created() {
    this.username = this.$store.state.username;
  },

  methods: {
    reviseAccount() {
        this.$Message.warning("還不可以修改唷");
    }
  }
};
</script>

<style scoped>
.profileStruc {
  width: 250px;
  height: 400px;
  border: 1px solid rgb(218, 227, 234);
  margin: 80px;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #19be6b88;
  /* border: 1px solid red; */
}

.photo {
  width: 145px;
  height: 145px;
  margin: 20px;
  border-radius: 50%;
}

#name {
  color: white;
  font-size: 25px;
  margin: 10px;
  margin-top: 0px;
}

.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  /* border: 1px solid red; */
}

.course {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.courseDetail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  margin-bottom: 30px;
}

.joinText {
  font-size: 10px;
}

.courseNumText {
  font-size: 25px;
  font-weight: bolder;
}
</style>
