<template>
  <div class="card product-card">  
    <div class="card-img-container">
      <img class="card-img-top" :src="getImage(image)" alt="...">
    </div> 
    <div class="card-body">  
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
    <div class="card-footer text-center">
      <RouterLink :to="'/product/' + getSlug(name)">
        <button class="btn btn-primary btn-sm w-100">
          <i class="fas fa-search me-1"></i> Ver más información
        </button>
      </RouterLink>      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    name: String,
    description: String,
    image: String
  },
  methods: {
    getImage(filename) {
      return "./images/" + filename; 
    },
    getSlug(name) {
      return name.split(" ").join("-").toLowerCase();
    }
  },
}
</script>