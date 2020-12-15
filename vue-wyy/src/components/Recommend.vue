<template>
  <!-- 热门推荐 -->
  <div class="n-rcmd">
    <div class="v-hd2">
      <router-link to="/discover/playlist" class="tit f-ff2 f-tdn"
        >热门推荐</router-link
      >
      <div class="tab">
        <router-link to="" class="s-fc3">华语</router-link>
        <span class="line"> | </span>
        <router-link to="" class="s-fc3">流行</router-link>
        <span class="line"> | </span>
        <router-link to="" class="s-fc3">摇滚</router-link>
        <span class="line"> | </span>
        <router-link to="" class="s-fc3">民谣</router-link>
        <span class="line"> | </span>
        <router-link to="" class="s-fc3">电子</router-link>
      </div>
      <span class="more"
        ><router-link to="/discover/playlist" class="s-fc3">更多</router-link
        ><i class="cor s-bg s-bg-6">&nbsp;</i></span
      >
    </div>
    <ul class="m-cvrlst f-cb">
      <li v-for="(item, index) in songsList" :key="index">
        <div class="u-cover u-cover-1">
          <img :src="item.picUrl" />
          <router-link :title="item.name" to="" class="msk"></router-link>
          <div class="bottom">
            <router-link
              class="icon-play f-fr"
              title="播放"
              to="javascript:;"
            ></router-link>
            <span class="icon-headset"></span>
            <span class="nb"
              >{{
                index === 3 || index === 5 || index === 7
                  ? item.program.adjustedPlayCount > 10000
                    ? (item.program.adjustedPlayCount -
                        (item.program.adjustedPlayCount % 10000)) /
                        10000 +
                      "万"
                    : item.program.adjustedPlayCount
                  : item.playCount > 10000
                  ? (item.playCount - (item.playCount % 10000)) / 10000 + "万"
                  : item.playCount
              }}
            </span>
          </div>
        </div>
        <p class="dec">
          <router-link
            :title="item.name"
            class="tit s-fc0"
            to="/playlist?id=924680166"
          >
            <i
              class="u-icn u-icn-53"
              v-show="index === 3 || index === 5 || index === 7"
            ></i>
            {{ item.name }}
          </router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      songsList: [],
    };
  },
  methods: {
    // 推荐歌单
    getPersonalized() {
      const params = {
        limit: 5,
      };
      api.Personalized(params).then((res) => {
        // console.log(res);
        this.songsList = res.result;
        this.getRadioStation();
      });
    },
    // 推荐电台
    getRadioStation() {
      api.RadioStation().then((res) => {
        // console.log(res);
        this.songsList.splice(3, 0, res.result[0]);
        this.songsList.splice(5, 0, res.result[1]);
        this.songsList.push(res.result[2]);
      });
    },
  },
  created() {
    // 推荐歌单
    this.getPersonalized();
    // 推荐电台
    // this.getRadioStation();
  },
};
</script>

<style lang="less" important="true">
.n-rcmd .m-cvrlst {
  margin: 20px 0 0 -42px;
}
.m-cvrlst li {
  float: left;
  display: inline-block;
  width: 140px;
  height: 188px;
  overflow: hidden;
  padding: 0 0 30px 50px;
  line-height: 1.4;
  p {
    width: 100%;
  }
  .dec {
    margin: 8px 0 3px;
    font-size: 14px;
  }
  .tit {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
  }
  .dec i {
    position: relative;
    top: -1px;
    margin-right: 3px;
    vertical-align: middle;
  }
  p .u-icn {
    margin-top: -1px;
  }
}
.n-rcmd .m-cvrlst li {
  width: 140px;
  height: 204px;
  padding-left: 42px;
}
.u-cover {
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px !important;
    color: #ccc;
  }
  .icon-headset {
    float: left;
    width: 14px;
    height: 11px;
    background-position: 0 -24px !important;
    margin: 9px 5px 9px 10px;
  }
  .nb {
    float: left;
    margin: 7px 0 0 0;
  }
}
.u-cover-1 .msk {
  background-position: 0 0 !important;
}
.u-icn-53 {
  width: 35px;
  height: 15px;
  background-position: -31px -658px !important;
}
</style>