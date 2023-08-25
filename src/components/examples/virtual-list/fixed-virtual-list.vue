<script setup>
import VirtualList from '@/components/common/virtual-list.vue'
import { reactive, ref } from 'vue'

const forms = reactive({
  total: 1000,
  buffer: 0,
})

const list = ref([])
const maxHeight = 500
const buffer = ref(0)

updateList()

function updateList() {
  list.value = []
  for (let i = 1; i <= forms.total; i++) {
    list.value.push({
      msg: `${randomWord()} --- ${i}`,
    })
  }

  buffer.value = forms.buffer
}

function randomWord() {
  let result = ''
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

  for (let i = 0; i < arr.length; i++) {
    const random = Math.ceil(Math.random() * 10)
    result += arr[random]
  }

  return result
}

function inputBlur(keyName) {
  if (forms[keyName] === '') return

  if (typeof forms[keyName] === 'string') {
    forms[keyName] = forms[keyName]
      .replace(/[^0-9]/g, '')
      .replace(/^0+(?=\d)/, '')
    forms[keyName] = Number(forms[keyName])
  }
}
</script>

<template>
  <div>
    <el-form inline>
      <el-form-item label="列表总数">
        <el-input
          v-model.number="forms.total"
          placeholder="请输入列表总数"
          maxlength="6"
          @blur="inputBlur('total')"
        />
      </el-form-item>

      <el-form-item label="缓冲量">
        <el-input
          v-model.number="forms.buffer"
          placeholder="请输入滚动时的缓冲量"
          maxlength="5"
          @blur="inputBlur('buffer')"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="updateList">更新列表</el-button>
      </el-form-item>
    </el-form>

    <div class="wrap">
      <VirtualList :data="list" :max-height="maxHeight" :buffer="buffer">
        <template v-slot:default="{ item }">
          <div class="list-item">
            {{ item.msg }}
          </div>
        </template>
      </VirtualList>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-num {
  margin-top: 20px;

  button {
    margin-left: 20px;
  }
}

.wrap {
  margin-top: 20px;
  max-width: 500px;
  border: 1px solid #333;

  .list-item {
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #999;
  }
}
</style>
