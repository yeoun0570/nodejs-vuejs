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
    reactiveDoubleCount.count = newValue;
  },
});

setTimeout(() => {
  reactiveCount.value = 20;
  reactiveDoubleCount.count = 20;
}, 2000);


console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>

<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
