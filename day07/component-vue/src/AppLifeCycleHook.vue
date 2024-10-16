<script>
import FirstChild from './components/FirstChild.vue';

export default {
  components: {
    FirstChild, //불러온 FirstChild 컴포넌트를 components 옵션 속성으로 지역등록
  },

  data() {
    return {
      visible: true, //visible데이터 정의(초기값:true)
    }
  },

  beforeCreate() {console.log('beforeCreate');},
  created() {
    setTimeout(() => {
      this.visible = false; //컴포넌트가 생성된 후 3초뒤에 visible 데이터값 변경
    },9000);
  },
  beforeMount() {console.log('beforeMount')},
  mounted() {console.log('mounted');},
  beforeUpdate() {console.log('beforeUpdate');},
  updated() {console.log('updated');},
  beforeUnmount() {console.log('beforeUnmount');},
  unmounted() {console.log('unmounted');},
};
</script>

<template>
  <FirstChild v-if="visible"/>
</template>

<style></style>