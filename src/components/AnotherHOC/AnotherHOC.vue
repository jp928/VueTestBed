<template>
  <div>Another hoc!!!</div>
  <button @click="onClick">click me</button>
</template>
<script lang="ts" setup>
import { defineComponent, watch, defineProps, defineEmits } from "vue";
import withConfig from "../withConfig";

const emit = defineEmits(["change"]);

const onClick = () => {
  console.log("click");
  emit("change", "changing");
};
// setup code
</script>

<style scoped></style>
