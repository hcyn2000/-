<template>
  <!-- 歌单页面 -->
  <div class="g-bd" id="m-disc-pl-c" @click.stop="ClickHide">
    <div class="g-wrap p-pl f-pr">
      <div class="u-title f-cb">
        <h3>
          <span class="f-ff2 d-flag">全部</span
          ><router-link
            to="javascript:;"
            class="u-btn2 u-btn2-1 menu d-flag"
            id="cateToggleLink"
            @click.stop="ClickDisplay"
            ><i>选择分类<em class="u-icn u-icn-38"></em></i
          ></router-link>
        </h3>
        <div class="u-btn f-fr u-btn-hot d-flag">
          <router-link to="/discover/playlist/" class="a1" data-order="hot"
            >热门</router-link
          >
        </div>
      </div>
      <div
        id="cateListBox"
        class="n-sltlyr d-flag"
        style="left: 0"
        :class="{ 'n-sltlyr-show': show }"
      >
        <div class="hd"><i class="icn"></i></div>
        <div class="bd">
          <h3>
            <router-link
              to="/discover/playlist/"
              class="j-flag u-btn u-btn-g s-fc1"
              data-cat="全部"
              ><em>全部风格</em></router-link
            >
          </h3>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-71"></i>语种</dt>
            <dd>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD"
                data-cat="华语"
                >华语</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%AC%A7%E7%BE%8E"
                data-cat="欧美"
              >
                欧美</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%97%A5%E8%AF%AD"
                data-cat="日语"
                >日语</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E9%9F%A9%E8%AF%AD"
                data-cat="韩语"
                >韩语</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E7%B2%A4%E8%AF%AD"
                data-cat="粤语"
                >粤语</router-link
              ><span class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-6"></i>风格</dt>
            <dd>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C"
                data-cat="流行"
                >流行</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%91%87%E6%BB%9A"
                data-cat="摇滚"
                >摇滚</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3"
                data-cat="民谣"
                >民谣</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E7%94%B5%E5%AD%90"
                data-cat="电子"
                >电子</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E8%88%9E%E6%9B%B2"
                data-cat="舞曲"
                >舞曲</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E8%AF%B4%E5%94%B1"
                data-cat="说唱"
                >说唱</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E8%BD%BB%E9%9F%B3%E4%B9%90"
                data-cat="轻音乐"
                >轻音乐</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E7%88%B5%E5%A3%AB"
                data-cat="爵士"
                >爵士</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E4%B9%A1%E6%9D%91"
                data-cat="乡村"
                >乡村</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=R%26B%2FSoul"
                data-cat="R&amp;B/Soul"
                >R&amp;B/Soul</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%8F%A4%E5%85%B8"
                data-cat="古典"
                >古典</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%B0%91%E6%97%8F"
                data-cat="民族"
                >民族</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E8%8B%B1%E4%BC%A6"
                data-cat="英伦"
                >英伦</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E9%87%91%E5%B1%9E"
                data-cat="金属"
                >金属</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%9C%8B%E5%85%8B"
                data-cat="朋克"
                >朋克</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E8%93%9D%E8%B0%83"
                data-cat="蓝调"
                >蓝调</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E9%9B%B7%E9%AC%BC"
                data-cat="雷鬼"
                >雷鬼</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90"
                data-cat="世界音乐"
                >世界音乐</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%8B%89%E4%B8%81"
                data-cat="拉丁"
                >拉丁</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=New%20Age"
                data-cat="New Age"
                >New Age</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%8F%A4%E9%A3%8E"
                data-cat="古风"
                >古风</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%90%8E%E6%91%87"
                data-cat="后摇"
                >后摇</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=Bossa%20Nova"
                data-cat="Bossa Nova"
                >Bossa Nova</router-link
              ><span class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-7"></i>场景</dt>
            <dd>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%B8%85%E6%99%A8"
                data-cat="清晨"
                >清晨</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%A4%9C%E6%99%9A"
                data-cat="夜晚"
                >夜晚</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%AD%A6%E4%B9%A0"
                data-cat="学习"
                >学习</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%B7%A5%E4%BD%9C"
                data-cat="工作"
                >工作</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%8D%88%E4%BC%91"
                data-cat="午休"
                >午休</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E4%B8%8B%E5%8D%88%E8%8C%B6"
                data-cat="下午茶"
                >下午茶</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%9C%B0%E9%93%81"
                data-cat="地铁"
                >地铁</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E9%A9%BE%E8%BD%A6"
                data-cat="驾车"
                >驾车</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E8%BF%90%E5%8A%A8"
                data-cat="运动"
                >运动</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%97%85%E8%A1%8C"
                data-cat="旅行"
                >旅行</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%95%A3%E6%AD%A5"
                data-cat="散步"
                >散步</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E9%85%92%E5%90%A7"
                data-cat="酒吧"
                >酒吧</router-link
              ><span class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-8"></i>情感</dt>
            <dd>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%80%80%E6%97%A7"
                data-cat="怀旧"
                >怀旧</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%B8%85%E6%96%B0"
                data-cat="清新"
                >清新</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%B5%AA%E6%BC%AB"
                data-cat="浪漫"
                >浪漫</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E4%BC%A4%E6%84%9F"
                data-cat="伤感"
                >伤感</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%B2%BB%E6%84%88"
                data-cat="治愈"
                >治愈</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%94%BE%E6%9D%BE"
                data-cat="放松"
                >放松</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%AD%A4%E7%8B%AC"
                data-cat="孤独"
                >孤独</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8"
                data-cat="感动"
                >感动</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%85%B4%E5%A5%8B"
                data-cat="兴奋"
                >兴奋</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%BF%AB%E4%B9%90"
                data-cat="快乐"
                >快乐</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%AE%89%E9%9D%99"
                data-cat="安静"
                >安静</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%80%9D%E5%BF%B5"
                data-cat="思念"
                >思念</router-link
              ><span class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-9"></i>主题</dt>
            <dd class="last">
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E7%BB%BC%E8%89%BA"
                data-cat="综艺"
                >综艺</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%BD%B1%E8%A7%86%E5%8E%9F%E5%A3%B0"
                data-cat="影视原声"
                >影视原声</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=ACG"
                data-cat="ACG"
                >ACG</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%84%BF%E7%AB%A5"
                data-cat="儿童"
                >儿童</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%A0%A1%E5%9B%AD"
                data-cat="校园"
                >校园</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%B8%B8%E6%88%8F"
                data-cat="游戏"
                >游戏</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=70%E5%90%8E"
                data-cat="70后"
                >70后</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=80%E5%90%8E"
                data-cat="80后"
                >80后</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=90%E5%90%8E"
                data-cat="90后"
                >90后</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E7%BD%91%E7%BB%9C%E6%AD%8C%E6%9B%B2"
                data-cat="网络歌曲"
                >网络歌曲</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=KTV"
                data-cat="KTV"
                >KTV</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E7%BB%8F%E5%85%B8"
                data-cat="经典"
                >经典</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E7%BF%BB%E5%94%B1"
                data-cat="翻唱"
                >翻唱</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%90%89%E4%BB%96"
                data-cat="吉他"
                >吉他</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E9%92%A2%E7%90%B4"
                data-cat="钢琴"
                >钢琴</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E5%99%A8%E4%B9%90"
                data-cat="器乐"
                >器乐</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=%E6%A6%9C%E5%8D%95"
                data-cat="榜单"
                >榜单</router-link
              ><span class="line">|</span>
              <router-link
                class="s-fc1"
                to="/discover/playlist/?cat=00%E5%90%8E"
                data-cat="00后"
                >00后</router-link
              ><span class="line">|</span>
            </dd>
          </dl>
        </div>
        <div class="ft"></div>
      </div>
      <ul class="m-cvrlst f-cb" id="m-pl-container">
        <li v-for="(item, index) in songSheets" :key="index">
          <div class="u-cover u-cover-1">
            <img class="j-flag" :src="item.coverImgUrl" />
            <router-link
              :title="item.name"
              to="/playlist?id=5324875729"
              class="msk"
            ></router-link>
            <div class="bottom">
              <router-link
                class="icon-play f-fr"
                title="播放"
                to="javascript:;"
                data-res-type="13"
                data-res-id="5324875729"
                data-res-action="play"
              ></router-link>
              <span class="icon-headset"></span>
              <span class="nb">{{
                item.playCount > 10000
                  ? (item.playCount - (item.playCount % 10000)) / 10000 + "万"
                  : item.playCount
              }}</span>
            </div>
          </div>
          <p class="dec">
            <router-link
              :title="item.name"
              to="/playlist?id=5324875729"
              class="tit f-thide s-fc0"
              >{{ item.name }}}</router-link
            >
          </p>
          <p>
            <span class="s-fc4">by </span>
            <router-link
              :title="item.creator.nickname"
              to="/user/home?id=108952364"
              class="nm nm-icn f-thide s-fc3"
              >{{ item.creator.nickname }}}</router-link
            >
            <sup class="u-icn u-icn-84"></sup>
          </p>
        </li>
      </ul>
      <div id="m-pl-pager">
        <div class="u-page">
          <router-link
            to=""
            class="zbtn zprv"
            :class="{ 'js-disabled': pageNo === 0 }"
            @click.native="previousPage"
            >上一页</router-link
          >
          <router-link
            v-for="(item, index) in totalPages"
            :key="index"
            :to="{}"
            class="zpgi"
            :class="{ 'js-selected': index === pageNo }"
            @click.native="btnClick(index)"
            >{{ item }}</router-link
          >
          <router-link
            to=""
            class="zbtn znxt"
            :class="{ 'js-disabled': pageNo === 9 }"
            @click.native="nextPage"
            >下一页</router-link
          >
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
      show: false,
      songSheets: [], // 歌单
      num: 0, // 分页
      pageNo: 0, //当前页
      totalPages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // 总页数
    };
  },
  methods: {
    // 出现选择分类
    ClickDisplay() {
      this.show = !this.show;
    },
    // 隐藏选择分类
    ClickHide() {
      this.show = false;
    },
    // 获取全部歌单
    getAllSongs() {
      const params = {
        limit: 35,
        offset: this.num,
      };
      api.AllSongs(params).then((res) => {
        // console.log(res);
        for (let i = 0; i < res.playlists.length; i++) {
          this.songSheets.push(res.playlists[i]);
        }
      });
    },
    // 点击换页
    btnClick(index) {
      console.log(this.pageNo);
      this.num = index * 35;
      this.songSheets = [];
      this.getAllSongs();
      this.pageNo = index;
    },
    // 上一页
    previousPage() {
      if (this.pageNo > 0) {
        this.pageNo--;
        this.num -= 35;
        this.songSheets = [];
        this.getAllSongs();
      } else {
        return;
      }
    },
    // 下一页
    nextPage() {
      if (this.pageNo >= 0 && this.pageNo < 9) {
        this.pageNo++;
        this.num += 35;
        this.songSheets = [];
        this.getAllSongs();
      } else {
        return;
      }
    },
  },
  created() {
    this.getAllSongs();
  },
};
</script>

