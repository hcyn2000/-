<template>
  <!-- 轮播图 -->
  <div class="rotation">
    <div
      class="n-ban d-flag"
      id="index-banner"
      :style="{
        backgroundImage:
          'url(' + bannerList[currentIndex] + '?imageView&blur=40x20)',
        backgroundSize: '6000px',
        backgroundPosition: 'center center',
      }"
    >
      <div class="wrap">
        <div class="ban f-pr" style="z-index: 10">
          <!-- 轮播图片 -->
          <div class="ban-img">
            <router-link
              hidefocus="true"
              class="active d-flag"
              style="overflow: hidden"
              to="#"
              target="_blank"
            >
              <img
                class="d-flag"
                :src="bannerList[currentIndex]"
                :style="animation[this.num]"
              />
            </router-link>
          </div>
          <!-- 左箭头 -->
          <router-link
            hidefocus="true"
            to="javascript:void(0)"
            class="btnl click-flag f-alpha"
            @click="gotoPage(prevIndex)"
            >&lt;</router-link
          >
          <!-- 右箭头 -->
          <router-link
            hidefocus="true"
            to="javascript:void(0)"
            class="btnr click-flag f-alpha"
            @click="gotoPage(nextIndex)"
            >&gt;</router-link
          >
          <!-- 轮播图下面小点 -->
          <div class="dots f-cb">
            <router-link
              hidefocus="true"
              to="#"
              class="pg click-flag pg-flag f-alpha"
              v-for="(item, index) in bannerList"
              :key="index"
              @click="gotoPage(index)"
              :class="{ 'z-slt': currentIndex === index }"
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      bannerList: [],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
      animation: [
        "transition: opacity 1s ease-out 0s; opacity: 1",
        "transition: opacity 1s ease-in 0s ;opacity: 0.2;",
      ],
      num: 0,
    };
  },
  methods: {
    // 切换图片点击事件
    gotoPage(index) {
      this.currentIndex = index;
    },
    // 定时器
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 4500);
    },
    // 获取轮播图图片地址
    getBanner() {
      const params = {
        type: 0,
      };
      api.Banner(params).then((res) => {
        // console.log(res);
        for (let i = 0; i < res.banners.length; i++) {
          this.bannerList.push(res.banners[i].imageUrl);
        }
      });
    },
  },
  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.bannerList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.bannerList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
  },
  mounted() {
    this.runInv();
  },
  created() {
    this.getBanner();
  },
};
</script>

<style lang="less">
.n-ban {
  .wrap {
    position: relative;
    width: 982px;
    height: 285px;
    margin: 0 auto;
  }
  .ban {
    width: 982px;
    height: 285px;
    img {
      display: block;
      width: 730px;
      height: 100%;
    }
    .btnl {
      left: -68px;
      background-position: 0 -360px !important;
    }
    .btnr {
      right: -68px;
      background-position: 0 -508px !important;
    }
    .dots {
      position: absolute;
      top: 259px;
      left: 0;
      width: 730px;
      height: 20px;
      text-align: center;
    }
  }
  .dots .pg {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-position: 3px -343px !important;
  }
  .ban-img {
    width: 100%;
    height: 285px;
    overflow: hidden;
  }
}
.n-ban .ban .btnl,
.n-ban .ban .btnr {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  text-indent: -9999px;
}
.n-ban .dots .pg:hover,
.n-ban .dots .z-slt {
  background-position: -16px -343px !important;
}
</style>