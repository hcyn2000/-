import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/discover',
  //   name: 'Discover',
  //   component: Discover
  // },
  {
    // 歌单页面
    path: '/discover/playlist',
    name: 'Playlist',
    component: () => import('../views/Playlist.vue')
  },
  {
    // 单曲页面
    path: '/song',
    name: 'Song',
    component: () => import('../views/Song.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
