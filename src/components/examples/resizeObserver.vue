<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const wrapRef = ref()

const resizeObserver = new ResizeObserver((entries) => {
  console.log(entries[0].contentRect.width)
})

onMounted(() => {
  resizeObserver.observe(wrapRef.value)
})
onBeforeUnmount(() => {
  resizeObserver.unobserve(wrapRef.value)
})
</script>

<template>
  <div ref="wrapRef" class="wrap">2398fifjeiogegr</div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 300px;
  border: 2px solid #333;
}
</style>
