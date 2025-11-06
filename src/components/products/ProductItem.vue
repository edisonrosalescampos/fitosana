<template>
  <div class="card product-card">  
    <div class="card-img-container">
      <RouterLink :to="'/product/' + getSlug(name)">
        <img class="card-img-top" :src="getImage(image)" alt="...">
      </RouterLink>  
    </div> 
    <div class="card-body"> 
      <RouterLink class="card-title mb-0" :to="'/product/' + getSlug(name)">
        {{ name }}
      </RouterLink>  
        
      <!--<RouterLink class="card-link" :to="'/product/' + getSlug(name)">
        <i class="far fa-arrow-alt-circle-right fa-lg"></i>
      </RouterLink>-->

      <!--<p class="card-text d-md-none">{{ short_description }}</p>-->

      <!--<p class="card-text">{{ description }}</p>-->
    </div>
    <div class="card-footer text-center">
      <RouterLink :to="'/product/' + getSlug(name)">
        <button class="btn btn-primary btn-sm w-100">
           VER DETALLE 
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
    price: Number,
    short_description: String,
    description: String,
    image: String
  },
  methods: {
    getImage(filename) {
      return "./images/hd_resized/" + filename; 
    },
    getSlug(name) {
      return name.split(" ").join("-").toLowerCase();
    }
  },
}
</script>