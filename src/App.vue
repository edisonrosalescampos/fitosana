<template>
  <div class="container mt-3 mb-5">
    <h2 class="title">Catálogo de Productos Fitosana</h2>

    <br/>
    <br/>

    <!--VITAMINAS-->
    <section class="product-group">
      <div class="subheader">
        <h6 class="title">Vitaminas</h6>
      </div>

      <ProductList :products="vitamins" />
    </section>
    
    <!--MINERALES-->
    <section class="product-group">
      <div class="subheader">
        <h6 class="title">Minerales</h6>
      </div>

      <ProductList :products="minerals" />
    </section>

    <!--SUPLEMENTOS ALIMENTICIOS-->
    <section class="product-group">
      <div class="subheader">
        <h6 class="title">Suplementos Alimenticios</h6>
      </div>

      <ProductList :products="suplements" />
    </section>
  </div>
</template>

<script>
import ProductList from './components/products/ProductList.vue';
import productsJson from './components/products/products.json';

export default {
  name: "app",
  components: {
    ProductList
  },  
  data: () => ({
    products: productsJson
  }),
  computed: {
    minerals() {
      let filteredResults = this.products.filter(item => item.category == "minerals");
      return this.sortAscByName(filteredResults);
    },
    vitamins() {
      let filteredResults = this.products.filter(item => item.category == "vitamins");
      return this.sortAscByName(filteredResults);
    },
    suplements() {
      let filteredResults = this.products.filter(item => item.category == "suplements");
      return filteredResults;
    }
  },
  methods: {
    sortAscByName(arr) {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
}
</script>
