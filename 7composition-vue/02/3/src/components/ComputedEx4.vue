<script setup>
import { computed, ref, reactive } from "vue";

const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });

const refDoubleCount = computed({
  get() {
    return refCount.value + 2;
  },

  set(newValue) {
    refCount.value = newValue;
  },
});

const reactiveDoubleCount = computed({
  get() {
    return reactiveCount.count + 10;
  },

  set(newValue) {
    reactiveCount.count = newValue;
  },
});

console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);

setTimeout(() => {
  refDoubleCount.value = 20;
  reactiveDoubleCount.value = 20;
  console.log(refDoubleCount.value);
  console.log(reactiveDoubleCount.value);
}, 2000);
</script>

<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
