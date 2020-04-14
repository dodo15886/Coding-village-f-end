<template>
  <div class="memberPageStruc">
    <div class="blank"></div>
    <div class="header">成員介紹</div>
    <div class="member">
      <div class="photoStruc">
        <img class="photo" src="@/assets/Michael.jpg">
      </div>
      <div class="content">
        <p class="name">周永霖 Michael</p>
        <div class="divider"></div>
        <p>創辦人、講師、工程師</p>
        <p>中山資工系，上海復旦交換半年</p>
        <p>豐富的五年家教經驗</p>
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
        <p>創辦人、行銷長</p>
        <p>中山外文系</p>
        <p>Pinkoi獨立設計師、豐富家教經驗</p>
        <p class="qoute">「任何一顆平凡的石頭，只要有著一處銳利的角，它就是一把刀。」</p>
      </div>
    </div>
    <div class="member">
      <div class="photoStruc">
        <img class="photo" src="@/assets/chien.jpg">
      </div>
      <div class="content">
        <p class="name">陳建宏 Chien</p>
        <div class="divider"></div>
        <p>創辦人、工程師</p>
        <p>中山電機系</p>
        <p>德國達姆斯達特大學交換半年</p>
        <p class="qoute">「噴泉的高度不會超過它的源頭;一個人的成就不會超過他的信念。」</p>
      </div>
    </div>
    <div class="member">
      <div class="photoStruc">
        <img class="photo" src="@/assets/Mandy.jpg">
      </div>
      <div class="content">
        <p class="name">邱于瑄 Mandy</p>
        <div class="divider"></div>
        <p>社群媒體管理員</p>
        <p>政大新聞系</p>
        <p>板中1%、遠見實習生、新傳獎得主、板中鄧紫棋</p>
        <p class="qoute">「Change your thought, and change your world.」</p>
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

.blank {
  height: 60px;
  width: 100%;
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
  height: 145px;
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
