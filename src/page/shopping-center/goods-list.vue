<template>
  <LayoutCard title="兑换商城">
    <template #titleAfter>
      <img
        style="margin-left: 6px"
        src="./img/question.png"
        width="14"
        height="14"
      />
    </template>
    <template #headerAction>
      <div class="header-action">
        <span> 兑换记录</span>
        <img src="./img/right-outlined2.png" width="10" height="10" />
      </div>
    </template>
    <div class="goods-list">
      <div class="goods-list__header">
        <div
          v-for="(item, index) in numberTagsData"
          :key="index"
          class="goods-list__header-tag"
          :class="{ 'active-tag': activeTag === index }"
          @click="() => (activeTag = index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="goods-list__content">
        <GoodsCard
          v-for="(item, index) in shoppingGoodsListData"
          :key="index"
          v-bind="item"
        >
          <template #bottomRow1>
            <div class="goods-list__content-rentcoin">
              {{ item.rentCoin }}租币 + {{ item.price }}元
            </div>
          </template>
          <template #bottomRow2>
            <div class="goods-list__content-convertible">
              <span> {{ item.originalPrice }}元 </span>
              <span>已兑{{ item.convertibleNumber }}件</span>
            </div>
          </template>
        </GoodsCard>
      </div>
    </div>
  </LayoutCard>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import LayoutCard from "../../components/layout-card.vue";
import GoodsCard from "../../components/goods-card.vue";
import { shoppingGoodsListData, GoodsList } from "../server.ts";

const activeTag = ref(0);

watch(
  () => activeTag,
  (v) => {
    console.log(v, localGoodsListData);
  }
);
const numberTagsData = ref<string[]>([
  "全部",
  "1-100",
  "100-500",
  "500-5000",
  "5000以上",
]);
</script>

<style scoped lang="less">
.header-action {
  font-size: 14px;
  color: #999999;
  img {
    margin-left: 4px;
  }
}
.goods-list {
  &__header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 12px 12px 12px;
    &-tag {
      border-radius: 11px;
      border: 1px solid #e6e6e6;
      font-weight: 500;
      font-size: 12px;
      color: #999999;
      padding: 2px 10px;
    }
    .active-tag {
      color: #ff6737;
      background: rgba(255, 103, 55, 0.1);
    }
  }
  &__content {
    padding: 0 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
    &-rentcoin {
      background: #ffffff;
      border-radius: 5px;
      margin-bottom: 5px;
      font-weight: 400;
      font-size: 14px;
      color: #ff6737;
      line-height: 18px;
    }
    &-convertible {
      font-size: 12px;
      color: #999999;
      line-height: 18px;
      span:nth-child(1) {
        text-decoration-line: line-through;
        margin-right: 5px;
      }
    }
  }
}
</style>
