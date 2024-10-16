<script>
import SecondChild from './components/SecondChild.vue';
import { nextTick } from 'vue';

export default {
  components: {
    SecondChild,
  },

  mounted() {
    const childNum = this.$refs.child.number;
    const childDoubleNum = this.$refs.child.doubleNum;

    console.log(`메서드 호출 전 : ${childNum}`);
    console.log(`메서드 호출 전 : ${childDoubleNum}`);

    // increment() 메서드 호출
    this.$refs.child.increment();
    
    // nextTick을 사용하여 DOM 업데이트 후 값을 읽음
    nextTick(() => {
      console.log(`메서드 호출 후 : ${this.$refs.child.number}`);
      console.log(`메서드 호출 후 : ${this.$refs.child.doubleNum}`);
    });
  },
}
</script>

<template>
  <SecondChild ref="child"/>
</template>