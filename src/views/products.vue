<template>
  <div class="container-fluid container-xl my-4">
    <!--<div class="lottery d-sm-none">
      <img class="img-thumbnail" src="/images/rifa_proteina.png" alt="Rifa Proteina">
    </div>-->

    <h3 class="title mb-0 text-center">PRODUCTOS</h3>

    <br />

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
      <!--VITAMINAS-->
      <ProductGroup 
        title="Vitaminas"       
        :products="vitamins" 
        category="vitamins" 
      />

      <!--SUPLEMENTOS-->
      <ProductGroup 
        title="Suplementos"      
        :products="suplements" 
        category="suplements" 
      />

      <!--MINERALES-->
      <ProductGroup 
        title="Minerales"
        :products="minerals" 
        category="minerals"
      />

      <!--MAGNESIOS-->
      <ProductGroup 
        title="Magnesios"      
        :products="magnesiums"
        category="magnesiums"  
      />

      <!--PRÓSTATA-->
      <ProductGroup 
        title="Próstata"        
        :products="prostate" 
        category="prostate"
      />

      <!--PROTEINAS-->
      <ProductGroup 
        title="Proteínas"       
        :products="proteins" 
        category="proteins" 
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
    vitamins() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "vitamins");

      return this.sortAscByName(filteredResults);
    },
    suplements() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "suplements");

      return this.sortAscByName(filteredResults);
    },
    minerals() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "minerals");

      return this.sortAscByName(filteredResults);
    },
    magnesiums() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "magnesiums");

      return this.sortAscByName(filteredResults);
    },
    proteins() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "proteins");

      return this.sortAscByName(filteredResults);
    },
    prostate() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "prostate");
      
      return this.sortAscByName(filteredResults);
    },
    aminoAcids() {
      let filteredResults = this.$store.state.products.filter(item => item.category == "amino acids");
      
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
  },
  created() {
    this.$store.state.products = productsJson;
  },
  watch: {
    "$store.state.search": {
      handler(newVal, oldVal) {
        // console.log(newVal);

        if (!!newVal) {
          this.$store.state.isSearchActive = true;

          const filteredResults = this.$store.state.products.filter(item => {
            let match = false;
            if (item.name.toLowerCase().includes(newVal.trim().toLowerCase())) {
              match = true;
            }
            else if (item.short_description.toLowerCase().includes(newVal.trim().toLowerCase())) {
              match = true;
            }
            else if (item.description.toLowerCase().includes(newVal.trim().toLowerCase())) {
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