<script>
  export default {
      data () {
          return {
            name : '신세계',
            gender : 'male',
            age : 20,
          };
      },

      methods: {
        increment() {
          this.number++;
        },
      }
  }
</script>

<template>
  <div v-memo="[name,gender]">
    <p>이름 : {{ name }}</p>
    <p>성별 : {{ gender }}</p>
    <p>나이 : {{ age }}</p>
  </div>

  <button type="button" @click="name = '수정'">이름 변경</button>
  <button type="button" @click="gender = 'female'">성별 변경</button>
  <button type="button" @click="age = 22">나이 변경</button>
</template>
<style>
</style>