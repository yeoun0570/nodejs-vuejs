<script>
import LocalChild from './components/LocalChild.vue';

//local component 등록
export default {
  components: {
    LocalChild,
  },
}
</script>

<template>
  <FirstChild/>
  <SecondChild/>
  <ThirdChild/>
  <LocalChild/>
</template>

<style>
  h1{
    color: red
  }

  p {
    color: darkgreen !important;
  }
</style>
