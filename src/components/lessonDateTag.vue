<template>
    <div id="lessonDateTag">
        <div class="month">{{month}}</div>
        <div class="day">{{day}}</div>            
    </div> 
</template>

<script>
export default {
    name: "lessonDateTag",
    props: ["month", "day"]
}
</script>

<style scoped>

#lessonDateTag {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(70, 84, 250);
    border-radius: 5px;
    height: 40px;
    width: 40px;
}

.month {
    font-size: 15px;
    color: white;
}

.day {
    font-size: 1px;
    color: white;
    font-weight: bolder;
}
</style>
