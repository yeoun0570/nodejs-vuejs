<!-- 상품 상세 페이지는 선택 상품의 정보 중 제목과 가격, 재고까지 노출 -->

<script>
export default {
  props: {
    // 부모 컴포넌트로부터 전달받은 상품 정보
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<template>
  <div v-if="product">
    <h1>상품 상세 정보</h1>
    <p name="name">상품명 : {{ product.name }}</p>
    <p price="price">가격 : {{ product.price }}</p>
    <p stock="stock">재고 : {{ product.stock }}</p>
  </div>
</template>
