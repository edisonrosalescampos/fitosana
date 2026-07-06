<template>
  <div class="product-grid">
    <template v-for="(product, index) in products" :key="product.sku">
      <div class="product-item" :id="getSlug(product.sku)" v-if="!product.hidden">
        <ProductItem 
          :sku="product.sku || ''"
          :name="product.name"
          :price="product.price"
          :short_description="product.short_description"
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
  },
  methods: {
    getSlug(slug) {
      if (slug) return slug.toLowerCase();

      return "";
    }
  }
}
</script>