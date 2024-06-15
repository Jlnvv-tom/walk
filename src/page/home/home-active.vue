<template>
  <div class="home-top">
    <img
      class="message"
      src="./img/message@3x.png"
      @click="$router.push('/message')"
    />
    <img class="rule" src="./img/rule@3x.png" />
    <div class="coins" @click="$router.push('/shopping-center')">
      <img src="./img/coins@3x.png" />
      <div class="coins-value">32</div>
    </div>
    <div class="todo coins">
      <img src="./img/todo@3x.png" />
      <div class="todo-value">已签到</div>
    </div>
    <div class="add-score">
      <div class="add-score-value">支付成功</div>
      <img src="./img/add2@3x.png" width="48" height="48" />
    </div>
    <div class="add-score ball2">
      <div class="add-score-value">支付成功</div>
      <img src="./img/add2@3x.png" width="48" height="48" />
    </div>
    <div class="add-score ball3">
      <div class="add-score-value">运动步数</div>
      <img src="./img/add2@3x.png" width="48" height="48" />
    </div>
    <div class="add-score ball4">
      <div class="add-score-value">新人专享</div>
      <img src="./img/add2_@3x.png" width="48" height="48" />
    </div>
    <div class="add-score ball5">
      <div class="add-score-value">运动步数</div>
      <img src="./img/add2@3x.png" width="48" height="48" />
    </div>

    <div class="big-ball">
      <div class="text">今日步数</div>
      <div class="number">2748</div>
      <div class="text">每日24:00自动清零</div>
      <img class="boy" src="./img/boy@3x.png" width="33" height="62" />
      <img class="girl" src="./img/girl@3x.png" width="38" height="52" />
    </div>
    <div class="button">瓜分888现金</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped lang="less">
.home-top {
  background: url("./img/bg@3x.png");
  width: 100%;
  height: 396px;
  background-size: cover;
  position: relative;

  .message {
    position: absolute;
    top: 15px;
    left: 10px;
    width: 28px;
    height: 36px;
  }
  .rule {
    position: absolute;
    top: 60px;
    left: 10px;
    width: 28px;
    height: 36px;
  }

  .coins {
    position: absolute;
    top: 20px;
    right: 0;
    width: 70px;
    height: 30px;
    background: #ffffff;
    border-radius: 13px 0px 0px 13px;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    &-value {
      font-size: 16px;
      color: #027c64;
    }
    img {
      width: 24px;
      height: 28px;
      margin-left: 5px;
    }
  }
  .todo {
    top: 62px;
    &-value {
      font-size: 11px;
      color: #105b50;
    }
    img {
      height: 24px;
    }
  }
  .add-score {
    position: absolute;
    top: 129px;
    left: 37px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &-value {
      font-size: 11px;
      color: #105b50;
    }
  }
  .ball2 {
    top: 93px;
    left: 102px;
  }
  .ball3 {
    top: 100px;
    left: 166px;
  }
  .ball4 {
    top: 93px;
    left: 230px;
  }
  .ball5 {
    top: 129px;
    left: 294px;
  }
  .big-ball {
    position: absolute;
    top: 174px;
    left: 105px;
    width: 165px;
    height: 165px;
    display: flex;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    border-radius: 50%;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 100%
    );
    .text {
      font-weight: 400;
      font-size: 12px;
      color: #999999;
      line-height: 12px;
      margin-bottom: 4px;
    }
    .number {
      font-size: 55px;
      color: #084f3e;
      line-height: 48px;
      margin-bottom: 5px;
    }
    .boy {
      position: absolute;
      top: 61px;
      left: 2px;
    }
    .girl {
      position: absolute;
      top: 70px;
      left: 136px;
    }
  }
  .button {
    position: absolute;
    top: 296px;
    left: 74px;
    width: 225px;
    height: 44px;
    background: linear-gradient(#fa5721 0%, #ffa901 100%);
    border-radius: 25px;
    font-size: 20px;
    color: #ffffff;
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
