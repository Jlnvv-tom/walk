<template>
  <div class="rent-active">
    <div class="rent-active__bar"></div>
    <LayoutCard class="rent-active__wrapper" title="租币当钱花">
      <div class="rent-active__content">
        <div
          class="rent-active__content-item"
          v-for="(item, index) in rentCoinFormMoneyData"
          :key="index"
        >
          <div class="title">
            {{ item.title }}
          </div>
          <div class="description">
            {{ item.description }}
          </div>
          <img :src="item.imgUrl" width="52" height="60" />
        </div>
      </div>
    </LayoutCard>
  </div>
</template>

<script setup lang="ts">
import LayoutCard from "../../components/layout-card.vue";
import { rentCoinFormMoneyData } from "../server.ts";
</script>

<style scoped lang="less">
.rent-active {
  background-color: #fff;
  border-radius: 24px 24px 0px 0px;
  margin-top: -36px;
  position: relative;

  &__bar {
    width: 30px;
    height: 5px;
    position: absolute;
    top: 10px;
    left: 173px;
    background: #e2e2e2;
    border-radius: 3px;
  }
  &__wrapper {
    background-color: transparent;
  }
  &__content {
    display: flex;
    overflow-x: auto; /* 允许水平滚动 */
    scrollbar-width: none;
    padding: 0 15px;
    &-item {
      position: relative;
      height: 120px;
      background: #f7f8f9;
      padding: 8px 6px;
      flex: 0 0 auto;
      width: 100px;
      box-sizing: border-box;
      margin-right: 5px;
      border-radius: 8px;
      &:last-child {
        margin-right: 0;
      }
      img {
        position: absolute;
        bottom: 0;
        right: 0;
        border-bottom-right-radius: 8px;
      }
      .description {
        font-size: 12px;
        color: #aaaaaa;
        margin-top: 2px;
      }
    }
  }
}
</style>
