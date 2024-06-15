<template>
  <div class="top-wrapper">
    <div class="top-wrapper__user-info">
      <div class="top-wrapper__user-info-item">
        <div class="user-img"></div>
        <div class="btn-text">租币当钱花</div>
      </div>
      <div class="top-wrapper__user-info-item">
        <img src="./img/question1.png" width="14" height="14" />
        <div class="rule-text">规则</div>
      </div>
    </div>
    <div class="top-wrapper__coin-info">
      <div>
        <div class="text">可用租币</div>
        <div class="number">1560</div>
      </div>
      <img class="btn" src="./img/coin-btn.png" alt="按钮" />
    </div>
    <div class="top-wrapper__card-info">
      <img src="./img/rotate.png" alt="" />
      <img src="./img/rotate2.png" alt="" />
      <img src="./img/rotate.png" alt="" />
    </div>
    <img class="bg-img" src="./img/bg.png" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
</script>

<style scoped lang="less">
.flex-align-center {
  display: flex;
  align-items: center;
}
.top-wrapper {
  position: relative;
  width: 100%;
  height: 190px;
  background: linear-gradient(138deg, #ff8a3c 0%, #ff611c 100%);
  border-radius: 0px 0px 0px 20px;
  &__user-info {
    .flex-align-center;
    justify-content: space-between;
    padding: 10px 15px;
    .user-img {
      width: 32px;
      height: 32px;
      background: #d8d8d8;
      border: 1px solid #ffffff;
      border-radius: 100%;
      margin-right: 13px;
    }
    .btn-text {
      line-height: 12px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 1px;
      padding: 5px;
      font-size: 12px;
      color: #ffffff;
    }
    .rule-text {
      margin-left: 5px;
      font-weight: 400;
      font-size: 13px;
      color: #ffffff;
    }
    &-item {
      .flex-align-center;
    }
  }
  &__coin-info {
    .flex-align-center;
    justify-content: space-between;
    padding: 0 5px 0 15px;
    height: 64px;
    .text {
      font-weight: 400;
      font-size: 12px;
      color: #ffffff;
    }
    .number {
      font-weight: bold;
      font-size: 40px;
      color: #ffffff;
      line-height: 40px;
      padding-top: 4px;
    }
    .btn {
      width: 130px;
      height: 56px;
      margin-top: 10px;
    }
  }
  &__card-info {
    padding: 15px;
    display: flex;
    height: 90px;
    gap: 12px;
    overflow-x: auto; /* 允许水平滚动 */
    scrollbar-width: none;
    img {
      width: 134px;
      height: 69px;
      border-radius: 10px;
    }
  }
  .bg-img {
    position: absolute;
    width: 120px;
    height: 105px;
    top: 68px;
    left: 60px;
  }
}
</style>
