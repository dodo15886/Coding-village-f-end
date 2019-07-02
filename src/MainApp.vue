<template>
  <div class="mainApp">

    <div style="height: 60px;"></div>
    
    <customHeader @changePage="parentChangePage"></customHeader>

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

import customHeader from "@/components/customHeader.vue";

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
        // "background-color": 'rgb(256,256,256)',
        // "border-bottom": '1px solid black',
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
    parentChangePage(toWhatPage) {
      console.log(toWhatPage);
      this.$router.push({
        name: toWhatPage
      });
    }
  },

  components: {
    customHeader
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
