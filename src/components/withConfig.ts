import { h, inject, onMounted, cloneVNode, withDirectives } from "vue";

export default function withConfig(
  WrappedComponent: any,
  props: any | undefined = {}
) {
  onMounted(() => {
    console.log("hahaha");
  });

  const data = inject("message");
  console.log(WrappedComponent);
  return h(WrappedComponent, { ...props });
}
