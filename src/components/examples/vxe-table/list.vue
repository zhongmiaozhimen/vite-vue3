<script setup>
import { ref } from 'vue'

const list = ref([])

loadData(10)

function loadData(total) {
  for (let i = 0; i < total; i++) {
    list.value.push({
      id: `${new Date().getTime()}-${i}`,
      label: `${i + 1}`,
    })
  }
}
</script>

<template>
  <div>
    <p>
      <vxe-button @click="loadData(10)">加载10条</vxe-button>
      <vxe-button @click="loadData(500)">加载500条</vxe-button>
      <vxe-button @click="loadData(10000)">加载1w条</vxe-button>
      <vxe-button @click="loadData(100000)">加载10w条</vxe-button>
      <vxe-button @click="loadData(300000)">加载30w条</vxe-button>
    </p>

    <vxe-list :data="list" :height="500" :scroll-y="{ oSize: 3 }" class="list">
      <template #default="{ items }">
        <div class="list-item" v-for="item in items" :key="item.id">
          {{ item.label }}
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<style lang="scss" scoped>
.list {
  max-width: 500px;
  border: 1px solid #e8eaec;

  .list-item {
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-bottom: 1px solid #999;
  }
}
</style>
