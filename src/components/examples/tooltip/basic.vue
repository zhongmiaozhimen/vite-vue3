<script setup></script>

<template>
  <div class="container">
    <div class="wrap">
      <div class="box">
        <div v-tooltip>5uhig45345ireg23445fgd</div>
      </div>
    </div>

    <div class="wrap">
      鼠标可以进入到 tooltip 中
      <div class="box">
        <div v-tooltip>
          5uhig45345355uhig453453543trgiiiireg23445fgd43trgiiiireg23445fgd
        </div>
      </div>
    </div>

    <div class="wrap">
      鼠标不可以进入到 tooltip 中
      <div class="box">
        <div v-tooltip="{ enterable: false }">
          5uhig45345355uhig453453543trgiiiireg23445fgd43trgiiiireg23445fgd
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="box">
        <div v-tooltip>
          5uhig45345355uhig453453543trgiiiireg23445fgd43trgiiiireg23445fgd
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="box">
        <div v-tooltip>
          <template v-for="n in 20" :key="n">5uhig45345ireg23445fgd</template>
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="box">
        <div v-tooltip>
          <template v-for="n in 30" :key="n">5uhig45345ireg23445fgd</template>
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="box">
        <div v-tooltip>
          <template v-for="n in 60" :key="n">5uhig45345ireg23445fgd</template>
        </div>
      </div>
    </div>

    <div class="scroll-wrap">
      <li v-tooltip>5uhig45345ireg5uhig45345ireg23445fgd23445fgd</li>
      <li v-tooltip>5uhig45345ireg5uhig45345ireg23445fgd23445fgd</li>
      <li v-tooltip>5uhig45345ireg5uhig45345d23445fgd</li>
      <li v-tooltip>5uhig45345ireg5uhig45345ireg23445fgd23445fgd</li>
      <li v-tooltip>5uhig45345ireg5uhiggd23445fgd</li>
      <li v-tooltip>5uhig45345ireg5uhig45345ireg23445fgd23445fgd</li>
      <li v-tooltip>5uhig45345ireg5uhig45345ireg23445fgd23445fgd</li>
      <li v-tooltip>5uhig45345ireg5uhig4534</li>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-bottom: 20px;
}

.wrap {
  margin: 20px 50px 50px;

  .box {
    width: 300px;
    border: 1px solid #999;
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
  }
}

.scroll-wrap {
  width: 300px;
  height: 200px;
  border: 1px dotted #333;
  overflow: auto;

  li {
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
  }
}
</style>
