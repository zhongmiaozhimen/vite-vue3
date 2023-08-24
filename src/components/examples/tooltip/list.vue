<script setup>
const list = []

for (let i = 0; i < 100; i++) {
  list.push({
    msg: randomWord(),
  })
}

function randomWord() {
  let result = ''
  const arr = ['abcdefg', 'hijklmn', 'opq', 'rst', 'uvw', 'xyz']

  for (let i = 0; i < arr.length; i++) {
    const random = Math.ceil(Math.random() * 10)
    result += arr[random]
  }

  return result
}
</script>

<template>
  <div class="container">
    <div class="wrap">
      <ul v-tooltip="{ group: true }">
        <li v-for="item in list" :key="item.id">{{ item.msg }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 300px;
  height: 300px;
  border: 1px dotted #333;
  overflow: auto;

  li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0 20px;
  }
}
</style>
