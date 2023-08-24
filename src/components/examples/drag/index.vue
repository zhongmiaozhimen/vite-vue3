<script setup>
import ListDrag from './list-drag.vue'
import GridDrag from './grid-drag.vue'
</script>

<template>
  <div class="title">元素拖拽</div>

  <el-tabs modelValue="1">
    <el-tab-pane label="列表" name="1">
      <ListDrag />
    </el-tab-pane>

    <el-tab-pane label="网格" name="2" lazy>
      <GridDrag />
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
}
</style>
