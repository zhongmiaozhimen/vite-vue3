<script setup>
import InlineForm from './inline-form.vue'
import MultipleForm from './multiple-form.vue'
</script>

<template>
  <div class="title">Form 表单</div>

  <el-tabs modelValue="1">
    <el-tab-pane label="单行显示" name="1">
      <InlineForm />
    </el-tab-pane>

    <el-tab-pane label="多行显示" name="2" lazy>
      <MultipleForm />
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
