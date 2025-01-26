<template>
  <div class="container my-4 product-page">
    <div>
      <RouterLink to="/">
        <button class="btn btn-primary btn-back">
          <i class="fas fa-arrow-circle-left me-1"></i> Volver
        </button>
      </RouterLink>      
    </div>

    <br/>

    <div class="row">
      <div class="col-md-5 col-lg-4 mb-3 mb-md-0">
        <img :src="getImage(product.img)" class="img-thumbnail" alt="...">
      </div>
      <div class="col-md-7 col-lg-8">
        <h2 class="title">{{ product.name }}</h2>
        <p class="mb-2">{{ product.description }}</p>

        <br/>

        <h6 class="fw-semibold">CONTIENE:</h6>

        <ul>
          <li v-for="element in product.elements">
            {{ element }}
          </li>
        </ul>

        <br/>

        <div class="d-flex justify-content-center justify-content-md-start">
          <div class="badge custom-badge">
            <p class="mb-1 subtitle">REGISTRO SANITARIO</p>
            <span class="title">{{ product.approval_number }}</span>
          </div>

          <div class="badge custom-badge">
            <p class="mb-1 subtitle">CPE</p>
            <span class="title">{{ product.cpe }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import productsJson from '../products.json'

export default {
  name: "ProductDetails",
  data: () => ({
    product: {}
  }),
  methods: {
    getImage(filename) {
      return "./images/" + filename; 
    },
    getSlug(name) {
      return name.split(" ").join("-").toLowerCase();
    }
  },  
  mounted() {    
    this.product = productsJson.find(item => this.getSlug(item.name) == this.$route.params.slug) || {};
  }
}
</script>