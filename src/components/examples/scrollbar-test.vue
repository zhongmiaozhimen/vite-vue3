<script setup>
import { ref } from 'vue'

const maxHeight = ref(300)

const changeMaxHeight = function () {
  maxHeight.value = 500
}
</script>

<template>
  <el-button @click="changeMaxHeight">change-max-height</el-button>
  <div class="list-wrap">
    <el-scrollbar :max-height="maxHeight">
      <div v-for="n in 20" :key="n" class="list-item">{{ n }}</div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.list-wrap {
  border: 1px solid #666;

  .list-item {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>
