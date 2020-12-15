import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './css/index.css'

// 轮播图
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // import 'swiper/css/swiper.css'
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper)

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
