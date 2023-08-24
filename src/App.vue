<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/sidebar.vue'

const env = import.meta.env.VITE_ENV

const showSidebar = ref(false)
const smallScreen = ref(false)
const smallScreenMaxWidth = 960

const resizeObserver = new ResizeObserver((entries) => {
  if (entries[0].contentRect.width > smallScreenMaxWidth) {
    smallScreen.value = false
  } else {
    smallScreen.value = true
    showSidebar.value = false
  }
})

resizeObserver.observe(document.body)
</script>

<template>
  <div class="container">
    <div class="nav-bar">
      <div class="wrapper">
        <div v-if="env !== 'prod'" class="env">{{ env }}</div>
      </div>
    </div>

    <div v-if="smallScreen" class="menu-btn">
      <el-button icon="Menu" link @click="showSidebar = true">菜单</el-button>
    </div>

    <div class="sidebar">
      <Sidebar v-if="!smallScreen" />

      <el-drawer
        v-if="smallScreen"
        v-model="showSidebar"
        direction="ltr"
        :show-close="false"
        :with-header="false"
        :lock-scroll="false"
      >
        <Sidebar @selectMenu="showSidebar = false" />
      </el-drawer>
    </div>

    <div class="page-content">
      <div class="wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: hidden;

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    height: var(--nav-height);

    .wrapper {
      border-bottom: 1px solid #dcdfe6;
      border-right: 1px solid #dcdfe6;

      .env {
        line-height: var(--nav-height);
        margin-left: 20px;
      }
    }
  }

  .menu-btn {
    display: none;
    padding: 10px 18px;
    border-bottom: 1px solid #dcdfe6;
  }

  .sidebar :deep(.el-drawer) {
    width: var(--sidebar-width) !important;

    .el-drawer__body {
      padding: 0;
    }

    .sidebar {
      position: relative;
      top: 0;
    }
  }

  .page-content {
    padding-top: 0;
    padding-left: 200px;

    .wrapper {
      padding: 20px 30px;
    }
  }
}

@media (max-width: 960px) {
  .container {
    .nav-bar {
      position: relative;
      width: 100%;

      .wrapper {
        border-right: none;
      }
    }

    .menu-btn {
      display: block;
    }

    .page-content {
      padding-top: 0;
      padding-left: 0;

      .wrapper {
        padding: 20px 20px;
      }
    }
  }
}
</style>
