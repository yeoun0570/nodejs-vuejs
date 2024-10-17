<!-- 자식 컴포넌트 (DynamicChild.vue) -->
<script>
export default {
  props: {
    currentSlot: {
      type: String,
      default: "header",
    },
  },
};
</script>


<template>
  <slot :name="currentSlot"></slot>
</template>
