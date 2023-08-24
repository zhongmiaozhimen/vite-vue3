<script setup>
import { ref } from 'vue'

const translateX = ref(0)
const translateY = ref(0)

function move(x = 0, y = 0) {
  translateX.value += x
  translateY.value += y
}
function back() {
  translateX.value = 0
  translateY.value = 0
}
</script>

<template>
  <div>
    <button @click="back">回到起点</button>
    <button @click="move(200)">右移200</button>
    <button @click="move(-100)">左移100</button>
    <button @click="move(0, 200)">下移200</button>
    <button @click="move(0, -100)">上移100</button>

    <div class="box-wrap">
      <div
        class="box"
        :style="{ translate: `${translateX}px ${translateY}px` }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-wrap {
  margin: 20px 0;
  width: 600px;
  height: 500px;
  border: 1px solid #999;

  .box {
    width: 100px;
    height: 100px;
    background-color: aqua;
    transition: translate 0.5s linear;
  }
}
</style>
