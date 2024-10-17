<script>
import DynamicLayout from './components/DynamicLayout.vue';

export default {
  components: {
    DynamicLayout,
  },

  data() {
    return {
      activeSlot: "header", // 초기 슬롯 설정
    };
  },
};
</script>

<template>
  <DynamicLayout :currentSlot="activeSlot">
    <template v-slot:header>
      <h1>헤더 내용</h1>
    </template>
    <template v-slot:content>
      <p>콘텐츠 내용</p>
    </template>
    <template v-slot:footer>
      <p>푸터 내용</p>
    </template>
  </DynamicLayout>

  <button @click="activeSlot = 'header'">헤더로 변경</button>
  <button @click="activeSlot = 'content'">콘텐츠로 변경</button>
  <button @click="activeSlot = 'footer'">푸터로 변경</button>
</template>