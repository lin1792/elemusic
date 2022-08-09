import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import musicClubVue from '@/components/body/music-club.vue'
import musicRecommendVue from '@/components/body/music-recommend.vue'
import tiaoShiVue from '@/components/body/tiao-shi.vue'
import artistDetailVue from '@/components/body/artist-Detail.vue'
import mvBoFangVue from '@/components/body/mvBoFang.vue'
import playlistDetailVue from '@/components/body/playlist-Detail.vue'
import localPlayerVue from '@/components/body/local-player.vue'

const routes: Array<RouteRecordRaw> = [
  // 左侧导航栏大板块内容
  {
    path: '/',
    redirect: '/elerecommond'
  },
  {
    path: '/elerecommond',
    name: 'elerecommond',
    component: musicRecommendVue,
    alias: '/elerecommond',
    meta: { title: '首页' },
  },
  {
    path: '/eleclub',
    name: 'eleclub',
    component: musicClubVue,
    alias: '/eleclub',
    meta: { title: '音乐馆' }
  },
  {
    path: '/elevideo',
    name: 'ship',
    component: tiaoShiVue,
    alias: '/ship',
    meta: { title: '调试电台' }
  },
  // 推荐界面内容
  {
    path: '/MvDetail',
    name: 'MvDetail',
    component: mvBoFangVue,
    alias: '/MvDetail',
    meta: { title: 'MV' }
  },
  // 详情内容
  {
    path: '/artistDetail',
    name: 'artistDetail',
    component: artistDetailVue,
    alias: '/artistDetail',
    meta: { title: '歌手详情' }
  },
  {
    path: '/playlistDetail',
    name: 'playlistDetail',
    component: playlistDetailVue,
    alias: '/playlistDetail',
    meta: { title: '歌单详情' }
  },
  {
    path: '/local',
    name: 'local',
    component: localPlayerVue,
    alias: '/local',
    meta: { title: '本地歌曲' }
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
