<script>
  export default {
      data () {
          return {
            uid: '',
            upw: '',
            message:'',
            gender: ['male','female'],
            fruits: ['apple','banana'],
            coffee: ['americano','latte','vanilla'],
          };
      },

      methods: {
        login() {
          console.log(`id: ${this.uid}`)
          console.log(`pwd: ${this.upw}`)
          console.log(`gender: ${this.gender}`)
        },

        printData() {
          console.log(`message: ${this.message}`);
          console.log(`fruits: ${this.fruits}`);
        },

        orderCoffee() {
          console.log(`coffee: ${this.coffee}`);
        }
      }
  }
</script>

<template>
  <form id="/loginForm">
    <label for="uid">ID:<input type="text" id="uid" v-model="uid"></label>
    <label for="upw">PASSWORD:<input type="password" id="upw" v-model="upw"></label>
    <input type="radio" id="gender" v-model="gender" value="male">남성
    <input type="radio" id="gender" v-model="gender" value="female">여성
    <button type="button" @click="login">login</button>
  </form>


  <form id="/printFruitsForm">
    <textarea v-model="message"></textarea>
    <input type="checkbox" id="fruits" v-model="fruits" value="apple">사과
    <input type="checkbox" id="fruits" v-model="fruits" value="banana">바나나
    <button type="button" @click="printData">데이터출력</button>
  </form>

  <input type="text" v-model="message"/>
  {{ message }}
  
  <form id="/orderCoffeeForm">
    <select v-model="coffee">
      <option value="americano">아메리카노</option>
      <option value="latte">카페라떼</option>
      <option value="vanilla">바닐라라떼</option>
    </select>
    <button type="button" @click="orderCoffee">커피주문</button>
  </form>

</template>
<style>
</style>