<template>
  <div class="container my-4 product-page" id="detalle_producto">
    <div class="pt-1 mb-3">
      <RouterLink :to="{ path: '/products', hash: '#' + product.name }">
        <button class="btn btn-primary btn-sm btn-back">
          <i class="fas fa-arrow-circle-left me-1"></i> Volver
        </button>
      </RouterLink>      
    </div>

    <div class="product-info">
      <div class="product-img-container">
        <img :src="getImage(product.img)" alt="...">
      </div>
      <div class="product-description-container">
        <div class="product-description">
          <h3 class="title">{{ product.name }}</h3>

          <h6 class="subtitle">INDICACIÓN:</h6>
          <p class="description mb-3">{{ product.description }}</p>

          <template v-if="!!product.posology">
            <h6 class="subtitle">POSOLOGÍA:</h6>
            <p class="description mb-3">{{ product.posology }}</p>
          </template>

          <template v-if="productElementsLength > 0">
            <h6 class="subtitle">CONTIENE:</h6>
            
            <div class="col-lg-12">
              <ul class="nutrition-facts">
                <li v-for="element in product.elements" :key="element.name">
                  <div class="fact">
                    <span class="element">{{ element.name }}</span> <span class="badge bg-secondary rounded-pill ms-1">{{ element.qty }} </span>
                  </div>
                </li>
              </ul>
            </div>
          </template>
        </div>        

        <div class="product-permissions">
          <div class="badge">
            <p>
              CPE{{ product.cpe }}. <br/> 
              REGISTRADO EN EL S.A.C.S. ENTE ADSCRITO AL EL M.P.P.S. BAJO EL Nº {{ product.approval_number }}. <br/> 
            </p>
          </div>
        </div>

        <div class="product-standards">
          <img src="/images/bpf.png" alt="">
          <img src="/images/100_organic.png" alt="">
        </div>
      </div>
    </div>

    <div class="pb-1 mt-3 d-md-none">
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
      return "./images/hd_resized/" + filename; 
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