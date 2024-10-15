<script>
  export default {
      methods: {
        onSubmitHandler(event) {
          //별도의 폼 전송 처리하겠다.
          event.preventDefault();
          console.log('OnSubmit Handler!');
        }
      },
  }
</script>

<template>
  <form @submit="onSubmitHandler">
    <button type="submit">Submit</button>
  </form>
</template>
<style>
</style>