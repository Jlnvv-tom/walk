<template>
  <div class="layout-card-wrapper">
    <div class="layout-card-header">
      <div class="title">
        <div class="title-text">{{ title }}</div>
        <slot v-if="$slots.titleAfter" name="titleAfter" />
      </div>
      <slot v-if="$slots.headerAction" name="headerAction" />
    </div>
    <div class="layout-card-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    title: string; // 标题
  }>(),
  {
    title: "标题",
  }
);
</script>

<style scoped lang="less">
.layout-card-wrapper {
  height: 100%;
  background: #f7f8f9;
  padding: 16px 0;
  .layout-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 12px 15px 12px;
    .title {
      display: flex;
      align-items: center;

      &-text {
        font-weight: 500;
        font-size: 18px;
        color: #222222;
        line-height: 18px;
      }
    }
  }
}
</style>
