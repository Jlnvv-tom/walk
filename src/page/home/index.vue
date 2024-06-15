<template>
  <div class="home-wrapper">
    <HomeActive />
    <RentActive />
    <RentRecommandList />
  </div>
</template>

<script setup lang="ts">
import RentRecommandList from "./rent-recommand-list.vue";
import RentActive from "./rent-active.vue";
import HomeActive from "./home-active.vue";
</script>

<style scoped lang="less">
.home-wrapper {
  height: 100%;
}
</style>
