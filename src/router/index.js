import { createRouter, createWebHashHistory } from 'vue-router'

const VirtualList = () => import('@/components/examples/virtual-list/index.vue')
const Drag = () => import('@/components/examples/drag/index.vue')
const Move = () => import('@/components/examples/move/index.vue')
const Tooltip = () => import('@/components/examples/tooltip/index.vue')
const ElementPlusForm = () =>
  import('@/components/examples/element-plus/form/index.vue')
const ElementPlusDescriptions = () =>
  import('@/components/examples/element-plus/descriptions/index.vue')
const VxeTableList = () => import('@/components/examples/vxe-table/list.vue')
const VxeTableTable = () => import('@/components/examples/vxe-table/table.vue')

const routes = [
  { path: '/', redirect: '/virtual-list' },
  {
    path: '/virtual-list',
    name: 'virtualList',
    component: VirtualList,
    meta: {
      title: '虚拟列表',
    },
  },
  {
    path: '/drag',
    name: 'drag',
    component: Drag,
    meta: {
      title: '元素拖拽',
    },
  },
  {
    path: '/move',
    name: 'move',
    component: Move,
    meta: {
      title: '元素平移',
    },
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: Tooltip,
    meta: {
      title: 'Tooltip',
    },
  },
  {
    path: '/element-plus/form',
    name: 'elementPlusForm',
    component: ElementPlusForm,
    meta: {
      title: 'element-plus-form',
    },
  },
  {
    path: '/element-plus/descriptions',
    name: 'elementPlusDescriptions',
    component: ElementPlusDescriptions,
    meta: {
      title: 'element-plus-descriptions',
    },
  },
  {
    path: '/vxe-table/list',
    name: 'vxeTableList',
    component: VxeTableList,
    meta: {
      title: 'vxe-table-list',
    },
  },
  {
    path: '/vxe-table/table',
    name: 'vxeTableTable',
    component: VxeTableTable,
    meta: {
      title: 'vxe-table-table',
    },
  },
  {
    path: '/:pathMath(.*)*',
    redirect: '/virtual-list',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach((to) => {
  // 设置页面的标题
  document.title = to.meta.title
})

export default router
