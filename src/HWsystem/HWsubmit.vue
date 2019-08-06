<template>
  <div id="HWsubmit">
    <div id="title">{{language}} 作業</div>
    <div class="question"></div>
    <div style="background:#eee;padding: 20px; width:800px">
      <Card :bordered="false">
        <p slot="title" style="font-size: 17px;">{{title}}</p>
        <p>{{question}}</p>
      </Card>
    </div>

    <div style="background:rgb(218, 227, 234); padding: 20px; width:800px; margin-top: 30px;">
      <Card :bordered="false" style="padding: 20px;">
        <p class="format">輸入格式：</p>
        <p class="formatContent">{{inputFormat}}</p>
        <p class="format">輸出格式：</p>
        <p class="formatContent">{{outputFormat}}</p>
        <div class="exampleStruc">
          <div v-for="item in example" :key="item.number" style="width:150px">
            <p class="format">範例{{item.number}}：</p>
            <p class="formatContent inOutPutTitle">輸入</p>
            <p
              class="formatContent"
              v-for="(inputItem, inputIndex) in item.input"
              :key="inputIndex"
            >{{inputItem}}</p>
            <p class="formatContent inOutPutTitle">正確輸出</p>
            <p
              class="formatContent"
              v-for="(outputItem, outputIndex) in item.output"
              :key="outputIndex"
            >{{outputItem}}</p>
          </div>
          <Poptip id="tip" title="小提示" :content="tip" word-wrap width="300" placement="top-end">
            <Button type="warning" @click="showTip">提示</Button>
          </Poptip>
        </div>
      </Card>
    </div>

    <Card class="showHWcard">{{HWcontent}}</Card>

    <div class="HWBtnStruc">
      <div class="uploadStruc">
        <Upload :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
          <Button icon="ios-cloud-upload-outline" type="primary">選擇檔案</Button>
        </Upload>
        <div v-if="file !== null" id="uploadName">{{file.name}}</div>
      </div>
      <Button
        @click="upload"
        type="primary"
        :disabled="file === null"
      >{{ loadingStatus ? '上傳中...' : '繳交作業' }}</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HWsubmit",

  data() {
    return {
      file: null,
      loadingStatus: false,
      language: "",
      tip:
        "根據定義，要找的答案是大寫片段與小寫片段交錯串接而成。本題有多種解法的思考方式，其中一種是從左往右掃描輸入字串，我們需要紀錄的狀態包含：目前是在小寫子字串中還是大寫子字串中，以及在目前大(小)寫子字串的第幾個位置。根據下一個字母的大小寫，我們需要更新狀態並且記錄以此位置為結尾的最長交替字串長度。另外一種思考是先掃描一遍字串，找出每一個連續大(小)寫片段的長度並將其記錄在一個陣列，然後針對這個陣列來找出答案。",
      title: "交錯字串 (Alternating Strings)",
      question:
        "一個字串如果全由大寫英文字母組成，我們稱為大寫字串；如果全由小寫字母組成則稱為小寫字串。字串的長度是它所包含字母的個數，在本題中，字串均由大小寫英文字母組成。假設 k 是一個自然數，一個字串被稱為「k-交錯字串｣，如果它是由長度為 k 的大寫字串與長度為 k 的小寫字串交錯串接組成。舉例來說，「StRiNg｣是一個 1-交錯字串，因為它是一個大寫一個小寫交替出現；而「heLLow｣是一個 2-交錯字串，因為它是兩個小寫接兩個大寫再接兩個小寫。但不管 k是多少，「aBBaaa｣、「BaBaBB｣、「aaaAAbbCCCC｣都不是 k-交錯字串。本題的目標是對於給定 k 值，在一個輸入字串找出最長一段連續子字串滿足 k-交錯字串的要求。例如 k=2 且輸入「aBBaaa｣，最長的 k-交錯字串是「BBaa｣，長度為 4。又如 k=1 且輸入「BaBaBB｣，最長的 k-交錯字串是「BaBaB｣，長度為 5。請注意，滿足條件的子字串可能只包含一段小寫或大寫字母而無替，如範例二。此外，也可能不存在滿足條件的子字串，如範例四。",
      inputFormat:
        "輸入的第一行是 k，第二行是輸入字串，字串長度至少為1，只由大小寫英文字母組成(A~Z, a~z)並且沒有空白。",
      outputFormat:
        "輸出輸入字串中滿足 k-交錯字串的要求的最長一段連續子字串的長度，以換行結尾。",
      HWcontent: "（上傳檔案預覽）",
      example: [
        {
          number: 1,
          input: ["1", "aBBdaaa"],
          output: ["2"]
        },
        {
          number: 2,
          input: ["2", "DDaasAAbbCC"],
          output: ["3"]
        },
        {
          number: 3,
          input: ["2", "aafAXbbCDCCC"],
          output: ["8"]
        },
        {
          number: 4,
          input: ["3", "DDaaAAbbCC"],
          output: ["0"]
        }
      ]
    };
  },

  methods: {
    showTip() {},

    handleUpload(file) {
      this.file = file;
      this.HWcontent = this.file.name;
      return false;
    },

    upload() {
      this.loadingStatus = true;
      setTimeout(() => {
        this.file = null;
        this.HWcontent = "（上傳檔案預覽）";
        this.loadingStatus = false;
        this.$Message.success("已上傳成功");
      }, 1500);
    }
  },

  created() {
    this.language = this.$route.params.id.lang;
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
#HWsubmit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#title {
  font-size: 30px;
  font-weight: bolder;
  margin: 20px;
}

.exampleStruc {
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: relative;
}

.format {
  font-size: 25px;
  font-weight: bolder;
}

.formatContent {
  margin: 10px;
}

.inOutPutTitle {
  font-size: 18px;
  font-weight: bolder;

  color: #17233d;
}

#tip {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.showHWcard {
  width: 800px;
  min-height: 300px;
  margin-top: 30px;
  text-align: center;
}

.HWBtnStruc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 800px;
}

.uploadStruc {
  display: flex;
  align-items: center;
}

#uploadName {
  margin-left: 20px;
}
</style>
