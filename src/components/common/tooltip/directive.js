import { createVNode, render, nextTick } from 'vue'
import Tooltip from './tooltip.vue'

let mouseEnterEl = null // 鼠标移入的元素
let tooltipVNode = null // tooltip虚拟DOM
let waiting = false // 是否在等待移除 tooltip
let timer = null
const nodes = [] // 记录指令绑定的元素
let enterable = false // 鼠标是否可进入到 tooltip 中
const nodeGroup = [] // 记录指令绑定的元素

function insertTooltip(el) {
  if (tooltipVNode && mouseEnterEl && mouseEnterEl === el) {
    clearTimeout(timer)
    timer = null
    updateTooltipOpacity(1)
    return
  }

  mouseEnterEl = el

  if (!mouseEnterEl) return

  const range = document.createRange()
  range.setStart(mouseEnterEl, 0)
  range.setEnd(mouseEnterEl, mouseEnterEl.childNodes.length)
  const rangeWidth = range.getBoundingClientRect().width

  const mouseEnterElStyle = window.getComputedStyle(mouseEnterEl)
  const padding =
    parseInt(mouseEnterElStyle.getPropertyValue('padding-left')) +
    parseInt(mouseEnterElStyle.getPropertyValue('padding-right'))

  const containerWidth = mouseEnterEl.getBoundingClientRect().width

  if (rangeWidth + padding - containerWidth > 0.02) {
    // 文本内容已溢出，加载tooltip
    if (tooltipVNode) {
      clearTimeout(timer)
      timer = null

      tooltipVNode.component.exposed.updateReferenceEl(mouseEnterEl)
      nextTick(() => {
        tooltipVNode.component.exposed.updatePosition()
      })

      return
    }

    if (enterable) {
      // 鼠标可以进入到 tooltip 中
      tooltipVNode = createVNode(Tooltip, {
        referenceEl: el,
        onEnterTooltip() {
          // 鼠标移入到 tooltip 中
          if (enterable && waiting) {
            clearTimeout(timer)
            timer = null
            waiting = false
          }
        },
        onLeaveTooltip() {
          // 鼠标移出tooltip
          if (!timer) {
            removeTooltip()
          }
        },
      })
    } else {
      tooltipVNode = createVNode(Tooltip, {
        referenceEl: el,
      })
    }

    render(tooltipVNode, document.body)

    addScrollEvent()
  }
}

// 移除tooltip
function removeTooltip() {
  clearTimeout(timer)
  timer = null
  if (!tooltipVNode) return

  waiting = true
  timer = setTimeout(() => {
    updateTooltipOpacity(0)
    timer = null
    waiting = false

    timer = setTimeout(() => {
      timer = null
      render(null, document.body)
      tooltipVNode = null
      mouseEnterEl = null
      waiting = false
      removeScrollEvent()
    }, 200)
  }, 100)
}

// 立即移除tooltip
function immedRemoveTooltip() {
  clearTimeout(timer)
  timer = null

  if (!tooltipVNode) return

  render(null, document.body)
  tooltipVNode = null
  mouseEnterEl = null
  waiting = false
  removeScrollEvent()
}

function updateTooltipOpacity(val) {
  if (tooltipVNode) {
    tooltipVNode.component.exposed.updateOpacity(val)
  }
}

function mouseenterCallback(el) {
  const curNode = nodes.find((item) => item.el === el.target)

  if (curNode) {
    enterable = curNode.enterable
    insertTooltip(el.target)
  }
}

function mouseleaveCallback() {
  removeTooltip()
}

function mouseoverCallback(el) {
  let curNode = null
  nodeGroup.some((item) => {
    if (item.el === el.target) {
      return true
    }

    if (item.el.contains(el.target)) {
      curNode = item
      return true
    }
  })

  if (curNode) {
    enterable = curNode.enterable
    insertTooltip(el.target)
  }
}
function mouseoutCallback() {
  removeTooltip()
}

function scrollCallback(el) {
  if (tooltipVNode && mouseEnterEl && el.target.contains(mouseEnterEl)) {
    // 如果鼠标移入的元素正在滚动，则立即移除 tooltip
    immedRemoveTooltip()
  }
}

function addScrollEvent() {
  document.body.addEventListener('scroll', scrollCallback, true)
}
function removeScrollEvent() {
  document.body.removeEventListener('scroll', scrollCallback, true)
}

function setStyle(el) {
  el.style.whiteSpace = 'nowrap'
  el.style.overflow = 'hidden'
  el.style.textOverflow = 'ellipsis'
}

const tooltipDirective = {
  mounted(el, binding) {
    const group = binding.value?.group === true ? true : false // 是否使用在包裹列表的元素上

    if (group) {
      el.addEventListener('mouseover', mouseoverCallback)
      el.addEventListener('mouseout', mouseoutCallback)

      nodeGroup.push({
        el,
        enterable: binding.value?.enterable === true ? true : false, // 鼠标是否可进入到 tooltip 中
      })

      const childs = el.children
      for (let i = 0; i < childs.length; i++) {
        setStyle(childs[i])
      }
    } else {
      el.addEventListener('mouseenter', mouseenterCallback)
      el.addEventListener('mouseleave', mouseleaveCallback)

      setStyle(el)

      nodes.push({
        el,
        enterable: binding.value?.enterable === false ? false : true, // 鼠标是否可进入到 tooltip 中
      })
    }
  },
  unmounted(el) {
    el.removeEventListener('mouseover', mouseoverCallback)
    el.removeEventListener('mouseout', mouseoutCallback)

    el.removeEventListener('mouseenter', mouseenterCallback)
    el.removeEventListener('mouseleave', mouseleaveCallback)

    nodes.some((item, index) => {
      if (item.el === el) {
        nodes.splice(index, 1)
        return true
      }
    })

    nodeGroup.some((item, index) => {
      if (item.el === el) {
        nodes.splice(index, 1)
        return true
      }
    })
  },
}

export default tooltipDirective
