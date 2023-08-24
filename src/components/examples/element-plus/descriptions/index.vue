<script setup></script>

<template>
  <div class="title">Descriptions 描述列表</div>

  <div class="wrap">
    <el-descriptions title="无边框">
      <el-descriptions-item label="Username">
        kooriookami
      </el-descriptions-item>

      <el-descriptions-item label="Telephone">
        18100000000
      </el-descriptions-item>

      <el-descriptions-item label="Place">Suzhou</el-descriptions-item>

      <el-descriptions-item label="Remarks"> School </el-descriptions-item>

      <el-descriptions-item label="Address">
        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
  </div>

  <div class="wrap">
    <el-descriptions border title="带边框">
      <el-descriptions-item label="Username">
        kooriookami
      </el-descriptions-item>

      <el-descriptions-item label="Telephone">
        18100000000
      </el-descriptions-item>

      <el-descriptions-item label="Place">Suzhou</el-descriptions-item>

      <el-descriptions-item label="Remarks"> School </el-descriptions-item>

      <el-descriptions-item label="Address">
        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
}

.wrap {
  margin-top: 20px;
}
</style>
