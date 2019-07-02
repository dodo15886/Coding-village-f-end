<template>
  <div>
    <div class="blank"></div>

    <div class="header">
      <div class="headerLeftPart">
        <div class="headerName">
          Python村 : 熟悉程式語言
          <div class="subHeader">- 12歲以上，想嘗試寫寫看程式者。</div>
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
      </div>
      <div class="headerRightPart">
        <img src="@/assets/python1.jpg" width="450px" height="300px" style="margin-right:10vw">      
      </div>
    </div>

    <div id="lessonDetailAndDate">
      <div class="lessonHeader">課程單元與開課時間</div>
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

    <div id="lessonPlan">
      <div class="lessonHeader">課程方案與費用</div>
      <div class="lessonPlanContentStruc">
        <div class="lessonPlanContent">
          <div class="planHeader">
            入門者:Python入門（精實包）
            <div class="planPrice">
              NT.
              <div class="price">9500</div>
            </div>
          </div>
          <div class="planContent">
            <p>7/31起上課，共8週課程，每堂兩小時。</p>
            <p>新生提前兩週於7/17開課</p>
            <p>每週五19:00前電子郵件寄送學生上週學習狀況表</p>
            <p>上課地點一個區有所調整，報名時請確認報名班別</p>
          </div>
          <div class="planPriceDetail">
            <div class="text">
              <p>單期營隊救生優惠價 $8,000元</p>
              <p>新生早鳥優惠 $9,800元(7/31前)</p>
              </br>
              <p>兩期合購營隊舊生優惠 $14,500</p>
              <p>新生早鳥優惠 $17,500</p>
              <p>兩期課程原價 $25,000</p>
            </div>
            <Button
              class="btn"
              to="https://docs.google.com/forms/d/1uki5ilme7mPnoeiZ8s5JOyyPotnYkSAJ87sP6zA_ZaE/edit"
              target="_blank"
              type="primary"
              size="large"
            >立即報名</Button>
          </div>
        </div>
        <div class="lessonPlanContent">
          <div class="planHeader">
            入門者:Python入門（豪華包）
            <div class="planPrice">
              NT.
              <div class="price">$12,500</div>
            </div>
          </div>
          <div class="planContent">
            <p>7/31起上課，共8週課程，每堂兩小時。</p>
            <p>新生提前兩週於7/17開課</p>
            <p>每週五19:00前電子郵件寄送學生上週學習狀況表</p>
            <p>上課地點一個區有所調整，報名時請確認報名班別</p>
          </div>
          <div class="planPriceDetail">
            <div class="text">
              <p>課程結束後一年內可無限次數觀看</p>
              <p>新生早鳥優惠 $9,800元(7/31前)</p>
              </br>
              <p>兩期合購營隊舊生優惠 $7,800</p>
              <p>新生早鳥優惠 $10,500</p>
              <p>兩期課程原價 $12,500</p>
            </div>
            <Button
              class="btn"
              to="https://docs.google.com/forms/d/1uki5ilme7mPnoeiZ8s5JOyyPotnYkSAJ87sP6zA_ZaE/edit"
              target="_blank"
              type="primary"
              size="large"
            >立即報名</Button>
          </div>
        </div>
        <div class="lessonPlanContent">
          <div class="planHeader">
            入門者:Python入門（豪華包）
            <div class="planPrice">
              NT.
              <div class="price">$12,500</div>
            </div>
          </div>
          <div class="planContent">
            <p>7/31起上課，共8週課程，每堂兩小時。</p>
            <p>新生提前兩週於7/17開課</p>
            <p>每週五19:00前電子郵件寄送學生上週學習狀況表</p>
            <p>上課地點一個區有所調整，報名時請確認報名班別</p>
          </div>
          <div class="planPriceDetail">
            <div class="text">
              <p>課程結束後一年內可無限次數觀看</p>
              <p>新生早鳥優惠 $9,800元(7/31前)</p>
              </br>
              <p>兩期合購營隊舊生優惠 $7,800</p>
              <p>新生早鳥優惠 $10,500</p>
              <p>兩期課程原價 $12,500</p>
            </div>
            <Button
              class="btn"
              to="https://docs.google.com/forms/d/1uki5ilme7mPnoeiZ8s5JOyyPotnYkSAJ87sP6zA_ZaE/edit"
              target="_blank"
              type="primary"
              size="large"
            >立即報名</Button>
          </div>
        </div>
      </div>
    </div>

    <div id="beforeLesson">
      <div class="lessonHeader">課前準備</div>
      <div class="beforeLessonContent">
        <div class="text">
          <p>只要準備一部能透過Chrome瀏覽器連上網的電腦</p>
          <p>您不需要具備有其他程式語言的基礎，但須具備國中程度的基礎英文以及數學</p>        
          <p>放輕鬆，本課程就是希望在無負擔的狀態下，讓您快速建立程式語言的概念</p>
          <p>繳費方式：</p>
          <p>報名成功後，系統將發送電子郵件通知您繳費方式，您可透過多元繳費機制繳費。</p>
          <p>若有任何問題，歡迎透過IG搜尋 codingvillage 與我們聯絡 </p>
          <p>注意事項：</p>
          <p>已繳費因故無法參加課程者，線上班於第一堂課上限五日內提出申請，全額退費 ; 之後則不退費 ; 實體班依照補習班管理辦法辦理退費。</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import DateTag from "@/components/lessonDateTag";

export default {
  methods: {
    toConsult() {
      this.$router.push({
        name: "consult"
      });
    }
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
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.headerName {
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
  display: flex;
  justify-content: center;
  margin: 20px;
  position: relative;
}

.lessonHeader {
  position: absolute;
  left: 10vw;
  top: 1vw;
  font-size: 30px;
  font-weight: bolder;
  margin: 10px;
}

.lessonDetail {
  margin-top:100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 800px;
  max-height: 350px;
  padding: 10px;
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
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
}

#lessonPlan {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px;
}

.lessonPlanContentStruc {
  margin-top: 100px;
  display: flex;
}

.lessonPlanContent {
  border: 1px solid rgb(218, 227, 234);
  margin: 20px;
}

.planHeader {
  min-height: 100px;
  font-size: 15px;
  border-bottom: 1px solid rgb(218, 227, 234);
  padding: 10px;
  position: relative;
}

.planPrice {
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.price {
  color: orange;
  font-size: 30px;
  margin-left: 5px;
}

.planContent {
  font-size: 12px;
  border-bottom: 1px solid rgb(218, 227, 234);
  padding: 10px;
}

.planContent > p {
  margin: 10px;
}

.planPriceDetail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  background-color: rgb(165, 222, 216);
  padding: 10px;
}

.text {
  font-weight: bold;
  padding: 10px;
}

#beforeLesson {
  position: relative;
  margin: 20px;
}

.beforeLessonContent {
  display: flex;
  justify-content: center;
}

.beforeLessonContent > .text {
  border: 1px solid rgb(218, 227, 234);
  margin-top: 100px;
  font-size: 15px;
  padding: 20px;
}
.btn {
  margin: 20px;
}
</style>
