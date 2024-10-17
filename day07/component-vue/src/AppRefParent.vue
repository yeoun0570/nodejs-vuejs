<script>
import RefChild from "./components/RefChild.vue";

export default {
  components: {
    RefChild,
  },

  data() {
    return {
      parentNum: 10,
    }
  },

  computed: {
    numOddEven() {
      return this.parentNum % 2 === 0 ? '짝수' : '홀수';
    }
  },

  methods: {
    getParentNum() {
      return this.parentNum;
    }
  },

  mounted() {
    console.log(this.$refs.childRef.childNum);
    console.log(this.$refs.childRef.childNumOddAdd);
    console.log(this.$refs.childRef.getChildNum());
  },
};
</script>

<template>
  <RefChild ref="childRef" />
</template>
