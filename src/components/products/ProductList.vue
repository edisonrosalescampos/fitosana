<template>
  <div class="product-grid">
    <template v-for="product in products" :key="product.name">
      <div class="product-item mb-2 mb-sm-0">
        <ProductItem 
          :name="product.name"
          :description="product.description"
          :image="product.img"
        />
      </div>
    </template>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: "ProductList",
  components: {
    ProductItem
  },
  props: {
    products: Array
  }
}
</script>