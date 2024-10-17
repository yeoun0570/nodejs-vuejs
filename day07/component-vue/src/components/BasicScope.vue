<script>
export default {
  data() {
    return {
      message: 'child',
      count: 10,
    };
  },
};
</script>
<template>
  <slot :message="message" :count="count"></slot>
</template>
<style scoped>
h1 {
  color: red;
}
</style>