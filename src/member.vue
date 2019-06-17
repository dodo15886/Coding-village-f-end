<template>
  <div>
    <div class="header">成員介紹</div>
    <div class="member">
      <div class="photoStruc">
        <img src="@/assets/Michael.jpg" width="250px" height="180px" style="margin:10px">
      </div>
      <div class="content">
        <p>周永霖（創辦人、講師、工程師）</p>
        <p>學歷：大中山資工系 學士畢</p>
        <p>經歷：家教王、復旦交換</p>
        <p>興趣：調酒、煎牛排</p>
      </div>
    </div>
    <div class="member">
      <div class="photoStruc">
        <img src="@/assets/kevin.jpg" width="200px" height="180px" style="margin:10px">
      </div>
      <div class="content">
        <p>邱柏皓（創辦人、行銷王）</p>
        <p>學歷：大中山外文系 學士畢</p>
        <p>經歷：pinkoi王、手下敗將、免役拉g</p>
        <p>興趣：拍照</p>
      </div>
    </div>
    <div class="member">
      <div class="photoStruc">
        <img src="@/assets/chien.jpg" width="200px" height="250px" style="margin:10px">
      </div>
      <div class="content">
        <p>陳建宏（好麻吉）</p>
        <p>學歷：大中山電機系 學士畢</p>
        <p>經歷：德國交換</p>
        <p>興趣：喝我的調酒、煎鹹豬肉</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  font-size: 30px;
  margin-left: 20px;
  margin-top: 20px;
}

.member {
  display: flex;
  margin: 20px;
}

.content {
  font-size: 20px;
  margin: 35px;
}

.photoStruc {
    display: flex;
    flex-direction: column;
}


</style>
