<script setup>
import { onMounted, ref, createVNode, render, nextTick } from 'vue'
import { ElInput } from 'element-plus'

const value = ref('')
const options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const inputRef = ref()

const selectRef = ref()
const divDom = document.createElement('div')

onMounted(function () {
  const selectDropdownEl = selectRef.value.popperPaneRef.firstElementChild
  const inputVNode = createVNode(ElInput)

  const firstChild = selectDropdownEl.firstChild
  selectDropdownEl.insertBefore(divDom, firstChild)

  render(inputVNode, divDom)
})

const visibleChange = function (val) {
  if (val) {
    inputRef.value.focus()
  }
}

const visibleChange2 = function (val) {
  if (val) {
    nextTick(function () {
      divDom.querySelector('input').focus()
    })
  }
}
</script>

<template>
  <el-select v-model="value" @visible-change="visibleChange">
    <el-input ref="inputRef" />
    <el-option
      v-for="item in options"
      :key="item"
      :label="item"
      :value="item"
    />
  </el-select>

  <el-select ref="selectRef" v-model="value" @visible-change="visibleChange2">
    <el-option
      v-for="item in options"
      :key="item"
      :label="item"
      :value="item"
    />
  </el-select>
</template>
