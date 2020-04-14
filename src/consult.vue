<template>
  <div id="consult">
    <div class="blank"></div>
    <div class="consultQAstruc">
      <div class="consultStruc">
        <div class="consultHeader">課程諮詢</div>
        <div class="consultContent">
          <Card style="margin:10px">
            <p>客服電話：0955977689</p>
            <p>email：dodo15886@gmail.com</p>
          </Card>
          <Select v-model="selectedLesson" placeholder="課程選擇" style="width:200px; margin:15px;">
            <Option
              v-for="item in lessonList"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
          <Input class="ConsultInput" v-model="name" :value="name" placeholder="您的姓名"/>
          <Input class="ConsultInput" v-model="email" placeholder="您的信箱"/>
          <Input
            class="boardInput"
            v-model="question"
            type="textarea"
            :rows="8"
            placeholder="您的疑問"
          />
          <Button @click="adviceSubmit" class="btn" type="primary">送出</Button>
        </div>
      </div>

      <div class="QAStruc">
        <div class="QAHeader">常見問題</div>
        <div class="QAContentStruc">
          <div class="QAContent" style>
            <Card :bordered="false">
              <p slot="title">Q:我該如何知道自己的程式能力？</p>
              <p>A:Coding Village有一套簡單的評量測試，或你也可以透過試聽第一堂課前面10分鐘的內容來評估課程難度是否適合你。</p>
            </Card>
          </div>
          <div class="QAContent">
            <Card :bordered="false">
              <p slot="title">Q:直播上課是如何進行的呢？</p>
              <p>A:直播上課是以會員制的方式進行，學員可以立即地與授課講師進行互動，也可以在課堂結束後重新觀看影片進行複習。</p>
            </Card>
          </div>
          <div class="QAContent">
            <Card :bordered="false">
              <p slot="title">Q:直播上課是如何進行的呢？</p>
              <p>A:直播上課是以會員制的方式進行，學員可以立即地與授課講師進行互動，也可以在課堂結束後重新觀看影片進行複習。</p>
            </Card>
          </div>
        </div>
        <Button
          class="btn"
          type="primary"
          target="_blank"
          to="https://docs.google.com/forms/d/1uki5ilme7mPnoeiZ8s5JOyyPotnYkSAJ87sP6zA_ZaE/edit?usp=sharing"
        >報名</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "consult",

  data() {
    return {
      lessonList: [
        {
          value: "python",
          label: "Python"
        },
        {
          value: "c++",
          label: "C++"
        },
        {
          value: "web",
          label: "網頁"
        },
        {
          value: "app",
          label: "App"
        },
        {
          value: "algo",
          label: "演算法"
        }
      ],
      selectedLesson: "",
      name: "",
      email: "",
      question: "",
      localhostUrl: ""
    };
  },

  methods: {
    adviceSubmit() {
      if (
        this.name == "" ||
        this.email == "" ||
        this.selectedLesson == "" ||
        this.question == ""
      ) {
        this.$Message.error("你有東西沒填！");
      } else {
        let userAdvice = {
          name: this.name,
          email: this.email,
          lesson: this.selectedLesson,
          question: this.question
        };
        this.$Message.success("提交成功！謝謝您的建議，會盡快回覆您。");

        // axios
        // .post(this.localhostUrl + "/advice", userAdvice)
        // .then(({ data }) => {
        //   if (data) {
        //     // write in excel successfully
        //     this.name = "";
        //     this.email = "";
        //     this.selectedLesson = "";
        //     this.question = "";
        //     this.$Message.success("提交成功！謝謝您的建議，會盡快回覆您。");
        //   } else {
        //     this.$Message.error("輸入失敗，伺服器有問題，請稍後再試！");
        //   }
        // })
        // .catch(err => {
        //   console.log(err);
        //   this.$Message.error("輸入失敗，伺服器有問題，請稍後再試！");
        // });
      }
    }
  },

  created() {
    this.localhostUrl = this.$store.state.localhostUrl;
  }
};
</script>

<style scoped>
.blank {
  height: 60px;
  width: 100%;
}

.consultQAstruc {
  display: flex;
  justify-content: space-around;
}

.consultStruc {
  position: relative;
  display: flex;
  flex-direction: column;
}

.consultHeader {
  font-size: 30px;
  margin: 20px;
}

.consultContent {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 600px;
  /* border: 1px solid red; */
}

.ConsultInput {
  width: 150px;
  margin: 15px;
}

.boardInput {
  width: 400px;
  height: 400px;
  margin: 15px;
}

.QAStruc {
  position: relative;
  display: flex;
  flex-direction: column;
}

.QAHeader {
  font-size: 30px;
  margin: 20px;
}

.QAContentStruc {
  width: 400px;
  height: 700px;
  /* border: 1px solid red; */
}
.QAContent {
  background: #eee;
  padding: 20px;
  margin: 10px;
}

.btn {
  position: absolute;
  width: 50%;
  height: 40px;
  right: 10px;
  bottom: 10px;
  font-size: 15px;
  font-weight: bolder;
}
</style>
