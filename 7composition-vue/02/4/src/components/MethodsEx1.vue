<script setup>

</script>
<template>
  <h1>총합: {{ numberSum }}</h1>
  <h1>ref: {{ count }}</h1>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="expressFunc">ref 증가</button>
  <button @click="arrowFunc">reactive 증가</button>
</template>
