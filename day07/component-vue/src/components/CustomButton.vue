<template>
  <button class="btn">
    <slot>전송</slot>
  </button>
</template>

<style scoped>
.btn {
  width: 100px;
  height: 60px;
  background-color: blueviolet;
  color: white;
  border-radius: 5px;
  border: none;
}
</style>
