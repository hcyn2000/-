<template>
  <div class="g-btmbar">
    <div
      class="m-playbar m-playbar-lock"
      style="top: -53px; visibility: visible"
      id="auto-id-c2GLMHWs4eLCFJPS"
    >
      <div class="updn">
        <div class="left f-fl">
          <a
            href="javascript:;"
            class="btn"
            hidefocus="true"
            data-action="lock"
          ></a>
        </div>
        <div class="right f-fl"></div>
      </div>
      <div class="bg"></div>
      <div class="hand" title="展开播放条"></div>
      <div class="wrap" id="g_player" style="margin-left: -498.5px">
        <div class="btns">
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="prev"
            class="prv"
            title="上一首(ctrl+←)"
            >上一首</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="play"
            class="ply j-flag"
            :class="{ pas: play }"
            @click="ClickToPause"
            title="播放/暂停(p)"
            >播放/暂停</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="next"
            class="nxt"
            title="下一首(ctrl+→)"
            >下一首</a
          >
        </div>
        <div class="head j-flag">
          <img
            src="https://p1.music.126.net/wRWdpTaB7tCKS1TQTLv8BA==/109951165531747155.jpg?param=34y34"
          /><a href="/song?id=1803349526" hidefocus="true" class="mask"></a>
        </div>
        <div class="play">
          <div class="j-flag words">
            <router-link
              hidefocus="true"
              to="/song?id=1803349526"
              class="f-thide name fc1 f-fl"
              title="野心"
              >野心</router-link
            >
            <a
              hidefocus="true"
              href="/mv?id=10782615"
              class="mv f-fl"
              title="MV"
            ></a
            ><span class="by f-thide f-fl"
              ><span title="薛之谦"
                ><a class="" href="/artist?id=5781" hidefocus="true"
                  >薛之谦</a
                ></span
              ></span
            >
          </div>
          <div class="m-pbar" data-action="noop">
            <div class="barbg j-flag" id="auto-id-TDQQfxo6Uqonf9zp">
              <div class="rdy" style="width: 100%"></div>
              <div class="cur" style="width: 13.0455%">
                <span class="btn f-tdn f-alpha" id="auto-id-hElshQZwSMWwnzct"
                  ><i></i
                ></span>
              </div>
            </div>
            <span class="j-flag time"><em>00:28</em> / 03:40</span>
          </div>
        </div>
        <!-- <div class="oper f-fl">
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="like"
            class="icn icn-add j-flag"
            title="收藏"
            >收藏</a
          >
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="share"
            class="icn icn-share"
            title="分享"
            >分享</a
          >
        </div> -->
        <!-- <div class="ctrl f-fl f-pr j-flag">
          <div
            class="m-vol"
            style="visibility: hidden"
            id="auto-id-B76iwWfhWcQOQirK"
          >
            <div class="barbg"></div>
            <div class="vbg j-t" id="auto-id-A5rcsRTLfzV828tX">
              <div class="curr j-t" style="height: 35.5926px"></div>
              <span class="btn f-alpha j-t" style="top: 50px"></span>
            </div>
          </div>
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="volume"
            class="icn icn-vol"
          ></a>
          <a
            href="javascript:;"
            hidefocus="true"
            data-action="mode"
            class="icn icn-loop"
            title="循环"
          ></a>
          <span class="add f-pr">
            <span class="tip" style="display: none">已添加到播放列表</span>
            <a
              href="javascript:;"
              title="播放列表"
              hidefocus="true"
              data-action="panel"
              class="icn icn-list s-fc3"
              >12</a
            >
          </span>
          <div class="tip tip-1" style="display: none">循环</div>
        </div> -->
      </div>
    </div>
    <audio autoplay="autoplay" :src="this.$store.state.MusicUrl"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      play: false, // 是否播放
    };
  },
  methods: {
    ClickToPause() {
      this.play = !this.play;
    },
  },
};
</script>

