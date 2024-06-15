<template>
  <div v-if="localVisible" class="detail-modal">
    <div class="detail-modal__mask"></div>
    <div class="detail-modal__content">
      <div class="detail-modal__content-meta">
        <div class="title primary-text">{{ detailData.title }}</div>
        <div class="second-text">{{ detailData.description }}</div>
        <img src="./img/detail-img.png" alt="" />
        <div class="sub-title primary-text">{{ detailData.subTitle }}</div>
        <div class="second-text">
          {{ detailData.subDescription }}
        </div>
      </div>
      <div class="detail-modal__content-action">
        <div @click="showDeleteModal = true">删除</div>
        <div @click="confirm">确定</div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { MessageList } from "../server.ts";
import ConfirmModal from "./confirm-modal.vue";

const props = defineProps<{ visible: boolean; detailData: MessageList }>();
const emit = defineEmits(["confirmDelete", "confirm"]);

const showDeleteModal = ref(false);
const localVisible = computed(() => {
  return props.visible;
});

const confirm = () => {
  emit("confirm", props.detailData);
};
const confirmDelete = () => {
  emit("confirmDelete", props.detailData);
};
</script>

<style scoped lang="less">
.detail-modal {
  box-sizing: border-box;
  &__mask {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    bottom: 0;
    inset-inline-start: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
  &__content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 418px;
    background: #ffffff;
    border-radius: 15px 15px 0px 0px;
    z-index: 1001;
    &-meta {
      padding: 0 15px;
      overflow: auto;
      img {
        width: 345px;
        height: 160px;
        background: #d8d8d8;
        border-radius: 10px;
        margin-bottom: 10px;
      }
      .primary-text {
        font-weight: 600;
        font-size: 16px;
        color: #333333;
      }
      .second-text {
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        margin-bottom: 10px;
      }
      .title {
        margin: 35px 0 10px 0;
      }
      .sub-title {
        margin-bottom: 5px;
      }
    }
    &-action {
      height: 50px;
      width: 100%;
      display: flex;
      position: absolute;
      bottom: 0;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f2f2f2;
        font-size: 18px;
        color: #bfbfbf;
        width: 115px;
        &:last-child {
          background: #00c8be;
          font-size: 18px;
          color: #ffffff;
          width: calc(100% - 115px);
        }
      }
    }
  }
}
</style>
