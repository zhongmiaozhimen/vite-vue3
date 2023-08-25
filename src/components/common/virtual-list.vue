<script setup>
import { ref, reactive, watch, nextTick } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  height: {
    type: Number,
    default: undefined,
  },
  maxHeight: {
    type: Number,
    default: undefined,
  },
  // 最小行高
  minItemHeight: {
    type: Number,
    default: 20,
  },
  // 滚动时需要的缓冲量（值越大滚动时视口上下留白的几率越小）
  buffer: {
    type: Number,
    default: 1,
  },
  // 列表中每一项的高度是否相同
  fixed: {
    type: Boolean,
    default: true,
  },
  showOverflowTooltip: {
    type: Boolean,
    default: false,
  },
})

let list = listInit()
let total = list.length

const viewportMaxHeight = ref(props.height ? null : props.maxHeight)

let itemHeight = 0
let viewportNumber = 0 // 视口区域中加载的列表数量
let viewporOutsideNumber = 0 // 视口区域之外需要额外加载的列表数量

const loadList = ref([]) // 每次实际加载的列表
let startIndex = 0 // 每次实际加载的列表中第一个元素的索引
let endIndex = 0 // 每次实际加载的列表中最后一个元素的索引

const paddingTop = ref(0) // 上内边距
const paddingBottom = ref(0) // 下内边距

let oldScrollTop = 0 // 记录每次被滚动到视口上面的列表高度

const listWrapRef = ref(null)
const listRef = ref(null)

let listHeights = [] // 记录列表中每个元素的高度
let ticking = false

const tooltipRef = ref(null)
const tooltipConfig = reactive({
  show: false,
  content: null,
  maxWidth: 0,
  maxHeight: 0,
  left: 0,
  top: 0,
  opacity: 0,
  arrowStyle: null,
})
let timer = null

init()

function listInit() {
  return props.data.map((item, index) => {
    return {
      id: `${new Date().getTime()}-${index}`,
      data: item,
    }
  })
}

// 加载全部的列表
function loadAllList() {
  loadList.value = list
  paddingTop.value = 0
  paddingBottom.value = 0
  oldScrollTop = 0
}

// 视口区域加载的列表数量
function getViewportNumber() {
  if (!props.height && !props.maxHeight) return

  let result = 0
  if (props.fixed) {
    if (props.height) {
      result = Math.ceil(props.height / itemHeight)
    } else {
      result = Math.ceil(props.maxHeight / itemHeight)
    }
  } else {
    if (props.height) {
      result = Math.ceil(props.height / props.minItemHeight)
    } else {
      result = Math.ceil(props.maxHeight / props.minItemHeight)
    }
  }
  return result
}

// 记录列表中每个元素的高度
function getListHeight() {
  // 记录已加载的列表中每个元素的高度
  const listChilds = listRef.value.children
  const heights = []
  for (let i = 0; i < listChilds.length; i++) {
    heights.push(listChilds[i].getBoundingClientRect().height)
  }

  // 未加载的列表按照每一项的最小高度来计算
  for (let i = heights.length; i < list.length; i++) {
    heights.push(props.minItemHeight)
  }

  return heights
}

function init() {
  if (
    total <= 2 ||
    (!props.height && !props.maxHeight) ||
    (!props.fixed && !props.minItemHeight)
  ) {
    // 总列表数小于2 或 没有限定视口的高度 或 每一项的高度为0，则加载全部列表数据
    loadAllList()
    return
  }

  if (props.fixed) {
    // 先加载一个元素
    loadList.value = list.slice(0, 1)

    nextTick(() => {
      // 取列表中第一个元素的高度
      const listChilds = listRef.value.children
      itemHeight = listChilds[0].clientHeight
      updateList()
    })

    return
  }

  updateList()
}

function updateList() {
  // 视口区域加载的列表数量
  viewportNumber = getViewportNumber()
  // 根据缓冲量计算视口区域之外需要额外加载的列表数量（不能小于1）
  viewporOutsideNumber = props.buffer * 2 || 1

  if (viewportNumber + viewporOutsideNumber >= total) {
    loadAllList()
    return
  }

  const loadListNumber = viewportNumber + viewporOutsideNumber

  startIndex = 0
  endIndex = loadListNumber - 1

  paddingTop.value = 0

  if (props.fixed) {
    paddingBottom.value = (total - loadListNumber) * itemHeight
  } else {
    paddingBottom.value = (total - loadListNumber) * props.minItemHeight
  }

  loadList.value = list.slice(startIndex, endIndex + 1)

  oldScrollTop = 0

  if (!props.fixed) {
    nextTick(() => {
      listHeights = getListHeight()
    })
  }
}

