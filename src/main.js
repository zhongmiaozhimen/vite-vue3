import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './style.css'

import tooltipDirective from './components/common/tooltip/directive.js'

const app = createApp(App)

app.directive('tooltip', tooltipDirective)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(ElementPlus).use(VXETable).use(Antd).mount('#app')
