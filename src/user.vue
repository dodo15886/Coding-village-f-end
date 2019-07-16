<template>
  <div id="user">
    this is user page!
    <Button @click="logout">登出</Button>
    <Button @click="HWsystem">交作業</Button>
    <Button @click="lesson">課程</Button>
  </div>
</template>

<script>
export default {
  name: "user",

  methods: {
    logout() {
      localStorage.clear();
      //   location.reload();
      this.$router.push({
        name: "index"
      })
      this.$Message.success("登出了");
    },
    HWsystem() {
      this.$router.push({
        name: "HWsystem"
      })
      this.$Message.success("歡迎進到作業繳交系統");

    },
    lesson() {
      this.$Message.success("查看你有啥課程");
    }
  }
};
</script>

<style>
</style>
