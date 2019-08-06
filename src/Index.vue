<template>
  <div id="index">
    <div class="guidePage">
      <img src="@/assets/cover.jpg" width="100%">
      <div id="introName">Coding Village</div>
      <div id="introQuote">用邏輯漫步在程式的世界裡</div>
      <div class="guideBtnStruc">
        <Button
          @click="changeState(pythonPosition)"
          type="default"
          size="large"
          icon="ios-arrow-down"
        >程式新手</Button>
        <Button
          @click="changeState(webPosition)"
          type="default"
          size="large"
          icon="ios-arrow-down"
        >曾經寫過點程式</Button>
        <Button
          @click="changeState(cPlusPlusPosition+5)"
          type="default"
          size="large"
          icon="ios-arrow-down"
        >程式大師</Button>
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

    <div class="whyCodingIntroStruc">
      <div class="whyCodingIntroTitle">
        不當工程師，也要會寫程式嗎？
      </div>
      <div class="whyCodingIntro">
        <p>程式是一種幫您解決問題的工具</p>
        <p>CodingVillage是透過程式培養解決問題的能力</p>
        <p>我們反對填鴨式的高速教學</p>
        <p>也不偏重證照考取等功利導向</p>
        <p>而是如同108課綱的核心理念</p>
        <p>培養關鍵核心素養</p>
      </div>
    </div>

    <div class="lessonHeader">
      <div class="blank"></div>
      <div id="lessonHeaderText">常態課程</div>
      <div class="blank"></div>
    </div>

    <div style="display: flex;">
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
        <div id="python" class="content">
          <img id="warriorIcon" src="@/assets/warrior1.png" width="200px" height="200px">
          <div class="warriorContent">
            <p>新手村 Python：熟悉程式語言</p>
            <p>適合對象：12歲以上，想嘗試寫寫看程式者。</p>
            <Button
              type="success"
              class="interestBtn"
              @click="showDetail('python')"
              size="large"
            >了解更多</Button>
          </div>
        </div>

        <div id="web" class="content">
          <img id="warriorIcon" src="@/assets/warrior3.png" width="200px" height="200px">
          <div class="warriorContent">
            <p>菜鳥村 Web：做出一個屬於自己的網頁</p>
            <p>適合對象：12歲以上，想嘗試自己動手寫一個網站的人。</p>
            <Button class="interestBtn" @click="showDetail('web')" size="large" disabled>即將推出</Button>
          </div>
        </div>

        <div id="app" class="content">
          <img id="warriorIcon" src="@/assets/warrior4.png" width="200px" height="200px">
          <div class="warriorContent">
            <p>賺錢村 App：寫APP發大財</p>
            <p>適合對象：12歲以上，想嘗試自己動手寫一個APP的人。</p>
            <Button class="interestBtn" @click="showDetail('app')" size="large" disabled>即將推出</Button>
          </div>
        </div>

        <div id="cPlusPlus" class="content">
          <img id="warriorIcon" src="@/assets/warrior2.png" width="200px" height="200px">
          <div class="warriorContent">
            <p>高手村 C++：成為頂尖高手必備絕技</p>
            <p>適合對象：15歲以上，將來想往理工科系發展者。</p>
            <Button class="interestBtn" @click="showDetail('cPlusPlus')" size="large" disabled>即將推出</Button>
          </div>
        </div>

        <div id="apcs" class="content">
          <img id="warriorIcon" src="@/assets/warrior5.png" width="200px" height="200px">
          <div class="warriorContent">
            <p>魔王 APCS村：資工系在等著你</p>
            <p>適合對象：15歲以上，對一個以上程式語言精熟者。</p>
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
      stateList: ["Python", "C++", "Web", "App", "演算法"]
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

.whyCodingIntroStruc {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
}

.whyCodingIntroTitle {
  border-bottom: 2px solid rgb(218, 227, 234);
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bolder;
}

.whyCodingIntro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.whyCodingIntro > p {
  margin:10px;
  font-size: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10vw; */
  width: 250px;
  height: 400px;
}

.contentStruc {
  position: relative;
  height: 600px;
  border: 1px solid red;
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
  justify-content: space-between;
  border: 3px solid rgb(218, 227, 234);
  position: relative;
  height: 400px;
  width: 70vw;
  margin-bottom: 50px;
}

#warriorIcon {
  margin: 80px;
}

.warriorContent {
  position: relative;
  margin-top: 80px;
  margin-right: 80px;
  font-size: 20px;
  font-weight: bold;
}

.interestBtn {
  position: absolute;
  right: 5vw;
  bottom: 15vh;
}

.lessonHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 8vw;
  margin: 5vw auto;
}

.blank {
  height: 1px;
  width: 40vw;
  border: 2px solid rgb(218, 227, 234);
}

#lessonHeaderText {
  width: 11vw;
  font-size: 2.5vw;
  margin: 30px;
  text-align: center;
  font-weight: bold;
}
</style>
