<template>
  <div>
    <h3>每一项的最大宽度不超过 form 宽度的 1/4</h3>

    <div class="wrap">
      <el-form class="inline-form">
        <el-form-item label="苹果">
          <el-input modelValue="1" />
        </el-form-item>

        <el-form-item label="梨">
          <el-input modelValue="2" />
        </el-form-item>

        <el-form-item label="人参果-人参果-人参果">
          <el-input modelValue="3" />
        </el-form-item>

        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="wrap">
      <el-form class="inline-form">
        <el-form-item label="苹果"> 测试文本 </el-form-item>

        <el-form-item label="梨">
          <el-input modelValue="2" />
        </el-form-item>

        <el-form-item label="人参果-人参果-人参果">
          <el-input modelValue="3" />
        </el-form-item>

        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="wrap">
      <el-form class="inline-form">
        <el-form-item label="苹果">
          <div v-tooltip>测试文本测试文本测试文本测试文本测试文本</div>
        </el-form-item>

        <el-form-item label="梨">
          <el-input modelValue="2" />
        </el-form-item>

        <el-form-item label="人参果-人参果-人参果">
          <el-input modelValue="3" />
        </el-form-item>

        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  border: 1px dotted #999;
  padding: 20px 10px 0;
}

.inline-form {
  display: flex;
  align-items: flex-start;

  .el-form-item {
    box-sizing: border-box;
    padding-right: 50px;
    max-width: 25%;

    &:last-child {
      padding-right: 0;
    }
  }
}
</style>
