import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import musicClubVue from '@/components/body/music-club.vue'
import musicRecommendVue from '@/components/body/music-recommend.vue'
import tiaoShiVue from '@/components/body/tiao-shi.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/musicrecommond'
  },
  {
    path: '/elerecommond',
    name: 'musicrecommond',
    component: musicRecommendVue,
    alias: '/musicrecommond',
    meta: { title: '首页' }
  },
  {
    path: '/eleclub',
    name: 'musicclub',
    component: musicClubVue,
    alias: '/musicclub',
    meta: { title: '首页' }
  },
  {
    path: '/elevideo',
    name: 'ship',
    component: tiaoShiVue,
    alias: '/musicclub',
    meta: { title: '首页' }
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
