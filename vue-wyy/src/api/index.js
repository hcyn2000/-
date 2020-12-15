import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios
axios.defaults.timeout = 10000    // 设置网络请求最大时长
axios.defaults.baseURL = 'http://47.98.159.95/m-api'

// 返回状态判断 （响应拦截）
axios.interceptors.response.use(
  (res) => {
    if (res.data.code !== 200) {
      vue.$toast('网络出问题了！！！')
      return Promise.reject(res)
    }
    return res.data
  },
  (error) => {
    vue.$toast('服务器出问题了！！！')
    return Promise.reject(error)
  }
)

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
      .then(response => {
        resolve(response)
      },
        err => {
          reject(err)
        }
      ).catch(error => {
        reject(error)
      })
  })
}

export default {
  // 轮播图
  Banner(params) {
    return fetchGet('/banner', params)
  },
  // 推荐歌单
  Personalized(params) {
    return fetchGet('/personalized', params)
  },
  // 推荐电台
  RadioStation(params) {
    return fetchGet('/personalized/djprogram', params)
  },
  // 新碟上架
  NewDiscs(params) {
    return fetchGet('/album/newest', params)
  },
  // 所有榜单
  TopList(params) {
    return fetchGet('/toplist', params)
  },
  // 榜单详情
  ListDetails(params) {
    return fetchGet('/playlist/detail', params)
  },
  // 歌曲详情
  SongDetails(params) {
    return fetchGet('/song/detail', params)
  },
  // 搜索建议
  SearchSuggestions(params) {
    return fetchGet('/search/suggest', params)
  },
  // 全部歌单
  AllSongs(params) {
    return fetchGet('/top/playlist', params)
  },
}