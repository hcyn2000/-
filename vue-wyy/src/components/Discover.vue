<template>
  <!-- 轮播图以下部分 -->
  <div id="discover-module" class="g-bd1 f-cb">
    <div class="g-mn1">
      <div class="g-mn1c">
        <div class="g-wrap3">
          <!-- 热门推荐 -->
          <Recommend></Recommend>

          <!-- 隔板 -->
          <div id="j-music-ad" class="n-clmnad" data-has-music-ad="0">
            <div class="j-flag f-hide" id="auto-id-9UqbFKIrzIskcTHW"></div>
          </div>

          <!-- 新碟上架 -->
          <NewDisc></NewDisc>

          <!-- 榜单 -->
          <SongList></SongList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Recommend from "@/components/Recommend.vue";
import NewDisc from "@/components/NewDisc.vue";
import SongList from "@/components/SongList.vue";

export default {
  components: {
    Recommend,
    NewDisc,
    SongList,
  },
};
</script>

<style lang="less">
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.g-bd1 {
  background: url(../images/wrap1.png) repeat-y 100% 100%;
}
.g-mn1 {
  float: left;
  width: 100%;
  margin-right: -250px;
}
.g-mn1c {
  margin-right: 251px;
}
.g-wrap3 {
  padding: 20px 20px 40px;
}

// 共同属性
// 头部
.v-hd2 {
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px !important;
  border-bottom: 2px solid #c10d0c;
}
.f-tdn,
.f-tdn:hover {
  text-decoration: none;
}
.v-hd2 .tit {
  float: left;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
}
.v-hd2 .tab {
  float: left;
  margin: 7px 0 0 20px;
}
.v-hd2 .tab .line {
  margin: 0 10px;
  color: #ccc;
}
.v-hd2 .more {
  float: right;
  margin-top: 9px;
  _margin-top: 11px;
}
.s-bg-6 {
  background-position: 0 -240px !important;
}
.v-hd2 .more .cor,
.v-hd3 .more .cor {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 4px;
  vertical-align: middle;
}
// 共同属性
// 内容
.f-fr {
  float: right;
}
.u-cover .icon-headset,
.u-cover .icon-play {
  display: inline-block;
}
.u-cover .icon-play {
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background-position: 0 0 !important;
}
.u-cover-0 .icon-play,
.u-cover-alb1 .icon-play,
.u-cover-10 .icon-play,
.u-cover-11 .icon-play,
.u-cover-12 .icon-play {
  left: 72px;
  width: 22px;
  height: 22px;
  background-position: 0 -85px !important;
}
.u-cover-alb1 .icon-play,
.u-cover-alb2 .icon-play,
.u-cover-alb3 .icon-play {
  display: none;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.u-cover .msk {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

// 隔板
.n-clmnad {
  position: relative;
  margin: 0 0 35px;
}
</style>