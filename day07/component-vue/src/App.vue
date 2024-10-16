<script>
import ThirdChild from "./components/ThirdChild.vue";
import {message, reversedMessage } from '@/keys.js';

export default {
  components: {
    ThirdChild,
  },

  provide() {
    return {
      [message]: this.message,
      [reversedMessage]: this.reversedMessage,
    }
  },

  data() {
    return {
      message: 'Hello ThirdChild Component!',
    }
  },

  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  }
};
</script>

<template>
  <ThirdChild/>
</template>
