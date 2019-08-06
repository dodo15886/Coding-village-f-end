<template>
  <div id="MainPage">
    <div class="title">請問要寫哪個課程的作業？</div>
    <div class="language" @click="chooseLanguage('python')">
      <div class="languageName">
        <img src="@/assets/pythonIcon.png" width="50" height="50">
        <div style="margin-left:20px">PYTHON</div>
      </div>
      <Select v-model="PYquestion" style="width:200px" filterable clearable :disabled="pyChoosed">
        <Option v-for="item in pythonQuesList" :value="item.num" :key="item.num">{{ item.title }}</Option>
      </Select>
    </div>
    <div class="language" @click="chooseLanguage('c++')">
      <div class="languageName">
        <img src="@/assets/c++Icon.png" width="50" height="50">
        <div style="margin-left:20px">C++</div>
      </div>
      <Select v-model="Cquestion" style="width:200px" filterable clearable :disabled="cChoosed">
        <Option v-for="item in cPlusPlusQuesList" :value="item.num" :key="item.num">{{ item.title }}</Option>
      </Select>
    </div>
    <div class="language" @click="chooseLanguage('APCS')">
      <div class="languageName">
        <img src="@/assets/APCSicon.png" width="50" height="50">
        <div style="margin-left:20px">APCS</div>
      </div>
      <Select
        v-model="APCSquestion"
        style="width:200px"
        filterable
        clearable
        :disabled="apcsChoosed"
      >
        <Option v-for="item in APCSquesList" :value="item.num" :key="item.num">{{ item.title }}</Option>
      </Select>
    </div>
    <Button type="success" id="sendBtn" @click="toHWsystem">送出</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PYquestion: "",
      Cquestion: "",
      APCSquestion: "",

      pyChoosed: false,
      cChoosed: true,
      apcsChoosed: true,

      pythonQuesList: [
        {
          num: 2017102902,
          title: "交錯字串 (Alternating Strings)"
        },
        {
          num: 2017102901,
          title: "邏輯運算子 (Logic Operators)"
        },
        {
          num: 2017102903,
          title: "樹狀圖分析 (Tree Analyses)"
        },
        {
          num: 2017102904,
          title: "物品堆疊(Stacking)"
        }
      ],
      cPlusPlusQuesList: [
        {
          num: 2017102902,
          title: "金字塔"
        }
      ],
      APCSquesList: [
        {
          num: 2017102902,
          title: "交錯字串 (Alternating Strings)"
        },
        {
          num: 2017102901,
          title: "邏輯運算子 (Logic Operators)"
        },
        {
          num: 2017102903,
          title: "樹狀圖分析 (Tree Analyses)"
        },
        {
          num: 2017102904,
          title: "物品堆疊(Stacking)"
        }
      ]
    };
  },

  methods: {
    toHWsystem() {
      let lang = "",
        ques = "";
      if (!this.pyChoosed) {
        lang = "python";
        ques = this.PYquestion;
      } else if (!this.cChoosed) {
        lang = "c++";
        ques = this.Cquestion;
      } else if (!this.apcsChoosed) {
        lang = "APCS";
        ques = this.apcsChoosed;
      }
      console.log(lang, ques)
      this.$router.push({
        name: "HWsubmit",
        params: {
          id: {
            lang,
            ques
          }
        }
      });
    },

    chooseLanguage(language) {
      if (language == "python") {
        this.pyChoosed = false;
        this.cChoosed = true;
        this.apcsChoosed = true;
        this.PYquestion = "";
        this.Cquestion = "";
        this.APCSquestion = "";
      } else if (language == "c++") {
        this.pyChoosed = true;
        this.cChoosed = false;
        this.apcsChoosed = true;
        this.PYquestion = "";
        this.Cquestion = "";
        this.APCSquestion = "";
      } else if (language == "APCS") {
        this.pyChoosed = true;
        this.cChoosed = true;
        this.apcsChoosed = false;
        this.PYquestion = "";
        this.Cquestion = "";
        this.APCSquestion = "";
      }
    }
  }
};
</script>

<style scoped>
#MainPage {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 400px;
}
.title {
  font-size: 30px;
}
.language {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
}

.languageName {
  display: flex;
  align-items: center;
  font-size: 30px;
  margin-right: 50px;
  width: 200px;
  height: 60px;
  /* border:1px solid #e8eaec; */
}

.language:hover {
  background-color: #e8eaec;
}

#sendBtn {
  width: 150px;
}
</style>
