<template>
  <div id="app" class="g-topbar">
    <!-- 头部大字 -->
    <div class="m-top">
      <div class="wrap f-cb">
        <!-- 网易云logo -->
        <h1 class="logo">
          <router-link to="/" hidefocus="true">网易云音乐</router-link>
        </h1>
        <!-- 头部列表 -->
        <ul class="m-nav j-tflag">
          <li
            v-for="(item, index) in this.headerList"
            :key="index"
            @click="clickSelect(index)"
          >
            <span>
              <router-link
                :to="item.url"
                :class="{ 'z-slt': index === selectItem }"
                hidefocus="true"
              >
                <em>{{ item.name }}</em>
                <sub class="cor"></sub>
              </router-link>
            </span>
            <sup :class="{ hot: index === 5 }"></sup>
          </li>
        </ul>
        <!-- 登录 -->
        <div
          class="m-tophead f-pr j-tflag"
          @mouseover="MousePassing"
          @mouseout="MouseAway"
        >
          <router-link hidefocus="true" to="#" class="link s-fc3"
            >登录</router-link
          >
          <div class="m-tlist j-uflag" v-show="bright">
            <div class="inner"></div>
            <i class="arr"></i>
          </div>
        </div>
        <!-- 创作者中心 -->
        <router-link
          data-action="bilog"
          to="#"
          target="_blank"
          class="m-topvd f-pr m-creator-center"
          >创作者中心</router-link
        >
        <!-- 搜索 -->
        <Search></Search>
      </div>
    </div>
    <div
      class="m-subnav m-subnav-up f-pr j-tflag"
      :class="{ 'f-hide': selectItem === 0 }"
    ></div>
    <!-- 头部小字 -->
    <div
      id="g_nav2"
      class="m-subnav j-tflag"
      :class="{ 'f-hide': selectItem !== 0 }"
    >
      <div class="wrap f-pr">
        <ul class="nav">
          <li
            v-for="(item, index) in headerList2"
            :key="index"
            @click="clickSelect2(index)"
          >
            <router-link
              hidefocus="true"
              data-module="discover"
              :to="item.url"
              :class="{ 'z-slt': index === selectItem2 }"
              ><em
                :class="{ 'f-pr': index === 2 }"
                :style="{ padding: index === 2 ? '0 15px 0 11px' : '' }"
                >{{ item.name }}
                <span
                  v-if="index === 2"
                  class="f-pa f-r-white-icon"
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    top: 2px;
                    background-size: cover;
                  "
                ></span></em
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
    <Player></Player>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Player from "@/components/Player.vue";
export default {
  components: {
    Search,
    Player,
  },
  data() {
    return {
      headerList: [
        { name: "发现音乐", url: "/" },
        { name: "我的音乐", url: "/my" },
        { name: "朋友", url: "" },
        { name: "商城", url: "" },
        { name: "音乐人", url: "" },
        { name: "下载客户端", url: "" },
      ],
      headerList2: [
        { name: "推荐", url: "/" },
        { name: "排行榜", url: "/discover/toplist" },
        { name: "歌单", url: "/discover/playlist" },
        { name: "主播电台", url: "" },
        { name: "歌手", url: "" },
        { name: "新碟上架", url: "" },
      ],
      selectItem: 0, // 头部大列表选择
      selectItem2: 0, // 头部小列表选择
      bright: false, // 登录按钮变化
    };
  },
  methods: {
    // 点击选中
    clickSelect(index) {
      this.selectItem = index;
    },
    clickSelect2(index) {
      this.selectItem2 = index;
    },
    // 登录按钮变化
    MousePassing() {
      this.bright = true;
    },
    // 登录按钮变化
    MouseAway() {
      this.bright = false;
    },
  },
};
</script>
<style lang="less">
.g-topbar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  zoom: 1;
}
// 头部大字
.m-top {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  .wrap {
    width: 1100px;
    margin: 0 auto;
  }
  // 网易云logo
  .logo {
    float: left;
    width: 176px;
    height: 69px;
    background-position: 0 0 !important;
    a {
      float: left;
      width: 157px;
      height: 100%;
      padding-right: 20px;
      text-indent: -9999px;
    }
  }
  // 头部列表
  .m-nav {
    float: left;
    li {
      position: relative;
      *zoom: 1;
      background-position: right -300px;
    }
    a {
      padding: 0 19px;
      text-align: center;
      line-height: 70px;
      color: #ccc;
    }
    a.z-slt .cor {
      display: block;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      overflow: hidden;
      background-position: -226px 0;
    }
    .hot {
      display: block;
      position: absolute;
      top: 21px;
      left: 100px;
      width: 28px;
      height: 19px;
      background-position: -190px 0;
    }
  }
  .m-nav li,
  .m-nav li span,
  .m-nav a,
  .m-nav a em {
    float: left;
    height: 70px;
    font-size: 14px;
  }
  .m-nav li.lst,
  .m-nav li.fst span {
    background: none;
  }
  .m-nav a:hover,
  .m-nav a.z-slt {
    background: #000;
    text-decoration: none;
    color: #fff;
  }
  // 登录
  .m-tophead {
    float: right;
    height: 45px;
    margin: 19px 0 0 20px;
    padding: 0 22px 0 0;
    background-position: right -47px;
    background-image: none;
    a:hover {
      text-decoration: underline;
    }
    .m-tlist {
      position: absolute;
      top: 38px;
      right: -43px;
      width: 158px;
      background: #2b2b2b;
      border: 1px solid #202020;
      box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      .arr {
        position: absolute;
        top: -8px;
        left: 50%;
        width: 14px;
        height: 8px;
        margin-left: -7px;
        background-position: -20px 0;
      }
    }
  }
  .m-tophead:hover .link {
    color: #999;
  }
  .m-tophead .link,
  .m-tophead .link:hover {
    display: block;
    width: 28px;
    margin-top: 7px;
    color: #787878;
  }
  // 创作者中心
  .m-creator-center {
    background: none !important;
  }
  .m-topvd {
    float: right;
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4f4f4f;
    background-position: 0 -140px;
    line-height: 33px;
    color: #ccc;
    border-radius: 20px;
  }

  // 搜索
}
.m-subnav {
  z-index: 90;
  box-sizing: border-box;
  background-color: #c20c0c;
}
.m-subnav-up {
  height: 5px;
  border-bottom: none;
}
// 头部小字
.m-subnav {
  .wrap {
    width: 1100px;
    height: 34px;
    margin: 0 auto;
  }
  .nav {
    float: left;
    padding-left: 180px;
  }
  .nav a {
    color: #fff;
  }
  .nav a em {
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
  }
}
.m-subnav .nav li,
.m-subnav .nav a {
  float: left;
  height: 34px;
  text-align: center;
}
.m-subnav .nav a:hover,
.m-subnav .nav a.z-slt {
  color: #fff;
  text-decoration: none;
}
.m-subnav .nav a:hover em,
.m-subnav .nav a.z-slt em {
  background: #9b0909;
}
.f-r-white-icon {
  background: url(./images/white-r-icon@3x.png);
}
</style>
