<script>
export default {
  //1. childNum 데이터를 선언하고 기본값을 0으로 할당
  data() {
    return {
      childNum: 0,
    };
  },
  //2-1. computed 속성에는 childNum의  값을 참조하여 짝수인지 홀수인지 검사
  //2-2. 짝수일 경우 '짝수', 홀수일 경우 '홀수'를 리턴하는 childNumOddAdd()
  computed: {
    childNumOddAdd() {
      return this.childNum % 2 === 0 ? "짝수" : "홀수";
    },
  },

  //3. methods 속성에는 childNum의 값을 리턴하는 getChildNum()
  methods: {
    getChildNum() {
      return this.childNum;
    },
  },

  mounted() {
    console.log(this.$parent.parentNum);
    console.log(this.$parent.numOddEven);
    console.log(this.$parent.getParentNum());
  },
};
</script>

<template>
  <h3>RefChild</h3>
</template>
