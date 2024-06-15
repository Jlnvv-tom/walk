<template>
  <div v-if="localVisible" class="delete-modal">
    <div class="delete-modal__mask"></div>
    <div class="delete-modal__content">
      <div class="title">{{ title }}</div>
      <div class="action">
        <div @click="confirm">{{ confirmText }}</div>
        <div @click="$emit('cancel')">取消</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  visible: boolean;
  title: string;
  confirmText: string;
}>();
const emit = defineEmits(["cancel", "confirm"]);

const localVisible = computed(() => {
  return props.visible;
});

const confirm = () => {
  emit("confirm", true);
  emit("cancel");
};
</script>

<style scoped lang="less">
.delete-modal {
  box-sizing: border-box;
  &__mask {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    bottom: 0;
    inset-inline-start: 0;
    z-index: 1001;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
  &__content {
    position: absolute;
    top: 160px;
    left: 53px;
    width: 270px;
    height: 129px;
    background: #ffffff;
    border-radius: 7px;
    z-index: 1100;
    .title {
      font-weight: 500;
      font-size: 16px;
      color: #333333;
      line-height: 16px;
      margin: 25px 16px 38px 16px;
      text-align: center;
    }
    .action {
      height: 48px;
      width: 100%;
      display: flex;
      border-top: 1px solid #dddddd;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        font-size: 18px;
        color: #999999;
        &:last-child {
          border-left: 1px solid #dddddd;
          color: #00c8be;
        }
      }
    }
  }
}
</style>
