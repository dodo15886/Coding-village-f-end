<template>
  <div id="lessonList">
    <profile></profile>
    <div class="lessonStruc">
      <div id="lessonStrucTitle">已參加的課程</div>
      <div v-for="(item, index) in joinedLesson" :key="index">
        <div class="joinedLessonListStruc">
          <img :src="item.lessonPic" width="250" height="180">
          <div class="lessonDetail">
            <div class="lessonTitle">
              <div class="lessonTitleName">{{item.lessonName}}</div>
              <div class="lessonTitleTime">{{item.lessonTime}}</div>
            </div>

            <div class="lessonStatus">
              <div>繳費狀況</div>
              <div v-if="item.isPay">: 已繳費</div>
              <div v-else>: 未繳費</div>
            </div>

            <div class="lessonStatus">
              <div>課程狀況</div>
              <div v-if="item.isGraduated">: 已結業</div>
              <div v-else>: 未結業</div>
            </div>

            <Button @click="toReviewLesson" class="reviewBtn" type="success">複習課程內容</Button>
          </div>
        </div>
        <Divider v-if="index < joinedLesson.length-1" dashed/>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/components/profile.vue";

export default {
  name: "lessonList",

  data() {
    return {
      joinedLesson: [
        {
          lessonName: "Python新手村",
          isPay: false,
          isGraduated: false,
          lessonTime: "2019/5/20-2019/5/31",
          lessonPic: require("../assets/python1.jpg")
        },
        {
          lessonName: "C++獵人村",
          isPay: false,
          isGraduated: false,
          lessonTime: "2019/5/20-2019/5/31",
          lessonPic: require("../assets/python1.jpg")
        },
        {
          lessonName: "Web新手村",
          isPay: false,
          isGraduated: false,
          lessonTime: "2019/5/20-2019/5/31",
          lessonPic: require("../assets/python1.jpg")
        }
      ]
    };
  },

  methods: {
    toReviewLesson() {
      this.$Message.success("複習課正在開發！");
    }
  },

  components: {
    profile
  }
};
</script>

<style scoped>
#lessonList {
  display: flex;
}

.lessonStruc {
  margin: 50px;
  margin-left: 0px;
  border: 1px solid rgb(218, 227, 234);
  width: 800px;
  padding: 20px;
}

#lessonStrucTitle {
  font-size: 20px;
  margin-bottom: 20px;
}

.joinedLessonListStruc {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px;
}

.lessonDetail {
  width: 350px;
  height: 180px;
  position: relative;
}

.lessonTitle {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* border: 1px solid red; */
}

.lessonTitleName {
  margin-left: 10px;
  font-size: 28px;
  font-weight: bolder;
}

.lessonTitleTime {
  margin-right: 10px;
  font-size: 12px;
  font-weight: bolder;
}

.lessonStatus {
  display: flex;
  font-size: 20px;
  margin: 10px;
}

.reviewBtn {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
