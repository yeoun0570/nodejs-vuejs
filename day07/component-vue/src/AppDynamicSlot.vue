<script>
import DynamicLayout from "./components/DynamicLayout.vue";

export default {
  components: {
    DynamicLayout,
  },

  data() {
    return {
      dynamicHeader : 'header',
      dynamicFooter : 'footer',
    }
  },
};
</script>

<template>
  <DynamicLayout>
    <template #[dynamicHeader]>
      <h2>동적 슬롯 연습</h2>
    </template>


    <template #[dynamicFooter]>
      <h2>동적 슬롯 연습2</h2>
    </template>
  </DynamicLayout>
</template>

<style scoped>
  h2 {
    color: blue;
  }
</style>