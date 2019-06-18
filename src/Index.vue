<template>
  <div id="index">
    <div class="guidePage">
      <div class="guideBtnStruc">
        <Button @click="changeState(pythonPosition)" type="primary" size="large" >新手</Button>
        <Button @click="changeState(webPosition)" type="primary" size="large">有點經驗</Button>
        <Button @click="changeState(cPlusPlusPosition)" type="primary" size="large">Coding大師</Button>
      </div>
      <div class="people">
        <img id="peopleIcon" src="@/assets/lost.png" width="180px" height="210px">
        <div style="font-size:25px;margin-top:15px">你是...</div>
      </div>
    </div>

    <div id="python" class="contentStruc">
      <div class="contentStep">
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
        </div>
        <Button class="interestBtn" @click="showDetail('python')" size="large">我有興趣！</Button>
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
        <Button class="interestBtn" @click="showDetail('web')" size="large">我有興趣！</Button>
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
        <Button class="interestBtn" @click="showDetail('app')" size="large">我有興趣！</Button>
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
        <Button
          class="interestBtn"
          @click="showDetail('cPlusPlus')"
          size="large"
        >我有興趣！</Button>
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
        <Button class="interestBtn" @click="showDetail('apcs')" size="large">我有興趣！</Button>
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

      console.log("top", top);
      console.log("webPosition",vm.webPosition);

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
      clearInterval(timer);
      var timer = setInterval(function() {
        window.scrollBy(0, 20); //每msec滚动speed的距离，可根据需求微调
      }, 10);
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
  height: 600px;
  background-color: rgb(218, 227, 234);
  display: flex;
  flex-direction: column;
}

.guideBtnStruc {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
}

.people {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#peopleIcon {
  margin-top: 100px;
}

.contentStruc {
  position: relative;
  height: 600px;
}

.contentHead {
  position: absolute;
  left: 250px;
  height: 100px;
  display: flex;
  align-items: center;

  /* border: 1px solid red; */
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
  align-items: flex-start;
  background-color: rgb(218, 227, 234);
  /* border:1px solid red; */
  position: relative;
  left: 250px;
  top: 100px;
  height: 500px;
  width: 2000px;
}

#warriorIcon {
  margin: 80px;
}

.warriorContent {
  margin-top: 80px;
  font-size: 20px;
  font-weight: bold;
}

.contentStep {
  position: absolute;
  top: 30px;
  left: 30px;
}

.interestBtn {
  position: absolute;
  left: 500px;
  top: 300px;
}
</style>
