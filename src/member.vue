<template>
  <div class="memberPageStruc">
    <div class="header">成員介紹</div>
    <div class="member">
      <div class="photoStruc">
        <img class="photo" src="@/assets/Michael.jpg">
      </div>
      <div class="content">
        <p class="name">周永霖 Michael</p>
        <div class="divider"></div>
        <p>創辦人、講師、工程師</p>
        <p>中山資工系，曾在上海復旦交換半年</p>
        <p>豐富的四年家教經驗</p>
        <p class="qoute">「雖然夢想很大很多，但夢想不應該教會我們取捨，想要的很多，那就讓自己變得更強，然後通通做好。」</p>
      </div>
    </div>
    <div class="member">
      <div class="photoStruc">
        <img class="photo" src="@/assets/kevin.jpg">
      </div>
      <div class="content">
        <p class="name">邱柏皓 Kevin</p>
        <div class="divider"></div>
        <p>創辦人、行銷王</p>
        <p>中山外文系</p>
        <p>pinkoi王、手下敗將、免役拉g</p>
        <p class="qoute">「被淘汰後還被專訪告訴我們其實我們是第四名，就是輸在一點運氣，差點沒哭出來，不過我的履歷鐵定會出現16屆ATCCxIBM殿軍」</p>
      </div>
    </div>
    <div class="member">
      <div class="photoStruc">
        <img class="photo" src="@/assets/chien.jpg">
      </div>
      <div class="content">
        <p class="name">陳建宏 Chien</p>
        <div class="divider"></div>
        <p>創辦人、講師、工程師</p>
        <p>中山電機系，曾在德國交換半年</p>
        <p>大一六系烤肉總召</p>
        <p class="qoute">「明明分開沒幾天就吵著要來台北找我的呆」</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.memberPageStruc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  font-size: 30px;
  font-weight: bolder;
  margin-top: 25px;
}

.member {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  border: 3px solid gray;
  margin: 20px;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  /* border: 1px solid red; */
  width: 400px;
  height: 250px;
  margin: 35px;
}

.name {
  font-size: 20px;
  font-weight: bolder;
}

.qoute {
  font-size: 15px;
  font-weight: bold;
  margin: 10px;
}

.photoStruc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 190px;
  /* border: 1px solid red; */
}

.photo {
  width: 145px;
  height: 150px;
  margin: 10px;
  border-radius: 50%;
}

.photo:hover {
  width: 155px;
  height: 160px;
}

.divider {
  background-color: rgb(218, 227, 234);
  margin-top: 5px;
  margin-bottom: 5px;
  height: 3px;
  width: 200px;
}
</style>
