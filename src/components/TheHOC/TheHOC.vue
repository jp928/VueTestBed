<template>
  <div>The hoc!</div>
</template>
<script lang="ts">
import { defineComponent, watch, defineProps, h } from "vue";
import withConfig from "../withConfig";

// const props = defineProps({
//   test: { type: String },
//   next: { type: String },
// });

// console.log(props);

export default defineComponent({
  props: {
    first: { type: String },
    next: { type: String },
  },
  setup(props: any) {
    console.log(props);
    // watch(
    //   () => props,
    //   (props) => {
    //     console.log(props);
    //   },
    //   {
    //     immediate: true,
    //     deep: true,
    //   }
    // );
  },
  // render() {
  //   return withConfig(this.rend);
  // },
});
</script>

<style scoped></style>
