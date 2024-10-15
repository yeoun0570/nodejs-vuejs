<script>
  export default {
      methods: {
        clickHandler(event,message) {
            console.log(event);
            console.log(message);
        },

        onKeyUpHandler(event) {
          if(event.keyCode == 13){
            alert("enter키 눌렸네?")
          }
        },

        onKeyUpHandler1() {
          console.log("enter키 눌렸네??")
        }

      }
  }
</script>

<template>
  <!-- {{}} : mustach syntax(콧수염 문법) 
    => <script></script>에서 지정한 변수 사용 가능-->

  <button type="button" @click="($event)=>clickHandler($event, message)">버튼4</button>

  <input type="text" @keyup="($event) => onKeyUpHandler($event)">
  <input type="text" @keyup.enter="onKeyUpHandler1"/>
</template>

<style>
</style>