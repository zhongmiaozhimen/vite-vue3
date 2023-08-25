<script setup>
import VirtualList from '@/components/common/virtual-list.vue'
import { ref, reactive } from 'vue'

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
  let height = 0
  for (let i = 1; i <= forms.total; i++) {
    height = Math.ceil(Math.random() * 200)
    height = height < 30 ? 30 : height
    list.value.push({
      msg: `${randomWord()} --- ${i}`,
    })
  }

  buffer.value = forms.buffer
}

function randomWord() {
  const arr = [
    '道可道也，非恒道也。',
    '名可名也，非恒名也。',
    '无名万物之始也，有名万物之母也。',
    '故：恒无欲也，以观其眇；',
    '恒有欲也，以观其徼。',
    '两者同出，异名同谓。玄之又玄，众妙之门。',
    '天下皆知美之为美，恶矣，皆知善之为善，斯不善矣。',
    '有无之相生也，难易之相成也，长短之相形也，高下之相盈也，音声之相和也，先后之相随也。',
    '是以圣人居无为之事，行不言之教。',
    '万物作而弗始也，为而弗恃也，成功而弗居也，夫唯弗居，是以弗去。',
  ]

  const random = Math.ceil(Math.random() * 10)
  return arr.slice(0, random)
}

function inputBlur(keyName) {
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
          v-model="forms.buffer"
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
      <VirtualList
        :data="list"
        :max-height="maxHeight"
        :buffer="buffer"
        :fixed="false"
      >
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
.wrap {
  margin-top: 20px;
  max-width: 500px;
  border: 1px solid #333;

  .list-item {
    margin: 0 auto;
    padding: 10px 100px;
    border-bottom: 1px solid #999;
  }
}
</style>
