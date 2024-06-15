<template>
  <div class="message-info">
    <div class="message-info__scroll" ref="messageWrapperScroll">
      <div class="message-info__scroll-content">
        <div class="message-info__tab">
          <div
            class="message-info__tab-pane"
            :class="{ 'is-active-tab': activeKey === 'announcement' }"
            @click="() => (activeKey = 'announcement')"
          >
            活动公告
          </div>
          <div
            class="message-info__tab-pane"
            :class="{ 'is-active-tab': activeKey === 'order' }"
            @click="() => (activeKey = 'order')"
          >
            订单消息
            <div v-show="activeKey === 'announcement'" class="un-read"></div>
          </div>
        </div>
        <div class="message-info__header-action">
          <div @click="showDeleteModal = true">
            <img src="./img/delete.png" width="12" height="12" />
            <span style="margin-left: 2px">删除已读</span>
          </div>
          <div style="margin: 0 15px">|</div>
          <div @click="showIsReadModal = true">
            <img src="./img/clear.png" width="12" height="12" />
            <span style="margin-left: 2px">一键已读</span>
          </div>
        </div>
        <ListContent
          :messageListData="messageListData"
          :messageType="activeKey"
          :isDeleteRead="isDeleteRead"
          :isAllRead="isAllRead"
        />
      </div>
    </div>

    <ConfirmModal
      v-if="showDeleteModal"
      :visible="showDeleteModal"
      title="是否确认要删除已读通知"
      confirmText="确认删除"
      @cancel="showDeleteModal = false"
      @confirm="confirmDelete"
    />
    <ConfirmModal
      v-if="showIsReadModal"
      :visible="showIsReadModal"
      title="是否确认要一键已读全部通知"
      confirmText="全部已读"
      @cancel="showIsReadModal = false"
      @confirm="confirmIsRead"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import ListContent from "./list-content.vue";
import ConfirmModal from "./confirm-modal.vue";
import {
  messageAnnouncementListData,
  messageOrderListData,
} from "../server.ts";
import BScroll from "@better-scroll/core";

const messageWrapperScroll = ref<HTMLElement | null>(null);
// let bs = reactive({});

const init = () => {
  if (messageWrapperScroll.value) {
    new BScroll(messageWrapperScroll.value, {
      scrollY: true, //沿Y轴滚动
      scrollX: true, //沿X轴滚动
      click: true, //派发点击事件
      probeType: 3, //反向偏移量
      eventPassthrough: "horizontal",
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    nextTick(() => init());
  }, 1000);
});

onBeforeUnmount(() => {
  // bs.destroy();
});
const activeKey = ref("announcement");
const showDeleteModal = ref(false); // 删除提示
const showIsReadModal = ref(false);
const isDeleteRead = ref(false); // 是否删除已读状态的数据
const isAllRead = ref(false); // 是否删除已读状态的数据

const messageListData = computed(() => {
  if (activeKey.value === "announcement") {
    return messageAnnouncementListData;
  } else {
    return messageOrderListData;
  }
});

const confirmDelete = () => {
  isDeleteRead.value = !isDeleteRead.value;
};

const confirmIsRead = () => {
  isAllRead.value = !isAllRead.value;
};
</script>

<style scoped lang="less">
.flex-align-center {
  display: flex;
  align-items: center;
}
.message-info {
  &__scroll {
    overflow: hidden;
    height: 800px;
  }
  &__tab {
    .flex-align-center;
    font-size: 16px;
    color: #666666;
    height: 58px;
    padding-left: 15px;
    &-pane {
      margin-right: 25px;
      position: relative;
      .un-read {
        width: 8px;
        height: 8px;
        background: #ff876a;
        position: absolute;
        border-radius: 100%;
        top: -2px;
        right: -8px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .is-active-tab {
      font-weight: 500;
      font-size: 20px;
      color: #333333;
      line-height: 20px;

      &::after {
        content: "";
        display: block;
        width: 20px;
        height: 4px;
        background: #00c8be;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -9px;
      }
    }
  }
  &__header-action {
    .flex-align-center;
    height: 42px;
    font-size: 12px;
    color: #999999;
    line-height: 12px;
    padding: 0 15px;
    background: #f7f8f9;
    box-sizing: border-box;
  }
}
</style>
