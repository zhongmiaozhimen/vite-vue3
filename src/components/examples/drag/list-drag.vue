<script setup>
import { ref } from 'vue'

const userSelect = ref('text')
const itemHeight = 50 // 每个元素的高度
const space = 10 // 元素之间的间隔
const list = ref([])

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
arr.forEach((item, index) => {
  list.value.push({
    id: `${new Date().getTime()}-${index}`,
    index,
    top: 10 + (itemHeight + space) * index,
    transition: '',
    zIndex: 0,
    constant: item,
  })
})

const total = list.value.length
// 容器的高度
const containerHeight = total * itemHeight + (total - 1) * space + 10 * 2

let mouseStartY = 0 // 鼠标初始的位置
let moveIndex = 0 // 记录拖动的元素索引值
let dragStartY = 0 // 拖动元素的初始位置

// 更新元素的位置
function updateDomPosition(item, clientY) {
  const mouseMoveY = clientY - mouseStartY //鼠标移动的距离
  let positionY = dragStartY + mouseMoveY // 元素拖动后的位置
  const minPosition = 0
  const maxPosition = containerHeight - itemHeight
  // 元素拖动的位置不能超出容器
  if (positionY < minPosition) {
    positionY = minPosition
  } else if (positionY > maxPosition) {
    positionY = maxPosition
  }
  item.top = positionY

  const middlePositionY = item.top + itemHeight / 2 // 拖动元素中间点的位置

  for (let i = 0; i < list.value.length; i++) {
    if (item.index === list.value[i].index) continue

    if (
      middlePositionY > list.value[i].top &&
      middlePositionY < list.value[i].top + itemHeight
    ) {
      item.index = list.value[i].index

      list.value[i].index = moveIndex
      list.value[i].top = moveIndex * (itemHeight + space) + 10
      list.value[i].transition = 'top 0.3s linear 0s'

      moveIndex = item.index

      break
    }
  }
}

const mouseDown = function (downEl, item) {
  userSelect.value = 'none'

  mouseStartY = downEl.clientY // 鼠标初始的位置
  moveIndex = item.index // 记录拖动的元素索引值
  dragStartY = item.top // 拖动元素的初始位置

  document.onmousemove = function (el) {
    item.zIndex = 99
    item.transition = ''

    updateDomPosition(item, el.clientY)
  }

  document.onmouseup = function () {
    item.top = moveIndex * (itemHeight + space) + 10
    item.zIndex = 0
    userSelect.value = 'text'
    document.onmousemove = null
  }
}

function touchStart(el, item) {
  userSelect.value = 'none'
  const touches = el.targetTouches[0]
  mouseStartY = touches.clientY // 鼠标初始的位置
  moveIndex = item.index // 记录拖动的元素索引值
  dragStartY = item.top // 拖动元素的初始位置
}
function touchMove(el, item) {
  item.zIndex = 99
  item.transition = ''

  const touches = el.targetTouches[0]

  updateDomPosition(item, touches.clientY)
}
function touchEnd(item) {
  item.top = moveIndex * (itemHeight + space) + 10
  item.zIndex = 0
  userSelect.value = 'text'
}
</script>

<template>
  <div
    class="drag-list"
    :style="{ height: containerHeight + 'px', userSelect }"
  >
    <div
      v-for="item in list"
      :key="item.id"
      class="drag-list-item"
      :style="{
        height: itemHeight + 'px',
        top: item.top + 'px',
        transition: item.transition,
        'z-index': item.zIndex,
      }"
      @mousedown="mouseDown($event, item)"
      @touchstart="touchStart($event, item)"
      @touchmove="touchMove($event, item)"
      @touchend="touchEnd(item)"
    >
      {{ item.constant }} --- top: {{ item.top.toFixed() }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drag-list {
  width: 100%;
  max-width: 500px;
  border: 1px solid #999;
  user-select: text;
  cursor: default;
  position: relative;

  .drag-list-item {
    width: calc(100% - 20px);
    max-width: 480px;
    line-height: 50px;
    background-color: lightgray;
    text-align: center;
    z-index: 0;
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>