function updateLoadList(scrollTop) {
  let scrollTopNumber = 0 // 被滚动到视口上面的列表数量
  if (props.fixed) {
    scrollTopNumber = Math.floor(scrollTop / itemHeight)
  } else {
    let heightTotal = 0
    for (let i = 0; i < listHeights.length; i++) {
      heightTotal += listHeights[i]

      if (scrollTop === heightTotal) {
        scrollTopNumber = i + 1
        break
      }

      if (scrollTop < heightTotal) {
        scrollTopNumber = i
        break
      }
    }
  }

  if (scrollTop > oldScrollTop) {
    // 鼠标滚轮往下滚动
    oldScrollTop = scrollTop

    // 底部的缓冲区域还剩余的列表数量
    let bottomBufferNumber = endIndex + 1 - scrollTopNumber - viewportNumber

    // 大于余量，不需要更新列表
    if (bottomBufferNumber > props.buffer) return
  } else if (scrollTop < oldScrollTop) {
    // 鼠标滚轮往上滚动
    oldScrollTop = scrollTop

    // 顶部的缓冲区域还剩余的列表数量
    let topBufferNumber = scrollTopNumber - startIndex

    // 大于余量，不需要更新列表
    if (topBufferNumber > props.buffer) return
  } else {
    return
  }

  // 更新实际加载的列表
  if (viewporOutsideNumber % 2) {
    startIndex = scrollTopNumber - Math.floor(viewporOutsideNumber / 2)
  } else {
    startIndex = scrollTopNumber - viewporOutsideNumber / 2
  }

  const maxStartIndex = total - loadList.value.length
  if (startIndex < 0) {
    startIndex = 0
  } else if (startIndex > maxStartIndex) {
    startIndex = maxStartIndex
  }

  endIndex = startIndex + loadList.value.length - 1
  const maxEndIndex = total - 1
  if (endIndex > maxEndIndex) {
    endIndex = maxEndIndex
  }

  loadList.value = list.slice(startIndex, endIndex + 1)

  if (props.fixed) {
    paddingTop.value = startIndex * itemHeight
    paddingBottom.value = (total - endIndex - 1) * itemHeight
  } else {
    let topHeigth = 0
    for (let i = 0; i < startIndex; i++) {
      topHeigth += listHeights[i]
    }
    paddingTop.value = topHeigth

    let bottomHeight = 0
    for (let i = endIndex + 1; i < total; i++) {
      bottomHeight += listHeights[i]
    }
    paddingBottom.value = bottomHeight

    nextTick(() => {
      const listChilds = listRef.value.children
      const heights = []
      for (let i = 0; i < listChilds.length; i++) {
        heights.push(listChilds[i].getBoundingClientRect().height)
      }
      listHeights.splice(startIndex, heights.length, ...heights)
    })
  }
}

watch(
  () => props.data,
  () => {
    if (listWrapRef.value) {
      // 重置滚动条的位置
      listWrapRef.value.scrollTop = 0
    }

    list = listInit()
    total = list.length

    if (
      total <= 2 ||
      (!props.height && !props.maxHeight) ||
      (!props.fixed && !props.minItemHeight)
    ) {
      // 总列表数小于2 或 没有限定视口的高度 或 每一项的高度为0，则加载全部列表数据
      loadAllList()
      return
    }

    updateList()
  },
)

watch([() => props.height, () => props.maxHeight], () => {
  if (
    total <= 2 ||
    (!props.height && !props.maxHeight) ||
    (!props.fixed && !props.minItemHeight)
  ) {
    // 如果没有限定视口的高度 或者 每一项的高度为0，则加载全部列表数据
    loadAllList()
    return
  }

  viewportMaxHeight.value = props.height ? null : props.maxHeight

  updateList()
})

function listScroll(el) {
  if (props.showOverflowTooltip) {
    tooltipConfig.show = false
  }

  if (
    total <= 2 ||
    (!props.height && !props.maxHeight) ||
    loadList.value.length >= total ||
    (!props.fixed && !props.minItemHeight)
  ) {
    return
  }

  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
  })

  updateLoadList(el.target.scrollTop)
}

