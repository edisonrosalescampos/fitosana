<template>
  <div class="container-fluid container-xl my-4">
    <h4 class="title mb-3 text-center">CATÁLOGO DE PRODUCTOS</h4>

    <SearchBox />

    <br />

    <template v-if="$store.state.isSearchActive">
      <template v-if="$store.state.filteredProducts.length > 0">
        <ProductGroup 
          :title="'Resultados Encontrados (' + $store.state.filteredProducts.length + ')'"       
          :products="$store.state.filteredProducts" 
          category="foundresults" 
        />
      </template>
      <template v-else>
        <p class="text-muted text-center">No se encontraron resultados...</p>
      </template>
    </template>
    <template v-else>
      <!--NATURAL PREMIUM-->
      <ProductGroup 
        title="Natural Premium"       
        :products="naturalPremium" 
        category="naturalPremium" 
      />

      <!--VITAMINAS Y MINERALES-->
      <ProductGroup 
        title="Vitaminas y Minerales"       
        :products="vitamins" 
        category="vitamins" 
      />

      <!--COLÁGENOS-->
      <ProductGroup 
        title="Colágenos"      
        :products="collagens"
        category="collagens"  
      />

      <!--MAGNESIOS-->
      <ProductGroup 
        title="Magnesios"      
        :products="magnesiums"
        category="magnesiums"  
      />

      <!--CÚRCUMAS-->
      <ProductGroup 
        title="Cúrcumas"      
        :products="turmerics"
        category="turmerics"  
      />

      <!--PRÓSTATA-->
      <ProductGroup 
        title="Próstata"        
        :products="prostate" 
        category="prostate"
      />

      <!--QUEMADOR DE GRASAS-->
      <ProductGroup 
        title="Quemador de grasas y Detox"      
        :products="fatBurner"
        category="fatBurner"  
      />   

      <!--SUPLEMENTOS-->
      <ProductGroup 
        title="Suplementos"      
        :products="suplements" 
        category="suplements" 
      />

      <!--PROTEINAS-->
      <ProductGroup 
        title="Proteínas"       
        :products="proteins" 
        category="proteins" 
      />

      <!--OTROS-->
      <ProductGroup 
        title="Otros Productos"
        :products="others" 
        category="others"
      />

      <!--MIEL-->
      <ProductGroup 
        title="Miel"        
        :products="honey" 
        category="honey"
      />
    </template>
  </div>

  <br />
  <br />
</template>

<script>
import productsJson from '../products.json';
import SearchBox from '../components/layout/SearchBox.vue';
import ProductGroup from '../components/products/ProductGroup.vue';

export default {
  name: "Products",
  components: {
    SearchBox,
    ProductGroup    
  },
  data: () => ({
    products: productsJson
  }),
  computed: {
    naturalPremium() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "natural premium");

      return this.sortAscByName(filteredResults);
    },
    vitamins() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "vitamins");

      return this.sortAscByName(filteredResults);
    },
    collagens() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "collagens");
      
      return this.sortAscByName(filteredResults);
    },
    magnesiums() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "magnesiums");

      return this.sortAscByName(filteredResults);
    },
    turmerics() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "turmerics");
      
      return this.sortAscByName(filteredResults);
    },
    prostate() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "prostate");
      
      return this.sortAscByName(filteredResults);
    },
    fatBurner() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "fat burner");

      return this.sortAscByName(filteredResults);
    },
    suplements() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "suplements");

      return this.sortAscByName(filteredResults);
    },  
    proteins() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "proteins");

      return this.sortAscByName(filteredResults);
    },
    others() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "others");

      return this.sortAscByName(filteredResults);
    },      
    honey() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "honey");
      
      return this.sortAscByName(filteredResults);
    }
  },
  methods: {
    sortAscByName(arr) {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    },
    removeAccents(str = "") {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");;
    }
  },
  created() {
    this.$store.state.products = productsJson;
  },
  watch: {
    "$store.state.search": {
      handler(newVal, oldVal) {
        // console.log(this.removeAccents(newVal));

        if (!!newVal) {
          this.$store.state.isSearchActive = true;

          const filteredResults = this.$store.state.products.filter(item => {
            let searchTerm = this.removeAccents(newVal.trim().toLowerCase());

            let match = false;
            if (this.removeAccents(item.name.toLowerCase()).includes(searchTerm)) {
              match = true;
            }
            else if (this.removeAccents(item.description.toLowerCase()).includes(searchTerm)) {
              match = true;
            }

            if (match) return item;
          });

          this.$store.state.filteredProducts = this.sortAscByName(filteredResults);
        } else {
          this.$store.state.isSearchActive = false;
        }
      },
      deep: true 
    }   
  }
}
</script>