<script setup>
import { ref } from 'vue'

const userSelect = ref('text')
const itemWidth = 100 // 每个元素的高度
const itemHeight = 100 // 每个元素的高度
const space = 10 // 元素之间的间隔
const cols = 3 // 每行容纳的元素个数
const list = ref([])

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
let left = 0
let top = 0
arr.forEach((item, index) => {
  left = 10 + (itemWidth + space) * (index % cols)
  top = 10 + (itemHeight + space) * Math.floor(index / cols)

  list.value.push({
    id: `${new Date().getTime()}-${index}`,
    index,
    left,
    top,
    transition: '',
    zIndex: 0,
    constant: item,
  })
})

const total = list.value.length
// 容器的宽度
const containerWidth = cols * itemWidth + (cols - 1) * space + 20
// 容器的高度
const containerHeight =
  Math.ceil(total / cols) * itemHeight + (cols - 1) * space + 20

let mouseStartX = 0 // 鼠标初始的位置（横坐标）
let mouseStartY = 0 // 鼠标初始的位置（纵坐标）
let moveIndex = 0 // 记录拖动的元素索引值
let dragStartX = 0 // 拖动元素的初始位置（横坐标）
let dragStartY = 0 // 拖动元素的初始位置（纵坐标）

function updateDomPosition(item, clientX, clientY) {
  const mouseMoveX = clientX - mouseStartX //鼠标移动的距离（横坐标）
  const mouseMoveY = clientY - mouseStartY //鼠标移动的距离（纵坐标）

  let positionX = dragStartX + mouseMoveX // 元素拖动后的位置（横坐标）
  let positionY = dragStartY + mouseMoveY // 元素拖动后的位置（纵坐标）
  const minPosition = 0
  const maxPositionX = containerWidth - itemWidth
  const maxPositionY = containerHeight - itemHeight

  // 元素拖动的位置不能超出容器
  if (positionX < minPosition) {
    positionX = minPosition
  } else if (positionX > maxPositionX) {
    positionX = maxPositionX
  }

  if (positionY < minPosition) {
    positionY = minPosition
  } else if (positionY > maxPositionY) {
    positionY = maxPositionY
  }

  item.left = positionX
  item.top = positionY

  const middlePositionX = item.left + itemWidth / 2 // 拖动元素中间点的位置（横坐标）
  const middlePositionY = item.top + itemHeight / 2 // 拖动元素中间点的位置（纵坐标）

  for (let i = 0; i < list.value.length; i++) {
    if (item.index === list.value[i].index) continue

    if (
      middlePositionX > list.value[i].left &&
      middlePositionX < list.value[i].left + itemWidth &&
      middlePositionY > list.value[i].top &&
      middlePositionY < list.value[i].top + itemHeight
    ) {
      item.index = list.value[i].index

      list.value[i].index = moveIndex
      list.value[i].left = (itemWidth + space) * (moveIndex % cols) + 10
      list.value[i].top =
        (itemHeight + space) * Math.floor(moveIndex / cols) + 10
      list.value[i].transition = 'left 0.3s linear,top 0.3s linear'

      moveIndex = item.index

      break
    }
  }
}

const mouseDown = function (downEl, item) {
  userSelect.value = 'none'

  mouseStartX = downEl.clientX // 鼠标初始的位置（横坐标）
  mouseStartY = downEl.clientY // 鼠标初始的位置（纵坐标）

  moveIndex = item.index // 记录拖动的元素
  dragStartX = item.left // 拖动元素的初始位置（横坐标）
  dragStartY = item.top // 拖动元素的初始位置（纵坐标）

  document.onmousemove = function (el) {
    item.zIndex = 99
    item.transition = ''

    updateDomPosition(item, el.clientX, el.clientY)
  }

  document.onmouseup = function () {
    item.left = (itemWidth + space) * (moveIndex % cols) + 10
    item.top = (itemHeight + space) * Math.floor(moveIndex / cols) + 10
    item.zIndex = 0
    userSelect.value = 'text'
    document.onmousemove = null
  }
}

function touchStart(el, item) {
  userSelect.value = 'none'
  const touches = el.targetTouches[0]

  mouseStartX = touches.clientX // 鼠标初始的位置（横坐标）
  mouseStartY = touches.clientY // 鼠标初始的位置（纵坐标）

  moveIndex = item.index // 记录拖动的元素
  dragStartX = item.left // 拖动元素的初始位置（横坐标）
  dragStartY = item.top // 拖动元素的初始位置（纵坐标）
}
function touchMove(el, item) {
  item.zIndex = 99
  item.transition = ''

  const touches = el.targetTouches[0]

  updateDomPosition(item, touches.clientX, touches.clientY)
}
function touchEnd(item) {
  item.left = (itemWidth + space) * (moveIndex % cols) + 10
  item.top = (itemHeight + space) * Math.floor(moveIndex / cols) + 10
  item.zIndex = 0
  userSelect.value = 'text'
}
</script>

<template>
  <div
    class="drag-list"
    :style="{
      width: containerWidth + 'px',
      height: containerHeight + 'px',
      userSelect,
    }"
  >
    <div
      v-for="item in list"
      :key="item.id"
      class="drag-list-item"
      :style="{
        width: itemWidth + 'px',
        height: itemHeight + 'px',
        top: item.top + 'px',
        left: item.left + 'px',
        transition: item.transition,
        'z-index': item.zIndex,
      }"
      @mousedown="mouseDown($event, item)"
      @touchstart="touchStart($event, item)"
      @touchmove="touchMove($event, item)"
      @touchend="touchEnd(item)"
    >
      <div>{{ item.constant }}</div>
      <div>left: {{ item.left.toFixed() }}</div>
      <div>top: {{ item.top.toFixed() }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drag-list {
  border: 1px solid #999;
  user-select: text;
  cursor: default;
  position: relative;

  .drag-list-item {
    padding-top: 20px;
    background-color: lightgray;
    text-align: center;
    z-index: 0;
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>
