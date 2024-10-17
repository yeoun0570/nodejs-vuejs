<script>
import ProductList from "@/components/ProductList.vue";
import ProductDetail from "./components/ProductDetail.vue";

export default {
  components: {
    ProductList,
    ProductDetail,
  },

  data() {
    return {
      selectedProduct : null,
      visible: false,
    }
  },

  methods: {
    handleSelectProduct(product) {
      this.selectedProduct = product;
    },
  },


};
</script>

<template>
  <ProductList @select-product="handleSelectProduct"/>



  <ProductDetail :product="selectedProduct"/>

</template>
