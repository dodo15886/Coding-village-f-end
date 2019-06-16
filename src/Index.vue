<template>
  <div id="index">
    <div class="guidePage">
      <div class="guideBtnStruc">
        <Button @click="changeState(560)" type="primary" size="large">新手</Button>
        <Button @click="changeState(1560)" type="primary" size="large">有點經驗</Button>
        <Button  @click="changeState(3060)" type="primary" size="large">Coding大師</Button>
      </div>
      <div class="people">
        <img id="peopleIcon" src="@/assets/people.png" width="180px" height="210px">
        <div style="font-size:20px">你是...</div>
      </div>
    </div>

    <div class="contentStruc">
      <div class="contentStep">
        <Affix :offset-top="100">
          <Steps :current="curState" direction="vertical">
            <Step title="Python村" content="完全沒學過程式"></Step>
            <Step title="C++村" content="適合之後想走理工系"></Step>
            <Step title="Web村" content="想用程式寫點應用"></Step>
            <Step title="App村" content="想用程式寫點應用"></Step>
            <Step title="演算法村" content="半腳踏入資工系了"></Step>
          </Steps>
        </Affix>
      </div>

      <div class="contentHead">
        <div class="divider"></div>
        <div class="contentHeadText">{{stateList[0]}}</div>
      </div>

      <div class="content">
        <img id="warriorIcon" src="@/assets/warrior.png" width="250px" height="250px">
        <div class="warriorContent">
          <p>角色：初級邏輯勇者</p>
          <p>適合對象：12歲以上，想嘗試寫寫看程式者。</p>
          <p>訓練內容：python程式語言</p>
        </div>
        <Button class="interestBtn" @click="showDetail('python')" type="primary" size="large">我有興趣！</Button>
      </div>
    </div>

    <div class="contentStruc">
      <div class="contentHead">
        <div class="divider"></div>
        <div class="contentHeadText">{{stateList[1]}}</div>
      </div>

      <div class="content">
        <img id="warriorIcon" src="@/assets/warrior.png" width="250px" height="250px">
        <div class="warriorContent">
          <p>角色：次級邏輯勇者</p>
          <p>適合對象：15歲以上，將來想往理工科系發展者。</p>
          <p>訓練內容：C++程式語言</p>
        </div>
        <Button class="interestBtn" @click="showDetail('cPlusPlus')" type="primary" size="large">我有興趣！</Button>
      </div>
    </div>

    <div class="contentStruc">
      <div class="contentHead">
        <div class="divider"></div>
        <div class="contentHeadText">{{stateList[2]}}</div>
      </div>

      <div class="content">
        <img id="warriorIcon" src="@/assets/warrior.png" width="250px" height="250px">
        <div class="warriorContent">
          <p>角色：應用邏輯勇者</p>
          <p>適合對象：12歲以上，想嘗試應用程式者。</p>
          <p>訓練內容：html + css + javascript</p>
        </div>
        <Button class="interestBtn" @click="showDetail('web')" type="primary" size="large">我有興趣！</Button>
      </div>
    </div>

    <div class="contentStruc">
      <div class="contentHead">
        <div class="divider"></div>
        <div class="contentHeadText">{{stateList[3]}}</div>
      </div>

      <div class="content">
        <img id="warriorIcon" src="@/assets/warrior.png" width="250px" height="250px">
        <div class="warriorContent">
          <p>角色：應用邏輯勇者</p>
          <p>適合對象：12歲以上，想嘗試應用程式者。</p>
          <p>訓練內容：JAVA + XML</p>
        </div>
        <Button class="interestBtn" @click="showDetail('app')" type="primary" size="large">我有興趣！</Button>
      </div>
    </div>

    <div class="contentStruc">
      <div class="contentHead">
        <div class="divider"></div>
        <div class="contentHeadText">{{stateList[4]}}</div>
      </div>

      <div class="content">
        <img id="warriorIcon" src="@/assets/warrior.png" width="250px" height="250px">
        <div class="warriorContent">
          <p>角色：邏輯超勇者</p>
          <p>適合對象：15歲以上，對一個以上程式語言精熟者。</p>
          <p>訓練內容：資料結構 + 演算法</p>
        </div>
        <Button class="interestBtn" @click="showDetail('algo')" type="primary" size="large">我有興趣！</Button>
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
      stateList: ["Python村", "C++村", "Web村", "App村", "演算法村"]
    };
  },

  mounted() {
    let vm = this;
    window.addEventListener('scroll',function(){
      let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      //要做兼容，在模拟器能正常获取scrolltop在微信h5页面和手机的浏览器页面一直为0
      if (top < 1060) {
        vm.curState = 0;
      } else if (top < 1560) {
        vm.curState = 1;
      } else if (top < 2060) {
        vm.curState = 2;
      } else if (top < 2560) {
        vm.curState = 3;
      } else if (top < 3060) {
        vm.curState = 4;
      }
    })
  },
  methods: {
    showDetail(state) {
      this.$router.push({
        name: state
      });
    },

    changeState(state) {
      window.document.documentElement.scrollTop = state;
    }
  
  }
};
</script>

<style>
.header {
  /* border: 1px solid red; */
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
  height: 500px;
  background-color: rgb(218, 227, 234);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
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
  /* border: 1px solid red; */
}

#peopleIcon {
  margin-top: 100px;
}

.contentStruc {
  /* display: flex; */
  position: relative;
  /* border: 1px solid red; */
  height: 500px;
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
  position: relative;
  left: 250px;
  top: 100px;
  height: 400px;
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
