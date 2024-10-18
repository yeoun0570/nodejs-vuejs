<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <!-- RouterLink는 a태그의 기능과 같다. -->
    <RouterLink to="/">home</RouterLink><br />
    <RouterLink to="/about">about</RouterLink><br />
    <RouterLink to="/board">board</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>