<style lang="less">
// 头部部分
.u-title h3 {
  float: left;
  font-size: 24px;
  font-weight: normal;
}
.u-btn2,
.u-btn2 i {
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
.u-title .menu {
  font-size: 12px;
  font-weight: normal;
  margin: 2px 0 0 12px;
}
.u-btn2 i {
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btn2-1 i {
  color: #333;
  background-position: 0 -59px;
}
.u-title .menu i {
  color: #0c73c2 !important;
  padding: 0 10px 0 15px;
}
.u-title .menu .u-icn-38 {
  margin-left: 5px;
}
// 选择分类部分
.n-sltlyr {
  display: none;
  position: absolute;
  top: 75px;
  z-index: 5;
  width: 720px;
}
.n-sltlyr-show {
  display: block;
}
.n-sltlyr .hd {
  height: 32px;
}
.n-sltlyr .icn {
  position: absolute;
  top: 2px;
  left: 132px;
  display: inline-block;
  width: 24px;
  height: 11px;
  background-position: -48px 0;
  vertical-align: middle;
}
.n-sltlyr .bd {
  width: 700px;
  padding: 0 10px;
  background-position: -720px 0;
  background-repeat: repeat-y;
}
.n-sltlyr h3 {
  height: 37px;
  padding-left: 26px;
  border-bottom: 1px solid #e6e6e6;
  font-weight: normal;
}
.n-sltlyr dt {
  float: left;
  display: inline;
  width: 70px;
  margin: 0 -100px 0 26px;
  padding-top: 15px;
  border-right: 1px solid #e6e6e6;
  font-weight: bold;
}
.n-sltlyr .u-icn {
  margin-right: 8px;
  margin-bottom: 4px;
}
.n-sltlyr dd {
  margin-left: 96px;
  padding: 16px 15px 0 15px;
  border-left: 1px solid #e6e6e6;
  line-height: 24px;
}
.n-sltlyr dd.last {
  padding-bottom: 25px;
}
.n-sltlyr dd a {
  white-space: nowrap;
}
.n-sltlyr dd .line {
  margin: 0 8px 0 10px;
  color: #d8d8d8;
}
.n-sltlyr .ft {
  height: 20px;
  background-position: -1440px -12px;
}
// 歌单部分
.p-pl .m-cvrlst {
  margin: 30px 0 0 -50px;
}

// 分页部分
div.u-page {
  margin: 20px 0;
  text-align: center;
}
div.u-page .zbtn,
div.u-page .zpgi {
  margin: 0 1px 0 2px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  vertical-align: middle;
}
div.u-page .zbtn {
  width: 69px;
  height: 24px;
  line-height: 24px;
  color: #333;
  text-align: left;
  padding: 0;
}
div.u-page .zprv {
  width: 47px;
  padding-left: 22px;
  background-position: 0 -560px;
}
div.u-page a.zprv.js-disabled,
div.u-page a.zprv.js-disabled:hover {
  background-position: 0 -620px;
  color: #cacaca;
  cursor: default;
}
div.u-page .zpgi {
  height: 22px;
  padding: 0 8px;
  background-color: #fff;
  line-height: 22px;
}
div.u-page a.js-selected,
div.u-page a.js-selected:hover {
  background-position: 0 -650px;
  border-color: #a2161b;
  color: #fff;
  cursor: default;
}
div.u-page .znxt {
  width: 57px;
  padding-left: 12px;
  background-position: -75px -560px;
}
div.u-page a.znxt.js-disabled,
div.u-page a.znxt.js-disabled:hover {
  background-position: -75px -620px;
  color: #cacaca;
  cursor: default;
}
</style>