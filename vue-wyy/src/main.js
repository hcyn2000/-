import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/index.css'
// import Vant from 'vant';
import 'vant/lib/index.css';

import { Slider } from 'vant';

// 轮播图
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // import 'swiper/css/swiper.css'
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper)

Vue.use(Slider);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
