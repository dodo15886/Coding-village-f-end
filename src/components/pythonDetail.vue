<template>
  <div>
    <div class="blank"></div>
    <div class="header">
      Python村 : 熟悉程式語言
      <div class="subHeader"> - 12歲以上，想嘗試寫寫看程式者。</div>
    </div>
    <div class="content">
      <p>歡迎來到Coding Village的第一站</p>
      <p>在入門者課程中，我們從最熱門也最好學習的Python開始</p>
      <p>練習基礎的程式語法跟基本規則</p>
      </br>
      <p>我們將會學到程式設計中幾種常見的運作公式</p>
      <p>還有這些公式的各種應用情境</p>
      <p>你將會發現，原來寫程式真的一點也不難！</p>
      </br>
      <p>建議7年級以上，或上過L0初學者課程的學員</p>
    </div>
    <div id="lessonDetailAndDate">
      <div class="lessonHeader">
        課程單元與開課時間
      </div>
      <div class="lessonDetail">
        <div class="detail">
          <DateTag day="17" month="Aug"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="24" month="Aug"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="31" month="Aug"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="07" month="Sep"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="21" month="Sep"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="28" month="Sep"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="19" month="Oct"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="26" month="Oct"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="02" month="Nov"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
        <div class="detail">
          <DateTag day="09" month="Nov"></DateTag>
          <div class="detailContent">先修單元A micro:bit基礎：燈號控制與動畫</div>
        </div>
      </div>
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

import DateTag from "@/components/lessonDateTag";

export default {
  methods: {
    toConsult() {
      this.$router.push({
        name: "consult"
      });
    },

  },
  mounted() {},

  components: {
    DateTag
  }
};
</script>

<style scoped>

.blank {
  height: 60px;
  width: 100%;
}

.header {
  font-size: 30px;
  margin-left: 20px;
  margin-top: 20px;
  font-weight: bolder;
  border: 5px solid rgb(218, 227, 234);
  padding: 10px;
  width: 380px;
}

.subHeader {
  font-size: 15px;
  font-weight: 500;
  margin-left: 20px;
}

.content {
  font-size: 15px;
  margin: 40px;
}

#lessonDetailAndDate {
  margin: 20px;
  /* width: 600px;
  height: 200px; */
}

.lessonHeader {
  font-size: 20px;
  font-weight: bolder;
  margin: 10px;
}

.lessonDetail {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 800px;
  max-height: 350px;
  padding:10px;
}

.detail {
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  border-bottom: 1px solid rgb(218, 227, 234);
  width: 330px;
  padding: 10px;
}

.detailContent {
  margin-left: 10px;
  font-weight: bold;
}

.btnStruc {
  display: flex;
}

.btn {
  margin: 10px;
}
</style>
