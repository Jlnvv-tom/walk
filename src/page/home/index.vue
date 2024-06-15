<template>
  <div class="home-wrapper">
    <div class="home-wrapper__scroll" ref="homeWrapperScroll">
      <div class="home-wrapper__scroll-content">
        <HomeActive />
        <RentActive />
        <RentRecommandList :goodsListData="localGoodsListData" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, reactive, onMounted, onBeforeUnmount } from "vue";
import RentRecommandList from "./rent-recommand-list.vue";
import RentActive from "./rent-active.vue";
import HomeActive from "./home-active.vue";
import BScroll from "@better-scroll/core";
import { goodsListData } from "../server.ts";

const homeWrapperScroll = ref(null);
let bs = reactive({});
const localGoodsListData = ref(goodsListData);

const init = () => {
  bs = new BScroll(homeWrapperScroll.value, {
    scrollY: true, //沿Y轴滚动
    scrollX: true, //沿X轴滚动
    click: true, //派发点击事件
    probeType: 3, //反向偏移量
    eventPassthrough: "horizontal",
  });

  bs.on("scrollEnd", (pos) => {
    localGoodsListData.value = [...localGoodsListData.value, ...goodsListData];
  });
};

onMounted(() => {
  setTimeout(() => {
    nextTick(() => init());
  }, 1000);
});

onBeforeUnmount(() => {
  bs.destroy();
});
</script>

<style scoped lang="less">
.home-wrapper {
  height: 100%;
  &__scroll {
    overflow: hidden;
    height: 1000px;
  }
}
</style>
