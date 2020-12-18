import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  MusicUrl: '', // 音乐播放地址
  play: false,  // 图标变成播放状态
  details: [], //  歌曲详情
}

export default new Vuex.Store({
  state,
  mutations: {
    // 拿到歌曲url
    modifyUrl(state, url) {
      state.MusicUrl = url
    },
    // 图标变成播放状态
    ClickPlay(state, play) {
      state.play = play
    },
    // 播放暂停图标变化
    PlayPause(state, IconStatus) {
      state.play = IconStatus
    },
    // 歌曲详情
    details(state, details) {
      state.details = details
    }
  },
  modules: {
  }
})
