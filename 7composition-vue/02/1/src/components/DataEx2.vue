<script setup>
import {ref} from 'vue';

//배열로 반응형 데이터 생성
const arr1 = ref([10]); 
const arr2 = ref([10]);

setTimeout(
  () => {
    arr1.value = [10,20];
  }, 1000
);

setTimeout(
  () => {
    arr2.push(20);
  }, 1000
);

</script>
<template>
  <h1>arr1: {{ arr1 }}</h1>
  <h1>arr2 : {{ arr2 }}</h1>
</template>
