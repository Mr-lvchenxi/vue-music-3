import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () =>
      import(/* webpackChunkName: "recommend" */ '../views/recommend/index.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () =>
      import(/* webpackChunkName: "singer" */ '../views/singer/index.vue')
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: () =>
      import(/* webpackChunkName: "topList" */ '../views/topList/index.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "search" */ '../views/search/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
