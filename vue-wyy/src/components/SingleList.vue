<template>
  <!-- 首页榜单组件 -->
  <dl class="blk" :class="{ 'blk-1': index === 2 }">
    <dt class="top">
      <div class="cver u-cover u-cover-4">
        <img class="j-img" :src="ListName.coverImgUrl" />
        <router-link to="" class="msk" :title="ListName.name"></router-link>
      </div>
      <div class="tit">
        <router-link to="" :title="ListName.name"
          ><h3 class="f-fs1 f-thide">{{ ListName.name }}</h3></router-link
        >
        <div class="btn">
          <router-link
            to="javascript:;"
            class="s-bg s-bg-9 f-tdn"
            hidefocus="true"
            title="播放"
            data-res-type="13"
            data-res-id="19723756"
            data-res-action="play"
            data-res-from="31"
            data-res-data="19723756"
            >播放</router-link
          >
          <router-link
            to="javascript:;"
            hidefocus="true"
            class="s-bg s-bg-10 f-tdn subscribe-flag"
            data-plid="19723756"
            title="收藏"
            >收藏</router-link
          >
        </div>
      </div>
    </dt>
    <dd>
      <ol>
        <li
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave(index)"
          :class="{ 'z-hvr': num === index }"
          v-for="(item, index) in ListDetails"
          :key="index"
        >
          <span class="no" :class="{ 'no-top': index + 1 < 4 }">{{
            index + 1
          }}</span>
          <router-link
            to="/song?id=1492049185"
            class="nm s-fc0 f-thide"
            :title="item.name"
            >{{ item.name }}</router-link
          >
          <div class="oper">
            <router-link
              to="#"
              class="s-bg s-bg-11"
              title="播放"
              hidefocus="true"
              data-res-type="18"
              data-res-id="1492049185"
              data-res-action="play"
              data-res-from="31"
              data-res-data="19723756"
            ></router-link>
            <router-link
              to="#"
              class="u-icn u-icn-81"
              title="添加到播放列表"
              hidefocus="true"
              data-res-type="18"
              data-res-id="1492049185"
              data-res-action="addto"
              data-res-from="31"
              data-res-data="19723756"
            ></router-link>
            <router-link
              to="#"
              class="s-bg s-bg-12"
              title="收藏"
              hidefocus="true"
              data-res-level="0"
              data-res-fee="8"
              data-res-type="18"
              data-res-id="1492049185"
              data-res-action="subscribe"
            ></router-link>
          </div>
        </li>
      </ol>
      <div class="more">
        <router-link to="/discover/toplist?id=19723756" class="s-fc0"
          >查看全部&gt;</router-link
        >
      </div>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
    },
    ListName: {
      type: Object,
    },
    ListDetails: {
      type: Array,
    },
  },
  data() {
    return {
      num: -1,
    };
  },
  methods: {
    mouseOver(index) {
      this.num = index;
      // console.log(index);
    },
    mouseLeave() {
      this.num = -1;
    },
  },
};
</script>

<style lang="less">
// 一个整体
.n-bilst {
  .blk {
    float: left;
    width: 230px;
  }
  .blk-1 {
    width: 228px;
  }
  // 头部
  .top {
    height: 100px;
    padding: 20px 0 0 19px;
  }
  .cver {
    float: left;
    display: inline;
  }
  .tit {
    float: left;
    width: 116px;
    margin: 6px 0 0 10px;
    h3 {
      width: 100%;
    }
  }
  .btn {
    margin-top: 10px;
    a {
      display: block;
      float: left;
      width: 22px;
      height: 22px;
      margin-right: 10px;
      text-indent: -9999px;
    }
  }
  // 歌曲
  ol {
    height: 319px;
    margin-left: 50px;
    line-height: 32px;
    li {
      height: 32px;
      * {
        vertical-align: middle;
      }
    }
    .no {
      float: left;
      position: relative;
      width: 35px;
      height: 32px;
      margin-left: -35px;
      text-align: center;
      color: #666;
      font-size: 16px;
    }
    .no-top {
      color: #c10d0c;
    }
    .nm {
      float: left;
      width: 170px;
      height: 32px;
    }
    .oper {
      display: none;
      float: right;
      width: 82px;
      margin-top: 7px;
      a {
        float: left;
        width: 17px;
        height: 17px;
        margin-right: 10px;
      }
      .u-icn-81 {
        margin: 2px 6px 0 0;
      }
    }
  }
  .more {
    clear: both;
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
  }
}

.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.u-cover-4 .msk {
  background-position: -145px -57px !important;
}

.n-bilst ol li.z-hvr .nm,
.n-bilst ol li:hover .nm {
  width: 96px;
}
.n-bilst ol li.z-hvr .oper {
  display: block;
}
</style>