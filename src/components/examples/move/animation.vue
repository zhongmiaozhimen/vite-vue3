<script setup>
import { ref } from 'vue'

let animationName = ''
const animation = ref('')

let oldTranslateX = 0
let oldTranslateY = 0
let translateX = 0
let translateY = 0

function move(x = 0, y = 0) {
  const sheet = document.styleSheets[0]
  const cssRules = sheet.cssRules
  for (let i = 0; i < cssRules.length; i++) {
    if (cssRules[i].name === animationName) {
      sheet.deleteRule(i)
      break
    }
  }

  translateX += x
  translateY += y

  animationName = `move-${new Date().getTime()}`
  sheet.insertRule(
    `@keyframes ${animationName} {
      0% {
        translate: ${oldTranslateX}px ${oldTranslateY}px;
      }
      100% {
        translate: ${translateX}px ${translateY}px;
      }
    }`,
    0,
  )
  animation.value = `${animationName} 0.5s linear 0s 1 normal forwards running`

  oldTranslateX = translateX
  oldTranslateY = translateY
}

function back() {
  const sheet = document.styleSheets[0]
  const cssRules = sheet.cssRules
  for (let i = 0; i < cssRules.length; i++) {
    if (cssRules[i].name === animationName) {
      sheet.deleteRule(i)
      break
    }
  }

  translateX = 0
  translateY = 0

  animationName = `move-${new Date().getTime()}`
  sheet.insertRule(
    `@keyframes ${animationName} {
      0% {
        translate: ${oldTranslateX}px ${oldTranslateY}px;
      }
      100% {
        translate: ${translateX}px ${translateY}px;
      }
    }`,
    0,
  )
  animation.value = `${animationName} 0.5s linear 0s 1 normal forwards running`

  oldTranslateX = translateX
  oldTranslateY = translateY
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
      <div class="box"></div>
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
    animation: v-bind(animation);
  }
}
</style>
