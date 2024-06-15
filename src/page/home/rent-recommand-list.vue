<template>
  <LayoutCard title="租物推荐">
    <div class="goods-list">
      <GoodsCard
        v-for="(item, index) in goodsListData"
        :key="index"
        v-bind="item"
      ></GoodsCard>
    </div>
  </LayoutCard>
</template>

<script setup lang="ts">
import LayoutCard from "../../components/layout-card.vue";
import GoodsCard from "../../components/goods-card.vue";
import { goodsListData } from "../server.ts";
let clientHeight = document.documentElement.clientHeight; //浏览器高度
let scrollHeight = document.body.scrollHeight;
let scrollTop = document.documentElement.scrollTop;

let distance = 50; //距离视窗还用50的时候，开始触发；

if (scrollTop + clientHeight >= scrollHeight - distance) {
  console.log("开始加载数据");
}
</script>

<style scoped lang="less">
.goods-list {
  padding: 0 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
}
</style>
