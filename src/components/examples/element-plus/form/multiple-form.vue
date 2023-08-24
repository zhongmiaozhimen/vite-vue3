<template>
  <div>
    <div>
      <h3>宽度自动撑开（总宽度不够时换行显示）</h3>

      <div class="wrap">
        <el-form inline>
          <el-form-item label="苹果">
            <el-input modelValue="1" />
          </el-form-item>

          <el-form-item label="西瓜">
            <el-input modelValue="2" />
          </el-form-item>

          <el-form-item label="梨">
            <el-input modelValue="3" />
          </el-form-item>

          <el-form-item>
            <el-button>重置</el-button>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="wrap">
        <el-form inline>
          <el-form-item label="苹果"> 测试文本测试文本 </el-form-item>

          <el-form-item label="西瓜">
            <el-input modelValue="2" />
          </el-form-item>

          <el-form-item label="橘子">
            <el-input modelValue="3" />
          </el-form-item>

          <el-form-item label="香蕉">
            <el-input modelValue="4" />
          </el-form-item>

          <el-form-item label="人参果-人参果-人参果">
            <el-input modelValue="5" />
          </el-form-item>

          <el-form-item>
            <el-button>重置</el-button>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <br />

    <div>
      <h3>每一项的宽度占 form 宽度的 1/3</h3>

      <div class="wrap pd-bom-20">
        <el-form label-width="100px" class="multiple-form">
          <el-form-item label="苹果" class="is-text">
            <div class="text">测试文本</div>
          </el-form-item>

          <el-form-item label="西瓜" class="is-text"
            ><div class="text">测试文本</div>
          </el-form-item>

          <el-form-item label="橘子-橘子-橘子-橘子" class="is-text">
            <div class="text">测试文本</div>
          </el-form-item>

          <el-form-item label="哈密瓜-哈密瓜-哈密瓜" class="is-text">
            <div class="text">
              测试文本测试文本测试文本测试文本测试文本测试文本
            </div>
          </el-form-item>

          <el-form-item label="梨">
            <el-input modelValue="5" />
          </el-form-item>

          <el-form-item label="人参果-人参果-人参果">
            <el-input modelValue="6" />
          </el-form-item>
        </el-form>

        <el-row type="flex" justify="center">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </el-row>
      </div>
    </div>

    <br />

    <div>
      <h3>每一项的宽度占 form 宽度的 1/3（使用el-col）</h3>

      <div class="wrap pd-bom-20">
        <el-form label-width="100px" class="multiple-form-2">
          <el-col :span="8">
            <el-form-item label="苹果" class="is-text">
              <div class="text">测试文本</div>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="西瓜" class="is-text">
              <div class="text">测试文本</div>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="西瓜-西瓜-西瓜-西瓜" class="is-text">
              <div class="text">测试文本</div>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="人参果-人参果-人参果">
              <el-input modelValue="4" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="哈密瓜">
              <el-input modelValue="5" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="橘子">
              <el-input modelValue="6" />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-col :span="16">
              <el-form-item label="柚子">
                <el-input modelValue="7" type="textarea" />
              </el-form-item>
            </el-col>
          </el-col>

          <el-col :span="8">
            <el-form-item label="芒果">
              <el-select modelValue="8" />
            </el-form-item>
          </el-col>
        </el-form>

        <el-row type="flex" justify="center">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  border: 1px dotted #999;
  padding: 20px 10px 0;
}

.pd-bom-20 {
  padding-bottom: 20px;
}

.multiple-form {
  display: flex;
  flex-wrap: wrap;

  .el-form-item {
    box-sizing: border-box;
    padding-right: 50px;
    width: 33.333333%;

    :deep(.el-form-item__label) {
      line-height: 16px;
      align-items: center;
    }

    &.is-text :deep(.el-form-item__content) {
      align-items: center;

      .text {
        line-height: 16px;
      }
    }

    :deep(.el-form-item__content) {
      align-items: flex-start;
    }
  }
}

.multiple-form-2 {
  display: flex;
  flex-wrap: wrap;

  .el-form-item {
    box-sizing: border-box;
    padding-right: 50px;

    :deep(.el-form-item__label) {
      line-height: 16px;
      align-items: center;
    }

    &.is-text :deep(.el-form-item__content) {
      align-items: center;

      .text {
        line-height: 16px;
      }
    }

    :deep(.el-form-item__content) {
      align-items: flex-start;
    }
  }
}
</style>
