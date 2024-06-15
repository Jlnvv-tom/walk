<template>
  <div class="goods-card">
    <div class="goods-card__img"><img :src="baseUrl + imgUrl" /></div>
    <div class="goods-card__title" :title="title">{{ title }}</div>

    <slot v-if="$slots.bottomRow1" name="bottomRow1" />
    <div v-else-if="tags.length > 0" class="goods-card__bottom-row1">
      <span
        class="tag"
        v-for="(item, index) in tags"
        :key="index"
        v-bind="item"
        :style="{ color: item.color, border: `1px solid  ${item.color}` }"
      >
        {{ item.name }}
      </span>
    </div>

    <slot v-if="$slots.bottomRow2" name="bottomRow2" />
    <div v-else class="goods-card__bottom-row2">
      <div class="price">
        ￥<span>{{ price.slice(0, 1) }}</span>
        <span> {{ price.slice(1, price.length) }}</span>
      </div>

      <div class="time-conditional">{{ minLeaseTerm }}天起租</div>
    </div>
    <div v-if="isShippingIncluded" class="goods-card__shipping-included">
      包邮
    </div>
  </div>
</template>

<script setup lang="ts">
import { TagsType } from "../page/server.ts";
withDefaults(
  defineProps<{
    imgUrl: string; // 商品图片地址
    title: string; // 商品标题
    price: string; // 价格
    minLeaseTerm: number; // 最短起租时间
    isShippingIncluded?: boolean; // 是否包邮
    tags: TagsType[];
  }>(),
  {
    title: "标题",
  }
);

const baseUrl = location.origin;
</script>

<style scoped lang="less">
.goods-card {
  width: calc(50% - 5px);
  background: #ffffff;
  padding: 9px;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  &__img {
    img {
      max-width: 100%;
    }
  }
  &__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }
  &__bottom-row1 {
    margin-bottom: 5px;
    .tag {
      font-size: 11px;
      background: #ffffff;
      border-radius: 2px;
      padding: 0 5px;
    }
  }
  &__bottom-row2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      font-size: 12px;
      color: #f04f4f;
      line-height: 17px;
      span:first-child {
        font-size: 18px;
      }
    }
    .time-conditional {
      font-size: 12px;
      color: #aaaaaa;
    }
  }
  &__shipping-included {
    font-size: 11px;
    color: #ffffff;
    line-height: 11px;
    background: linear-gradient(138deg, #ff9a3c 0%, #ff611c 100%);
    border-radius: 2px;
    position: absolute;
    top: 13px;
    left: 126px;
    padding: 3px 6px;
  }
}
</style>
