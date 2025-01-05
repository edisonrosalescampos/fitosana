<template>
  <div class="card product-card">  
    <div class="card-img-container">
      <img class="card-img-top" :src="getImage(image)" alt="...">
    </div> 
    <div class="card-body">  
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
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
    }
  },
}
</script>