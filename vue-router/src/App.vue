<template>
  <div>鼠标位置{{ Mouse.x.value }},{{ Mouse.y.value }}</div>
  <div>12</div>
</template>
<script setup lang="ts">
import Mouse from "./composables/mouseEvent";
import { onMounted, onUnmounted } from "vue";

onMounted(() => window.addEventListener("mousemove", Mouse.update));
onUnmounted(() => window.removeEventListener("mousemove", Mouse.update));
</script>
<style lang="scss" scoped></style>
