<script setup>
import PositionRelative from './position-relative.vue'
import PositionAbsolute from './position-absolute.vue'
import Translate from './translate.vue'
import TransformTranslate from './transform-translate.vue'
import Animation from './animation.vue'
</script>

<template>
  <div class="title">元素平移</div>

  <el-tabs modelValue="1">
    <el-tab-pane label="相对定位" name="1">
      <PositionRelative />
    </el-tab-pane>

    <el-tab-pane label="绝对定位" name="2" lazy>
      <PositionAbsolute />
    </el-tab-pane>

    <el-tab-pane label="translate" name="3" lazy>
      <Translate />
    </el-tab-pane>

    <el-tab-pane label="transform: translate()" name="4" lazy>
      <TransformTranslate />
    </el-tab-pane>

    <el-tab-pane label="animation" name="5" lazy>
      <Animation />
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
