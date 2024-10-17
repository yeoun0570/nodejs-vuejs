<!-- 상품 목록 페이지는 여러 상품의 정보 중 제목과 가격만 노출 -->
<script>
export default {
  emits: ['select-product'],

  //상품 목록
  data() {
    return {
      productList: [
        { name: "chair", price: 1000, stock: 10 },
        { name: "desk", price: 2000, stock: 20 },
        { name: "lamp", price: 500, stock: 5 },
      ],
    };
  },

  methods: {
    selectProduct(product) {
      this.$emit('select-product', product);
    },
  },
};
</script>

<template>
  <h1>상품 목록</h1>
  <ul>
    <li v-for="(product, index) in productList" :key="index">
      <a href="#" @click.prevent="selectProduct(product)">
        {{ product.name }} / {{ product.price }}
      </a>
    </li>
  </ul>

</template>
