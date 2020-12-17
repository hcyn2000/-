import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  MusicUrl: ''
}

export default new Vuex.Store({
  state,
  mutations: {
    modifyUrl(state, url) {
      state.MusicUrl = url
    }
  },
  actions: {
  },
  modules: {
  }
})
