<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const userId = ref(route.params.userId);
const postId = ref(route.params.postId);

</script>

<template>
  <h1>User Info</h1>
  <p>{{ userId }}</p>
  <p>{{  postId }}</p>
</template>