<style lang="less">
.g-btmbar {
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
}
.m-playbar {
  position: absolute;
  zoom: 1;
  top: -53px;
  left: 0;
  width: 100%;
  height: 53px;
  margin: 0 auto;
}
.m-playbar .bg {
  height: 53px;
  zoom: 1;
  margin-right: 67px;
  background-position: 0 0 !important;
  background-repeat: repeat-x !important;
}
.m-playbar .wrap {
  position: absolute;
  left: 50%;
  top: 6px;
  z-index: 15;
  width: 980px;
  height: 47px;
  margin: 0 auto;
  margin-left: -490px;
}
.m-playbar .btns,
.m-playbar .head,
.m-playbar .play,
.m-playbar .volum,
.m-playbar .oper {
  float: left;
}
//
.m-playbar .updn {
  position: relative;
  z-index: 11;
}
.m-playbar .updn .left {
  position: absolute;
  top: -14px;
  right: 15px;
  width: 52px;
  height: 67px;
  background-position: 0 -380px !important;
}
.m-playbar .updn .right {
  position: absolute;
  top: -1px;
  right: 0;
  width: 15px;
  height: 54px;
  background-position: -52px -393px !important;
  pointer-events: none;
}

// 播放暂停
.m-playbar .btns {
  width: 137px;
  padding: 6px 0 0 0;
}
.m-playbar .btns a {
  display: block;
  float: left;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  margin-top: 5px;
  text-indent: -9999px;
}
.m-playbar .btns .prv {
  background-position: 0 -130px !important;
}
.m-playbar .btns .ply {
  width: 36px;
  height: 36px;
  margin-top: 0;
  background-position: 0 -204px !important;
}
.m-playbar .btns .nxt {
  background-position: -80px -130px !important;
}
.m-playbar .btns .pas {
  background-position: 0 -165px !important;
}
.m-playbar .btns .pas:hover {
  background-position: -40px -165px;
}

// 歌曲图片
.m-playbar .head,
.m-playbar .head img {
  width: 34px;
  height: 34px;
}
.m-playbar .head {
  position: relative;
  margin: 6px 15px 0 0;
}
.m-playbar .head .mask {
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 34px;
  height: 35px;
  background-position: 0 -80px !important;
}
// 滚动条歌名部分
.m-playbar .play {
  position: relative;
  width: 608px;
}
// 歌名部分
.m-playbar .words {
  height: 28px;
  overflow: hidden;
  color: #e8e8e8;
  text-shadow: 0 1px 0 #171717;
  line-height: 28px;
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.m-playbar .words .fc1 {
  color: #e8e8e8;
}
.m-playbar .words .name {
  max-width: 300px;
}
.m-playbar .words .mv {
  width: 19px;
  height: 17px;
  margin: 6px 0 0 3px;
  background-position: 0 -57px !important;
}
.m-playbar .words .by {
  max-width: 220px;
  margin-left: 15px;
  color: #9b9b9b;
}
.m-playbar .words .by a {
  color: #9b9b9b;
}
// 进度条
.m-pbar {
  position: relative;
  *zoom: 1;
}
.m-pbar,
.m-pbar .barbg {
  width: 493px;
}
.m-pbar .barbg,
.m-pbar .cur,
.m-pbar .rdy {
  height: 9px;
  background-position: right 0 !important;
}
.m-pbar .rdy {
  background-position: right -30px !important;
}
.m-pbar .cur {
  position: absolute;
  top: 0;
  left: 0;
  width: 1%;
  background-position: left -66px !important;
}
.m-pbar .btn,
.m-vol .btn {
  background: url(../images/iconall.png) no-repeat;
}
.m-pbar .btn {
  position: absolute;
  top: -7px;
  right: -13px;
  width: 22px;
  height: 24px;
  margin-left: -11px;
  background-position: 0 -250px;
}
.m-pbar .btn i {
  visibility: hidden;
  position: absolute;
  left: 5px;
  top: 5px;
  width: 12px;
  height: 12px;
  background: url(../images/loading.gif);
}
.m-pbar .time {
  position: absolute;
  top: -3px;
  right: -84px;
  color: #797979;
  text-shadow: 0 1px 0 #121212;
}
.m-pbar .time em {
  color: #a1a1a1;
}
</style>