<template>
  <!-- 搜索部分 -->
  <div class="m-srch f-pr j-suggest">
    <div class="srchbg">
      <span class="parent">
        <input
          type="text"
          name="srch"
          v-model="word"
          class="txt j-flag"
          style="opacity: 1"
          @focus="getFocus"
          @blur="getBlur"
          ref="gain"
        />
        <label class="ph j-flag" @click="clickSearch" v-show="disappear"
          >音乐/视频/电台/用户</label
        >
      </span>
    </div>
    <span
      class="j-flag"
      style="/* display:none; */"
      id="auto-id-LGxeUo3r2np1gqqB"
      >&nbsp;</span
    >
    <div class="u-lstlay j-flag" v-show="searchDisplay && word !== ''">
      <div class="m-schlist">
        <p class="note s-fc3">
          <router-link class="s-fc3 xtag" to=""
            >搜“{{ this.word }}” 相关用户</router-link
          >
          &gt;
        </p>
        <div class="rap">
          <!-- 单曲 -->
          <div class="itm f-cb" v-show="songs.length">
            <h3 class="hd">
              <i class="icn u-icn u-icn-26"></i><em class="f-fl">单曲</em>
            </h3>
            <ul class="f-cb">
              <!-- 循环单曲 -->
              <li v-for="item in songs" :key="item.id">
                <router-link
                  class="s-fc0 f-thide xtag"
                  to=""
                  @mousedown.native="PageJump(item.id)"
                  >{{ item.name }}-{{ item.artists[0].name }}</router-link
                >
              </li>
            </ul>
          </div>
          <!-- 歌手 -->
          <div class="itm f-cb" v-show="singer.length">
            <h3 class="hd">
              <i class="icn u-icn u-icn-27"></i><em class="f-fl">歌手</em>
            </h3>
            <ul class="odd f-cb">
              <!-- 循环歌手 -->
              <li v-for="item in singer" :key="item.id">
                <router-link class="s-fc0 f-thide xtag" to="#" data-type="">{{
                  item.name
                }}</router-link>
              </li>
            </ul>
          </div>
          <!-- 专辑 -->
          <div class="itm f-cb" v-show="albums.length">
            <h3 class="hd">
              <i class="icn u-icn u-icn-28"></i><em class="f-fl">专辑</em>
            </h3>
            <ul class="f-cb">
              <!-- 循环专辑 -->
              <li v-for="item in albums" :key="item.id">
                <router-link class="s-fc0 f-thide xtag" to="#" data-type=""
                  >{{ item.name }}-{{ item.artist.name }}</router-link
                >
              </li>
            </ul>
          </div>
          <!-- 歌单 -->
          <div class="itm f-cb" v-show="songSheet.length">
            <h3 class="hd">
              <i class="icn u-icn u-icn-29"></i><em class="f-fl">歌单</em>
            </h3>
            <ul class="odd f-cb">
              <!-- 循环歌单 -->
              <li v-for="item in songSheet" :key="item.id">
                <router-link class="s-fc0 f-thide xtag" to="#" data-type="">{{
                  item.name
                }}</router-link>
              </li>
            </ul>
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
      disappear: true, // 搜索上的:音乐/视频/电台/用户 是否显示
      searchDisplay: false, // 搜索结果是否显示
      word: "", // 搜索框输入的值
      songs: [], // 推荐歌曲
      singer: [], // 推荐歌手
      albums: [], // 推荐专辑
      songSheet: [], // 推荐歌单
    };
  },
  methods: {
    // 请求搜索接口
    getSearchSuggestions() {
      const params = {
        keywords: this.word,
      };
      api.SearchSuggestions(params).then((res) => {
        // console.log(res);
        if (res.result.songs) {
          this.songs = res.result.songs;
        } else {
          this.songs = [];
        }
        if (res.result.artists) {
          this.singer = res.result.artists;
        } else {
          this.singer = [];
        }
        if (res.result.albums) {
          this.albums = res.result.albums;
        } else {
          this.albums = [];
        }
        if (res.result.playlists) {
          this.songSheet = res.result.playlists;
        } else {
          this.songSheet = [];
        }
      });
    },
    // 输入框获得焦点
    getFocus() {
      this.searchDisplay = true;
    },
    // 输入框失去焦点
    getBlur() {
      if (this.word) {
        this.disappear = false;
      } else {
        this.disappear = true;
      }
      this.searchDisplay = false;
    },
    // 点击搜索
    clickSearch() {
      this.disappear = false;
      this.$refs.gain.focus();
    },
    // 页面跳转
    PageJump(id) {
      // console.log(id);
      this.$router.push({ path: "/song", query: { id: id } });
      // this.$router.go(0);
    },
  },
  watch: {
    word() {
      this.getSearchSuggestions();
    },
  },
};
</script>

<style lang="less">
.m-srch,
.m-srch .srchbg {
  float: right;
  width: 158px;
  height: 32px;
}
.m-srch {
  .srchbg {
    margin-top: 19px;
    background-position: 0 -99px !important;
    background-color: #fff !important;
    border-radius: 32px;
  }
  .parent {
    display: block;
    position: relative;
    margin: 8px 0 0 30px;
    input {
      width: 95%;
      margin: 0;
      padding: 0;
      background: transparent !important;
      color: #333;
      line-height: 16px;
    }
    label {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 90%;
      color: #9b9b9b;
      cursor: text;
    }
  }
  .u-showoff {
    position: absolute;
    top: 108px;
    left: 16px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    background-color: #fe5555 !important;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    font-size: 16px;
  }
  .u-lstlay {
    clear: both;
    top: 59px;
    width: 240px;
  }
}

.u-lstlay {
  position: absolute;
  z-index: 120;
  left: 0;
  box-sizing: border-box;
  border: 1px solid #bebebe;
  border-radius: 4px;
  background: #fff !important;
  box-shadow: 0 4px 7px #555;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
}

.m-schlist {
  .note {
    height: 42px;
    height: 17px;
    padding: 11px 10px;
    border-bottom: 1px solid #e2e2e2;
  }
  .hd {
    float: left;
    width: 52px;
    margin-right: -100px;
    padding: 10px 0 0 10px;
    *padding-top: 9px;
    border-right: 1px solid #e2e2e2;
    line-height: 17px;
    *line-height: 19px;
    font-weight: normal;
  }
  .hd .icn {
    float: left;
    margin: 2px 4px 0 0;
  }
  ul {
    margin-left: 62px;
    margin-top: -1px;
    padding: 6px 0 5px;
    border-top: 1px solid #e2e2e2;
    border-left: 1px solid #e2e2e2;
    .odd {
      background: #f9f8f8 !important;
    }
  }
  li {
    width: 100%;
    float: left;
    a {
      display: block;
      width: 100%;
      text-indent: 12px;
      line-height: 24px;
    }
  }
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
</style>