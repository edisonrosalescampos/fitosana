<template>
  <div class="row">
    <template v-for="product in products" :key="product.name">
      <div class="col-sm-3 mb-3">
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