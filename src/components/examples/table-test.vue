<script setup>
const data = [
  { prop1: 'aaaa', prop2: 'bbbb', prop3: 'cccc' },
  {
    prop1: 'aaaa',
    prop2: 'bbbb',
    prop3: 'cccc',
  },
  {
    prop1: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    prop2: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    prop3: 'cccccccccccccccccccccccccccccccccccccc',
  },
]
</script>

<template>
  <el-table :data="data" border>
    <el-table-column prop="prop1" label="label1"></el-table-column>
    <el-table-column prop="prop2" label="label2" show-overflow-tooltip>
      <template #default="{ row }">
        <span class="no-edit error">{{ row.prop2 }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="prop3" label="label3">
      <template #default="{ row }">
        <span class="no-edit success">{{ row.prop3 }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.no-edit {
  // min-height: 23px;
}

.success::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eafcd5;
  z-index: -1;
}

.success::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 8px solid #8aba53;
  border-left: 8px solid transparent;
}

.error::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #feeeee;
  z-index: -1;
}

.error::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 8px solid #f45353;
  border-left: 8px solid transparent;
}
</style>
