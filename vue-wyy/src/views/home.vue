<template>
  <div>
    <!-- 轮播图 -->
    <Rotation></Rotation>
    <!-- 热门推荐 新碟上架 榜单 -->
    <Discover></Discover>
  </div>
</template>

<script>
import Rotation from "@/components/Rotation.vue";
import Discover from "@/components/Discover.vue";
export default {
  components: {
    Rotation,
    Discover,
  },
};
</script>

<style lang="less">
</style>