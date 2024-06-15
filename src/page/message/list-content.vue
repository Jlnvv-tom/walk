<template>
  <div class="list-content">
    <template v-if="!isEmpty">
      <div
        v-for="(item, index) in localMessageListData"
        v-show="!item.isDelete"
        :key="index"
        class="list-content__item"
        @click="getDetail(item)"
      >
        <div class="list-content__item-img">
          <img :src="getMessageIcon" width="20" height="24" alt="消息通知" />
          <div v-if="!item.isRead" class="reading-status"></div>
        </div>
        <div class="list-content__item-text">
          <div class="row">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="time">{{ item.messageTime }}</div>
          </div>
          <div class="description" :title="item.description">
            {{ item.description }}
          </div>
        </div>
      </div>
      <div class="list-content__no-everymore">没有更多了</div>
    </template>
    <div v-else class="list-content__empty">
      <img src="./img/empty.png" width="160" height="160" alt="暂无数据" />
      <div>暂无消息</div>
    </div>
    <div v-if="showCoinTip" class="list-content__add-coin-tip">
      <img src="./img/coin.png" width="41" height="41" alt="金币" />
      <div class="text">
        <div>
          <div class="text-main">恭喜获得20个租币！</div>
          <div class="text-sub">阅读消息</div>
        </div>
        <div class="text-number">+20</div>
      </div>
    </div>
    <MessageDetail
      v-if="showDetail"
      :detailData="currentDetailData"
      :visible="showDetail"
      @confirm="confirmRead"
      @confirmDelete="confirmDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { MessageList } from "../server.ts";
import MessageDetail from "./message-detail.vue";

const props = defineProps<{
  messageListData: MessageList[]; // 消息列表数据
  messageType: string; //announcement | order  消息类型
  isDeleteRead: boolean; // 是否删除已读状态的数据
  isAllRead: boolean; //  是否全部已读
}>();

const computedMessageListData = computed(() => props.messageListData);
const localMessageListData = ref(computedMessageListData);
const currentDetailData = ref<MessageList>({}); // 当前点击的详情数据
const showDetail = ref(false);
const showCoinTip = ref(false);

const getMessageIcon = computed(() => {
  if (props.messageType === "announcement") {
    return "/src/page/message/img/notic.png";
  } else {
    return "/src/page/message/img/order.png";
  }
});

watch(
  () => props.isDeleteRead,
  (v) => {
    localMessageListData.value.forEach((i) => {
      if (i.isRead) {
        i.isDelete = true;
      }
    });
  }
);

watch(
  () => props.isAllRead,
  (v) => {
    localMessageListData.value.forEach((i) => {
      i.isRead = true;
    });
  }
);

/**
 * 根据idDelete 属性 模拟数组非空判断
 */
const isEmpty = computed(() => {
  console.log("localMessageListData.value====>", localMessageListData.value);
  if (
    localMessageListData.value.length < 1 &&
    localMessageListData.value.every((i) => i.isDelete === true)
  ) {
    return true;
  } else {
    return false;
  }
});

/**
 * 获取详情数据，打开详情窗口
 */
const getDetail = (item) => {
  showDetail.value = true;
  currentDetailData.value = item;
};

/**
 * 详情确认
 */
const confirmRead = (item) => {
  localMessageListData.value.find((i) => {
    if (i.id === item.id) {
      i.isRead = true;
    }
  });
  showDetail.value = false;
  showCoinTip.value = true;
  setTimeout(() => {
    showCoinTip.value = false;
  }, 3000);
};

/**
 * 确认删除
 */
const confirmDelete = (item) => {
  localMessageListData.value.find((i) => {
    if (i.id === item.id) {
      i.isDelete = true;
    }
  });
  showDetail.value = false;
};
</script>

<style scoped lang="less">
.ell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-content {
  &__item {
    display: flex;
    align-items: flex-start;
    height: 69px;
    width: 100%;
    padding: 12px 15px;
    box-sizing: border-box;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: calc(100% - 15px);
      height: 1px;
      background: rgba(242, 242, 242, 1);
    }
    &-img {
      display: flex;
      justify-content: center;
      position: relative;
      width: 24px;
      height: 24px;
      .reading-status {
        width: 8px;
        height: 8px;
        background: rgba(255, 97, 28, 1);
        border-radius: 100%;
        top: -4px;
        right: -4px;
        position: absolute;
      }
    }
    &-text {
      margin-left: 10px;
      flex: 1;
      max-width: calc(100% - 30px);
      .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .title {
          font-size: 16px;
          color: #333333;
          line-height: 16px;
          .ell;
        }
        .time {
          font-size: 12px;
          color: #999999;
          min-width: 102px;
        }
      }
      .description {
        font-size: 12px;
        color: #999999;
        .ell;
      }
    }
  }

  &__no-everymore {
    font-size: 12px;
    color: #999999;
    margin-top: 20px;
    text-align: center;
  }
  &__empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-size: 16px;
    color: #999999;
    img {
      padding: 12px 8px;
      box-sizing: border-box;
    }
  }
  &__add-coin-tip {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 26px;
    left: 23px;
    width: calc(100% - 46px);
    height: 56px;
    background: rgba(0, 0, 0, 0.72);
    border-radius: 6px;
    padding: 6px 13px;
    box-sizing: border-box;
    color: #ffffff;
    .text {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
      &-main {
        font-weight: 400;
        font-size: 15px;
      }
      &-sub {
        font-weight: 400;
        font-size: 12px;
        margin-top: 2px;
      }
      &-number {
        font-size: 19px;
      }
    }
    img {
      margin-right: 4px;
    }
  }
}
</style>
