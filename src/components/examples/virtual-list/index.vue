<script setup>
import FixedVirtualList from './fixed-virtual-list.vue'
import DynamicVirtualList from './dynamic-virtual-list.vue'
</script>

<template>
  <div class="title">虚拟列表</div>

  <el-tabs modelValue="1">
    <el-tab-pane label="定高" name="1">
      <FixedVirtualList />
    </el-tab-pane>

    <el-tab-pane label="非定高" name="2" lazy>
      <DynamicVirtualList />
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
