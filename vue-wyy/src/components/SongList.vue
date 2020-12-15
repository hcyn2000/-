<template>
  <!-- 首页榜单 -->
  <div class="n-bill">
    <div class="v-hd2">
      <router-link to="/discover/toplist" class="tit f-ff2 f-tdn"
        >榜单</router-link
      >
      <span class="more"
        ><router-link to="/discover/toplist" class="s-fc3">更多</router-link
        ><i class="cor s-bg s-bg-6">&nbsp;</i></span
      >
    </div>
    <div class="n-bilst" id="top-flag">
      <!-- 榜单组件 -->
      <SingleList
        v-for="(item, index) in this.ListName"
        :key="index"
        :index="index"
        :ListName="item"
        :ListDetails="ListDetails[index]"
      ></SingleList>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import SingleList from "./SingleList.vue";
export default {
  components: {
    SingleList,
  },
  data() {
    return {
      ListName: [], // 三个榜单
      ListDetails: [], // 三个榜单详情
    };
  },
  methods: {
    // 获取所有榜单
    getTopList() {
      return new Promise((resolve) => {
        api.TopList().then((res) => {
          // console.log(res);
          for (let i = 0; i < 3; i++) {
            this.ListName.push(res.list[i]);
          }
          // console.log(this.ListName);
          resolve(res);
        });
      });
    },

    // 获取榜单详情
    getListDetails() {
      return new Promise((resolve) => {
        this.ListName.forEach((e, i) => {
          const params = {
            id: this.ListName[i].id,
          };
          api.ListDetails(params).then((res) => {
            // console.log(res);
            this.getSongDetails(res.playlist.trackIds);
            resolve(res);
          });
        });
      });
    },

    // 获取歌曲详情
    getSongDetails(ListDetails) {
      let params = {
        ids: "",
      };
      for (let i = 0; i < 10; i++) {
        params.ids = params.ids + ListDetails[i].id + ",";
      }
      params.ids = params.ids + ListDetails[9].id;

      api.SongDetails(params).then((res) => {
        // console.log(res);
        this.ListDetails.push(res.songs);
        // console.log(this.ListDetails);
      });
    },
  },
  created() {
    this.getTopList().then(this.getListDetails);
  },
};
</script>

<style lang="less">
.n-bilst {
  background: url(../images/index_bill.png) no-repeat;
}
.n-bilst {
  height: 472px;
  margin-top: 20px;
  padding-left: 1px;
}
</style>