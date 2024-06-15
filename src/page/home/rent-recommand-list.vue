<template>
  <LayoutCard title="租物推荐">
    <div class="goods-list">
      <GoodsCard
        v-for="(item, index) in localGoodsListData"
        :key="index"
        :imgUrl="item.imgUrl"
        :title="item.title"
        :price="item.price"
        :minLeaseTerm="item.minLeaseTerm"
        :isShippingIncluded="item.isShippingIncluded"
        :tags="item.tags || []"
      ></GoodsCard>
    </div>
  </LayoutCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import LayoutCard from "../../components/layout-card.vue";
import GoodsCard from "../../components/goods-card.vue";
import { GoodsList } from "../server.ts";

const props = defineProps<{ goodsListData: GoodsList[] }>();

const localGoodsListData = computed(() => props.goodsListData);
</script>

<style scoped lang="less">
.goods-list {
  padding: 0 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
