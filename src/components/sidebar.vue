<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const defaultActive = ref('')
const route = useRoute()

watch(
  () => route.path,
  (val) => {
    defaultActive.value = val
  },
  { immediate: true },
)
</script>

<template>
  <aside class="sidebar">
    <el-menu
      :default-active="defaultActive"
      router
      @select="$emit('selectMenu')"
    >
      <el-menu-item index="/virtual-list">
        <span>虚拟列表</span>
      </el-menu-item>

      <el-menu-item index="/drag">
        <span>元素拖拽</span>
      </el-menu-item>

      <el-menu-item index="/move">
        <span>元素平移</span>
      </el-menu-item>

      <el-menu-item index="/tooltip">
        <span>Tooltip 文字提示</span>
      </el-menu-item>

      <el-sub-menu index="5">
        <template #title>
          <span>element-plus</span>
        </template>

        <el-menu-item index="/element-plus/form">Form 表单</el-menu-item>
        <el-menu-item index="/element-plus/descriptions">
          Descriptions 描述列表
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="6">
        <template #title>
          <span>vxe-table</span>
        </template>

        <el-menu-item index="/vxe-table/list">虚拟列表</el-menu-item>
        <el-menu-item index="/vxe-table/table">表格</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: var(--nav-height);
  bottom: 0;
  left: 0;
  width: var(--sidebar-width);
  border-right: 1px solid #dcdfe6;
  overflow-x: hidden;
  overflow-y: auto;

  .env {
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid #dcdfe6;
    background-color: #fff;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .el-menu {
    border: none;
    margin-top: 20px;

    .el-menu-item {
      height: 40px;
      line-height: 40px;
    }

    :deep(.el-sub-menu .el-sub-menu__title) {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
