<script>
export default {
  data() {
    return {
      output: null, //누른 애들 출력되는 곳
      prev: null, //이전에 내가 누른값
      cur: null, //현재 내가 누른값
      operator: null, //연산자
    }
  },

  methods: {
    operation(event) {
      const number = event.currentTarget.value;

      //사용자가 입력한 숫자(실제로는 문자열) 저장
      //=> output부분에 누른 값 텍스트 띄우기
      if(['1','2','3','4','5','6','7','8','9'].includes(number)){
      this.cur = this.cur === null?number:(this.cur+=number);
      this.cur = Number(this.cur);
      }
      //입력한 값이 출력칸(output)에 표시되도록 output 데이터에 저장
      this.output = this.cur;

      if(['+','-','*','/','='].includes(number)){
        //연산로직 구현
        this.output = null;
        this.operator = number;
        this.prev = Number(this.cur);
        this.cur = null;
        return;
      }

      if(this.operator === '+') {
        this.cur = Number(this.cur);
        this.cur = this.prev + this.cur;
        this.prev = Number(this.cur);
        this.cur = null;
        console.log(`더한 값 : ${this.prev}`);
        return;
      }

      if(this.operator === '*') {
        this.cur = Number(this.cur);
        this.cur = this.prev * this.cur;
        this.prev = Number(this.cur);
        this.cur = null;
        console.log(`곱한 값 : ${this.prev}`);
        return;
      }


    },
  },

}
</script>

<template>
      <div class="calculator">
        <form name="forms">
          <input v-model="output" type="text" name="output" readonly />
          <input type="button" class="clear" value="C" @click="operation"/>
          <input type="button" class="operator" value="/" @click="operation"/>
          <input type="button" value="1" @click="operation"/>
          <input type="button" value="2" @click="operation"/>
          <input type="button" value="3" @click="operation"/>
          <input type="button" class="operator" value="*" @click="operation"/>
          <input type="button" value="4" @click="operation"/>
          <input type="button" value="5" @click="operation"/>
          <input type="button" value="6" @click="operation"/>
          <input type="button" class="operator" value="+" @click="operation"/>
          <input type="button" value="7" @click="operation"/>
          <input type="button" value="8" @click="operation"/>
          <input type="button" value="9" @click="operation"/>
          <input type="button" class="operator" value="-" @click="operation"/>
          <input type="button" class="dot" value="." @click="operation"/>
          <input type="button" value="0" @click="operation"/>
          <input type="button" class="operator result" value="=" @click="operation"/>
        </form>
    </div>
</template>

<style scoped>
  @import './assets/style.css';
</style>
