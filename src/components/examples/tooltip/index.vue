<script setup>
import Basic from './basic.vue'
import List from './list.vue'
</script>

<template>
  <div class="title">Tooltip 文字提示</div>

  <el-tabs modelValue="1">
    <el-tab-pane label="单个" name="1">
      <Basic />
    </el-tab-pane>

    <el-tab-pane label="列表" name="2" lazy>
      <List />
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
}

.item {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 250px;
}
</style>
