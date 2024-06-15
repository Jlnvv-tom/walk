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
</script>

<style scoped lang="less">
.goods-list {
  padding: 0 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
}
</style>
