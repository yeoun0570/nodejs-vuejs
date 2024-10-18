<script setup>
import { computed, ref } from "vue";

const number = ref(5);
const doubleNum = computed(() => number.value * 2);

//defineExpose() 함수로 부모도 자식한테 함부로 접근할 수 없도록 설정
defineExpose({ number, doubleNum});
</script>
<template>
  <h1>{{ number }}</h1>
  <h1>{{ doubleNum }}</h1>
</template>
