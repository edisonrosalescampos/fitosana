<template>
  <div class="container-fluid container-xl my-4">
    <!--<div class="lottery d-sm-none">
      <img class="img-thumbnail" src="/images/rifa_proteina.png" alt="Rifa Proteina">
    </div>-->

    <h3 class="title mb-0 text-center">PRODUCTOS</h3>

    <br />

    <!--VITAMINAS-->
    <section class="product-section" id="vitamins">
      <div class="subheader">
        <h6 class="title">Vitaminas</h6>
      </div>

      <ProductList :products="vitamins" />
    </section>

    <!--SUPLEMENTOS-->
    <section class="product-section" id="suplements">
      <div class="subheader">
        <h6 class="title">Suplementos</h6>
      </div>

      <ProductList :products="suplements" />
    </section>

    <!--MINERALES-->
    <section class="product-section" id="minerals">
      <div class="subheader">
        <h6 class="title">Minerales</h6>
      </div>

      <ProductList :products="minerals" />
    </section>

    <!--MAGNESIOS-->
    <section class="product-section" id="magnesiums">
      <div class="subheader">
        <h6 class="title">Magnesios</h6>
      </div>

      <ProductList :products="magnesiums" />
    </section>

    <!--PRÓSTATA-->
    <section class="product-section" id="prostate">
      <div class="subheader">
        <h6 class="title">Próstata</h6>
      </div>

      <ProductList :products="prostate" />
    </section>

    <!--PROTEINAS-->
    <section class="product-section" id="proteins">
      <div class="subheader">
        <h6 class="title">Proteínas</h6>
      </div>

      <ProductList :products="proteins" />
    </section>

    <!--MIEL-->
    <section class="product-section" id="honey">
      <div class="subheader">
        <h6 class="title">Miel</h6>
      </div>

      <ProductList :products="honey" />
    </section>
  </div>

  <br />
  <br />
</template>

<script>
import productsJson from '../products.json';
import ProductList from '../components/products/ProductList.vue';

export default {
  name: "Products",
  components: {
    ProductList
  },
  data: () => ({
    products: productsJson
  }),
  computed: {
    vitamins() {
      let filteredResults = this.products.filter(item => item.category == "vitamins");
      return this.sortAscByName(filteredResults);
    },
    suplements() {
      let filteredResults = this.products.filter(item => item.category == "suplements");
      return this.sortAscByName(filteredResults);
    },
    minerals() {
      let filteredResults = this.products.filter(item => item.category == "minerals");
      return this.sortAscByName(filteredResults);
    },
    magnesiums() {
      let filteredResults = this.products.filter(item => item.category == "magnesiums");
      return this.sortAscByName(filteredResults);
    },
    proteins() {
      let filteredResults = this.products.filter(item => item.category == "proteins");
      return this.sortAscByName(filteredResults);
    },
    prostate() {
      let filteredResults = this.products.filter(item => item.category == "prostate");
      return this.sortAscByName(filteredResults);
    },
    honey() {
      let filteredResults = this.products.filter(item => item.category == "honey");
      return this.sortAscByName(filteredResults);
    }
  },
  methods: {
    sortAscByName(arr) {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
}
</script>