// 鼠标移入
function mouseOver(el) {
  if (
    !props.showOverflowTooltip ||
    el.target === el.currentTarget ||
    el.target.parentElement !== el.currentTarget
  ) {
    return
  }

  const mouseOverEl = el.target

  const range = document.createRange()
  range.setStart(mouseOverEl, 0)
  range.setEnd(mouseOverEl, mouseOverEl.childNodes.length)
  const rangeWidth = range.getBoundingClientRect().width

  const mouseEnterElStyle = window.getComputedStyle(mouseOverEl)
  const padding =
    parseInt(mouseEnterElStyle.getPropertyValue('padding-left')) +
    parseInt(mouseEnterElStyle.getPropertyValue('padding-right'))

  const bound = mouseOverEl.getBoundingClientRect()
  const containerWidth = bound.width

  if (rangeWidth + padding - containerWidth > 0.02) {
    // 文本溢出

    clearTimeout(timer)
    timer = null

    tooltipConfig.show = true
    tooltipConfig.content = mouseOverEl.innerText

    const htmlWidth = document.documentElement.clientWidth
    const htmlHeight = document.documentElement.clientHeight

    const bottomDistance = htmlHeight - bound.top - bound.height

    const maxWidth = htmlWidth - 40
    const maxHeight = Math.max(bound.top, bottomDistance) - 40
    tooltipConfig.maxWidth = maxWidth < 500 ? maxWidth : 500
    tooltipConfig.maxHeight = maxHeight < 500 ? maxHeight : 500

    nextTick(() => {
      updatePosition(mouseOverEl, htmlWidth, bound, bottomDistance)
    })
  }
}
// 鼠标移出
function mouseOut() {
  if (!props.showOverflowTooltip || !tooltipConfig.show || timer) return

  tooltipConfig.opacity = 0

  timer = setTimeout(() => {
    timer = null
    tooltipConfig.show = false
  }, 200)
}

// 更新tooltip的位置
function updatePosition(el, htmlWidth, bound, bottomDistance) {
  const tooltipWidth = tooltipRef.value.offsetWidth
  let tooltipLeft = el.offsetLeft + bound.width / 2 - tooltipWidth / 2
  let arrowLeft = tooltipWidth / 2 - 5 // 箭头元素定位时的left值

  if (tooltipLeft < 0) {
    arrowLeft += tooltipLeft
    tooltipLeft = 0
  } else if (tooltipLeft + tooltipWidth > htmlWidth) {
    arrowLeft += tooltipLeft + tooltipWidth - htmlWidth
    tooltipLeft = htmlWidth - tooltipWidth
  }

  const tooltipHeight = tooltipRef.value.offsetHeight + 10
  let tooltipTop = el.offsetTop - listWrapRef.value.scrollTop - tooltipHeight
  updateArrowStyle(arrowLeft)

  if (bound.top < bottomDistance && tooltipHeight > bound.top) {
    tooltipTop = bound.top + bound.height + 10
    updateArrowStyle(arrowLeft, 'bottom')
  }

  tooltipConfig.left = tooltipLeft
  tooltipConfig.top = tooltipTop

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
</script>

<template>
  <div class="virtual-list">
    <div
      ref="listWrapRef"
      class="list-wrap"
      :style="{
        height: height ? height + 'px' : '',
        'max-height': viewportMaxHeight ? viewportMaxHeight + 'px' : '',
      }"
      @scroll="listScroll"
    >
      <ul
        ref="listRef"
        :style="{
          'padding-top': paddingTop + 'px',
          'padding-bottom': paddingBottom + 'px',
        }"
        @mouseover="mouseOver"
        @mouseout="mouseOut"
      >
        <li
          v-for="item in loadList"
          :key="item.id"
          class="list-item"
          :class="{ 'is-tooltip': props.showOverflowTooltip }"
          :style="{
            'white-space': fixed ? 'nowrap' : 'normal',
            'word-break': fixed ? 'normal' : 'break-all',
            overflow: fixed ? 'hidden' : 'visible',
          }"
        >
          <slot :items="item.data">{{ item }}</slot>
        </li>
      </ul>
    </div>

    <div
      v-if="props.showOverflowTooltip"
      ref="tooltipRef"
      class="tooltip"
      :style="{
        display: tooltipConfig.show ? 'block' : 'none',
        left: tooltipConfig.left + 'px',
        top: tooltipConfig.top + 'px',
        opacity: tooltipConfig.opacity,
      }"
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
  </div>
</template>

<style scoped lang="scss">
.virtual-list {
  position: relative;

  .list-wrap {
    overflow-y: auto;

    .list-item.is-tooltip {
      text-overflow: ellipsis;
    }
  }

  .tooltip {
    position: absolute;
    z-index: 9999;
    border: 1px solid #666;
    border-radius: 4px;
    min-width: 30px;
    background-color: #fff;
    transition: opacity 0.2s linear;
    pointer-events: none;

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
}
</style>
