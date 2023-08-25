<script setup>
import { ref, onMounted, nextTick, reactive } from 'vue'

const props = defineProps({
  referenceEl: {
    type: HTMLElement,
    default: undefined,
  },
  enterable: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['enterTooltip', 'leaveTooltip'])

const tooltipRef = ref(null)
const tooltipConfig = reactive({
  content: null,
  maxWidth: 0,
  maxHeight: 0,
  left: 0,
  top: 0,
  opacity: 0,
  arrowStyle: null,
})

let referenceEl = props.referenceEl

updateTooltipInfo(referenceEl)

// 更新tooltip的位置
function updatePosition() {
  const htmlWidth = document.documentElement.clientWidth
  const htmlHeight = document.documentElement.clientHeight
  const htmlScrollTop = document.documentElement.scrollTop
  const htmlScrollLeft = document.documentElement.scrollLeft
  const bound = referenceEl.getBoundingClientRect()
  const bottomDistance = htmlHeight - bound.top - referenceEl.clientHeight

  const tooltipWidth = tooltipRef.value.offsetWidth
  let tooltipLeft = bound.left + bound.width / 2 - tooltipWidth / 2
  let arrowLeft = tooltipWidth / 2 - 5 // 箭头元素定位时的left值

  if (tooltipLeft < 0) {
    arrowLeft += tooltipLeft
    tooltipLeft = 0
  } else if (tooltipLeft + tooltipWidth > htmlWidth) {
    arrowLeft += tooltipLeft + tooltipWidth - htmlWidth
    tooltipLeft = htmlWidth - tooltipWidth
  }

  const tooltipHeight = tooltipRef.value.offsetHeight + 15
  let tooltipTop = bound.top - tooltipHeight
  updateArrowStyle(arrowLeft)

  if (bound.top < bottomDistance && tooltipHeight > bound.top) {
    tooltipTop = bound.top + referenceEl.clientHeight + 15
    updateArrowStyle(arrowLeft, 'bottom')
  }

  tooltipConfig.left = tooltipLeft + htmlScrollLeft
  tooltipConfig.top = tooltipTop + htmlScrollTop

  nextTick(() => {
    tooltipConfig.opacity = 1
  })
}

// 更新箭头的样式
function updateArrowStyle(left, direction = 'top') {
  if (direction === 'bottom') {
    tooltipConfig.arrowStyle = {
      left: left + 'px',
      top: '-5px',
      'border-right-color': 'transparent',
      'border-bottom-color': 'transparent',
      'border-top-left-radius': '2px',
    }
  } else {
    tooltipConfig.arrowStyle = {
      left: left + 'px',
      bottom: '-5px',
      'border-top-color': 'transparent',
      'border-left-color': 'transparent',
      'border-bottom-right-radius': '2px',
    }
  }
}

// 更新鼠标移入的元素
function updateReferenceEl(el) {
  if (!el) return

  referenceEl = el
  updateTooltipInfo(referenceEl)
}

function updateTooltipInfo(el) {
  const htmlWidth = document.documentElement.clientWidth
  const htmlHeight = document.documentElement.clientHeight

  const maxWidth = htmlWidth - 40

  const bound = el.getBoundingClientRect()
  const bottomDistance = htmlHeight - bound.top - el.clientHeight
  const maxHeight = Math.max(bound.top, bottomDistance) - 40

  tooltipConfig.content = el.innerText
  tooltipConfig.maxWidth = maxWidth < 500 ? maxWidth : 500
  tooltipConfig.maxHeight = maxHeight < 500 ? maxHeight : 500
}

function updateOpacity(val) {
  tooltipConfig.opacity = val
}

// 鼠标是移入到 tooltip 中
function enterTooltip() {
  emit('enterTooltip')
}
function leaveTooltip() {
  emit('leaveTooltip')
}

onMounted(() => {
  updatePosition()

  nextTick(() => {
    tooltipConfig.opacity = 1
  })
})

defineExpose({
  updateReferenceEl,
  updatePosition,
  updateOpacity,
})
</script>

<template>
  <div
    ref="tooltipRef"
    class="tooltip"
    :style="{
      left: tooltipConfig.left + 'px',
      top: tooltipConfig.top + 'px',
      opacity: tooltipConfig.opacity,
    }"
    @mouseenter="enterTooltip"
    @mouseleave="leaveTooltip"
  >
    <div
      class="tooltip-content"
      :style="{
        'max-width': tooltipConfig.maxWidth + 'px',
        'max-height': tooltipConfig.maxHeight + 'px',
      }"
    >
      {{ tooltipConfig.content }}
    </div>

    <div class="tooltip-arrow" :style="tooltipConfig.arrowStyle"></div>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  position: absolute;
  z-index: 9999;
  border: 1px solid #666;
  border-radius: 4px;
  min-width: 30px;
  background-color: #fff;
  transition: opacity 0.2s linear;

  .tooltip-content {
    font-size: 16px;
    line-height: 1.5;
    padding: 0 10px;
    margin: 5px 0;
    word-break: break-all;
    overflow: auto;
  }

  .tooltip-arrow {
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border: 1px solid #666;
    background-color: #fff;
    transform: rotate(45deg);
    position: absolute;
  }
}
</style>
