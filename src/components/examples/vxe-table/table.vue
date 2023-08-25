<script setup>
const tableData = [
  {
    id: 10001,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc test abc test abc test abc',
  },
  {
    id: 10002,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
  },
  {
    id: 10003,
    name: 'Test3',
    role: 'PM',
    sex: 'Man',
    age: 32,
    address: 'Shanghai',
  },
  {
    id: 10004,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
  },
  {
    id: 10005,
    name: 'Test5',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
  },
  {
    id: 10006,
    name: 'Test6',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
  },
  {
    id: 10007,
    name: 'Test7',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
  },
  {
    id: 10008,
    name: 'Test8',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
  },
  {
    id: 10009,
    name: 'Test9',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
  },
]
</script>

<template>
  <vxe-table
    :data="tableData"
    border
    stripe
    show-overflow
    :row-config="{ isHover: true }"
    :column-config="{ resizable: true }"
    max-height="400"
  >
    <vxe-column type="seq" fixed="left" width="60"></vxe-column>
    <vxe-column field="name" title="Name" min-width="120"></vxe-column>
    <vxe-column field="role" title="Role" min-width="120"></vxe-column>
    <vxe-column field="sex" title="Sex" min-width="120"></vxe-column>
    <vxe-column field="age" title="Age" min-width="120"></vxe-column>
    <vxe-column field="address" title="Address" min-width="200"></vxe-column>
    <vxe-column title="操作" fixed="right" width="120">
      <template #default="{ row }">
        <span>编辑{{ row.name }}</span>
      </template>
    </vxe-column>
  </vxe-table>
</template>
