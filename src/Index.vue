<template>
  <div id="index">
    <div class="guidePage">
      <img src="@/assets/cover.jpg" width="100%">
      <div id="introName">Coding Village</div>
      <div id="introQuote">用邏輯漫步在程式的世界裡</div>
      <div class="guideBtnStruc">
        <Button @click="changeState(pythonPosition)" type="default" size="large" icon="ios-arrow-down">程式新手</Button>
        <Button @click="changeState(webPosition)" type="default" size="large" icon="ios-arrow-down">曾經寫過點程式</Button>
        <Button @click="changeState(cPlusPlusPosition+5)" type="default" size="large" icon="ios-arrow-down">程式大師</Button>
      </div>
    </div>

    <div class="introElementStruc">
      <div class="introElement">
        <img src="@/assets/teacher.png" class="introIcon">
        <div class="introText">專業講師，為你客製化專屬課程！</div>
      </div>
      <div class="divider"></div>
      <div class="introElement">
        <img src="@/assets/innovative.png" class="introIcon">
        <div class="introText">翻轉教育，打破傳統講授式課程的框架！</div>
      </div>
      <div class="divider"></div>
      <div class="introElement">
        <img src="@/assets/data.png" class="introIcon">
        <div class="introText">動手實作，絕非紙上談兵，做出有趣的作品！</div>
      </div>
    </div>

    <div style="display: flex; border-top: 3px solid rgb(218, 227, 234);">
      <div class="leftBlank">
        <Affix :offset-top="200">
          <Steps :current="curState" direction="vertical">
            <Step title="Python村" content="完全沒學過程式"></Step>
            <Step title="Web村" content="動手寫一個網站"></Step>
            <Step title="App村" content="動手寫一個APP"></Step>
            <Step title="C++村" content="適合之後想走理工系"></Step>
            <Step title="APCS村" content="半腳踏入資工系了"></Step>
          </Steps>
        </Affix>
      </div>

      <div class="rightClassStruc">
        <div id="python" class="contentStruc">
          <div class="contentHead">
            <div class="divider"></div>
            <div class="contentHeadText">Python村：熟悉程式語言</div>
          </div>

          <div class="content">
            <img id="warriorIcon" src="@/assets/warrior1.png" width="250px" height="250px">
            <div class="warriorContent">
              <p>角色：初級邏輯勇者</p>
              <p>適合對象：12歲以上，想嘗試寫寫看程式者。</p>
              <p>訓練內容：python程式語言</p>
              <Button class="interestBtn" @click="showDetail('python')" size="large">我有興趣！</Button>
            </div>
          </div>
        </div>

        <div id="web" class="contentStruc">
          <div class="contentHead">
            <div class="divider"></div>
            <div class="contentHeadText">Web村：做出一個屬於自己的網頁</div>
          </div>

          <div class="content">
            <img id="warriorIcon" src="@/assets/warrior3.png" width="250px" height="250px">
            <div class="warriorContent">
              <p>角色：應用邏輯勇者</p>
              <p>適合對象：12歲以上，想嘗試自己動手寫一個網站的人。</p>
              <p>訓練內容：html + css + javascript</p>
            </div>
            <Button class="interestBtn" @click="showDetail('web')" size="large" disabled>即將推出</Button>
          </div>
        </div>

        <div id="app" class="contentStruc">
          <div class="contentHead">
            <div class="divider"></div>
            <div class="contentHeadText">APP村：寫APP發大財</div>
          </div>

          <div class="content">
            <img id="warriorIcon" src="@/assets/warrior4.png" width="250px" height="250px">
            <div class="warriorContent">
              <p>角色：應用邏輯勇者</p>
              <p>適合對象：12歲以上，想嘗試自己動手寫一個APP的人。</p>
              <p>訓練內容：JAVA + XML</p>
            </div>
            <Button class="interestBtn" @click="showDetail('app')" size="large" disabled>即將推出</Button>
          </div>
        </div>

        <div id="cPlusPlus" class="contentStruc">
          <div class="contentHead">
            <div class="divider"></div>
            <div class="contentHeadText">C++村：成為頂尖高手必備絕技</div>
          </div>

          <div class="content">
            <img id="warriorIcon" src="@/assets/warrior2.png" width="250px" height="250px">
            <div class="warriorContent">
              <p>角色：次級邏輯勇者</p>
              <p>適合對象：15歲以上，將來想往理工科系發展者。</p>
              <p>訓練內容：C++程式語言</p>
            </div>
            <Button class="interestBtn" @click="showDetail('cPlusPlus')" size="large">我有興趣！</Button>
          </div>
        </div>

        <div id="apcs" class="contentStruc">
          <div class="contentHead">
            <div class="divider"></div>
            <div class="contentHeadText">APCS村：資工系在等著你</div>
          </div>

          <div class="content">
            <img id="warriorIcon" src="@/assets/warrior5.png" width="250px" height="250px">
            <div class="warriorContent">
              <p>角色：邏輯超勇者</p>
              <p>適合對象：15歲以上，對一個以上程式語言精熟者。</p>
              <p>訓練內容：APCS題庫 + 資料結構 + 演算法</p>
            </div>
            <Button class="interestBtn" @click="showDetail('apcs')" size="large" disabled>即將推出</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      curState: 0,
      pythonPosition: 0,
      webPosition: 0,
      appPosition: 0,
      cPlusPlusPosition: 0,
      apcsPosition: 0,
      stateList: ["Python村", "C++村", "Web村", "App村", "演算法村"]
    };
  },

  mounted() {
    let vm = this;
    const d = 60;
    this.pythonPosition = document.getElementById("python").offsetTop - d;
    this.webPosition = document.getElementById("web").offsetTop - d;
    this.appPosition = document.getElementById("app").offsetTop - d;
    this.cPlusPlusPosition = document.getElementById("cPlusPlus").offsetTop - d;
    this.apcsPosition = document.getElementById("apcs").offsetTop - d;

    window.addEventListener("scroll", function() {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;

      // console.log("top", top);
      // console.log("webPosition",vm.webPosition);

      //要做兼容，在模拟器能正常获取scrolltop在微信h5页面和手机的浏览器页面一直为0
      if (top < vm.webPosition) {
        vm.curState = 0;
      } else if (top < vm.appPosition) {
        vm.curState = 1;
      } else if (top < vm.cPlusPlusPosition) {
        vm.curState = 2;
      } else if (top < vm.apcsPosition) {
        vm.curState = 3;
      } else {
        vm.curState = 4;
      }
    });
  },
  methods: {
    showDetail(state) {
      this.$router.push({
        name: state
      });
    },

    changeState(state) {

      // BUG! 有時候滾下來的時候會對不到正確的位置！
      
      clearInterval(timer);
      var timer = setInterval(function() {
        window.scrollBy(0, 10); //每msec滚动speed的距离，可根据需求微调
      }, 1);
      window.onscroll = function() {
        var distance1 = window.pageYOffset;
        var y = distance1 - state;
        if (y >= -20 && y <= 20) {
          //设置停止定时器的区间
          clearInterval(timer);
        }
      };
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

.guidePage {
  position: relative;
  /* width: 100%; */
  height: 46vw;
  background-color: rgb(218, 227, 234);
  display: flex;
  flex-direction: column;
}

.introElementStruc {
  margin: 5vw auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  height: 8vw;
  border: 3px solid rgb(218, 227, 234);
  border-radius: 15px;
}

.introElementStruc .divider {
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
}

.introElement {
  display: flex;
  align-items: center;
}

.introText {
  margin-left: 20px;
  font-size: 18px;
  max-width: 180px;
}

.introIcon {
  width: 5vw;
  height: 5vw;
}

.rightClassStruc {
  display: flex;
  flex-direction: column;
}

#introName {
  font-size: 6vw;
  font-weight: bold;
  color: white;
  position: absolute;
  z-index: 0;
  top: 18vh;
  left: 14vw;
}

#introQuote {
  font-size: 3vw;
  font-weight: bolder;
  color: white;
  position: absolute;
  z-index: 0;
  bottom: 25vh;
  right: 15vw;
}

.guideBtnStruc {
  position: absolute;
  bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.leftBlank {
  margin-top: 10vw;
  margin-left: 20px;
  width: 250px;
}

.contentStruc {
  position: relative;
  height: 600px;
}

.contentHead {
  height: 100px;
  display: flex;
  align-items: center;
}

.divider {
  background-color: rgb(218, 227, 234);
  height: 100px;
  width: 3px;
}

.contentHeadText {
  font-size: 20px;
  margin-left: 20px;
}

.content {
  display: flex;
  justify-content: center;
  background-color: rgb(218, 227, 234);
  position: relative;
  height: 500px;
  width: 80vw;
}

#warriorIcon {
  margin: 80px;
}

.warriorContent {
  position: relative;
  margin-top: 80px;
  font-size: 20px;
  font-weight: bold;
}

.interestBtn {
  position: absolute;
  right: 5vw;
  bottom: 15vh;
}
</style>
