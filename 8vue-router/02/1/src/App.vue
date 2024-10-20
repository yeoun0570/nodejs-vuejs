<script setup>
import { RouterLink, RouterView } from "vue-router";

const userId = 1;
</script>

<template>
  <RouterLink :to="{ name: 'user', params: { id: userId } }"
    >Go to UserView</RouterLink
  >
  <RouterView></RouterView>
</template>
