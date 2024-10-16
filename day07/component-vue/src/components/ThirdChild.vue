<script>
import {message, reversedMessage } from '@/keys.js';

export default {
  inject: {
    customMessage : {
        from: message, //import로 불러온 symbol값
        default: 'default hello!',
    },

    customReversedMessage: {
        from: reversedMessage,
        default: 'default hello!',
    }
  }
};
</script>

<template>
  <h3>{{ customMessage }}</h3>
  <h3>{{ customReversedMessage }}</h3>
</template>
