<script setup>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

//1. useRoute로 현재 라우트 정보 가져오기
const route = useRoute();
const router = useRouter();

//2. 라우트 파라미터 'id'를 동적으로 가져오기
const userId = ref(route.params.id);

//3. 라우트가 변경될 때마다 'userId'를 업데이트
//    watchEffect를 사용해 라우트 파라미터가 변경되면 반응하게 만듦
watchEffect(() => {
  userId.value = route.params.id;
});

//4. 새로운 사용자 정보로 라우팅하는 함수 작성
const loadNewUser = () => {
  //특정 사용자 ID로 페이지 이동
  router.push({ name: "user", params: { id: 5 } });
};
</script>

<template>
  <h1>User View</h1>
  <p>User ID : {{ userId }}</p>
  <button @click="loadNewUser">Load New User (ID = 5)</button>
</template>
