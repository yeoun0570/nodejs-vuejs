<script setup>
import { computed,ref,reactive } from 'vue';

const refCount = ref(0);
const reactiveCount = reactive({count:0});

const refDoubleCount = computed(() => refCount.value + 2);
const reactiveDoubleCount = computed(() => reactiveCount.count + 10);

console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);

setTimeout(
  () => {
    reactiveCount.value = 20;
  }, 2000
);

</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
