<template>
  <div class="consultQAstruc">
    <div class="consultStruc">
      <div class="consultHeader">課程諮詢</div>
      <div class="consultContent"></div>
      <Button class="btn" type="primary">送出</Button>
    </div>

    <div class="QAStruc">
      <div class="QAHeader">常見問題</div>
      <div class="QAContent"></div>
      <Button class="btn" type="primary">報名</Button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

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
}

.consultContent{
    width: 200px;
    height: 500px;
    border:1px solid red;
}

.QAStruc {
    position: relative;    
    display: flex;
    flex-direction: column;
}

.QAHeader {
    font-size: 30px;
}

.QAContent{
    width: 200px;
    height: 500px;
    border:1px solid red;
}

.btn {
    position: absolute;
    width: 80px;
    height: 40px;
    right: 10px;
    bottom: 10px;
}
</style>
