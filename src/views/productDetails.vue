<template>
  <div class="container my-4 product-page">
    <div class="mb-4">
      <RouterLink :to="{ path: '/products', hash: '#' + product.name }">
        <button class="btn btn-primary btn-sm btn-back">
          <i class="fas fa-arrow-circle-left me-1"></i> Volver
        </button>
      </RouterLink>      
    </div>

    <div class="row">
      <div class="col-md-5 col-lg-4 mb-3 mb-md-0">
        <div class="img-thumbnail-container">
          <img :src="getImage(product.img)" class="img-thumbnail" alt="...">
        </div>
      </div>
      <div class="col-md-7 col-lg-8">
        <h3 class="title">{{ product.name }}</h3>
        <p class="mb-2 text-justify">{{ product.description }}</p>

        <br/>

        <template v-if="productElementsLength > 0">
          <h6 class="fw-semibold">CONTIENE:</h6>
          
          <div class="col-lg-6">
            <ul class="nutrition-facts">
              <li v-for="element in product.elements" :key="element.name">
                <div class="fact">
                  <span class="element">{{ element.name }}</span> <span class="badge bg-secondary rounded-pill ms-1">{{ element.qty }} </span>
                </div>
              </li>
            </ul>
          </div>

          <br/>
        </template>

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

    <div class="mt-4 d-md-none">
      <RouterLink :to="{ path: '/products', hash: '#' + product.name }">
        <button class="btn btn-primary btn-sm btn-back">
          <i class="fas fa-arrow-circle-left me-1"></i> Volver
        </button>
      </RouterLink>      
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
  computed: {
    productElementsLength() {
      return this.product.hasOwnProperty("elements") ? this.product.elements.length : 0;
    }
  },  
  methods: {
    getImage(filename) {
      return "./images/lite/" + filename; 
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