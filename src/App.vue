<template>
  <div class="page">
    <div class="header">
      <div class="social">
        <ul>
          <li><a href="https://www.facebook.com/profile.php?id=61565835603289&mibextid=ZbWKwL" title="Facebook" target="_blank"><span><i class="fab fa-facebook-f fa-lg"></i></span></a></li>
          <li><a href="https://www.instagram.com/distribuidor_fitosana.2024?igsh=MTg4dHViNmpleXQ3eg==" title="Instagram" target="_blank"><span><i class="fab fa-instagram fa-lg"></i></span></a></li>   
          <li><a href="https://wa.me/584161974036" title="WhatsApp" target="_blank"><span><i class="fab fa-whatsapp fa-lg"></i></span></a></li>
        </ul>
      </div>
      <div class="company">
        <div class="company-logo">
          <img src="/images/cintillo_fitosana.png" alt="">
        </div>
        <div class="company-info">
          <h4 class="company-name">DISTRIBUIDOR FITOSANA</h4>
          <h6 class="distributor-name">JAIRO ROSALES</h6>
        </div>
      </div>
      <div class="menu">
        <nav class="navbar navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
              <li class="nav-item"><a class="nav-link active" href="#">Catálogo</a></li>
              <li class="nav-item"><a class="nav-link" href="#">¿Quiénes somos?</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Misión</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Visión</a></li>
              </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="container my-5">
      <h3 class="title">PRODUCTOS</h3>

      <br/>

      <!--VITAMINAS-->
      <section class="product-section">
        <div class="subheader">
          <h6 class="title">Vitaminas</h6>
        </div>

        <ProductList :products="vitamins" />
      </section>

      <!--SUPLEMENTOS-->
      <section class="product-section">
        <div class="subheader">
          <h6 class="title">Suplementos</h6>
        </div>

        <ProductList :products="suplements" />
      </section>
      
      <!--MINERALES-->
      <section class="product-section">
        <div class="subheader">
          <h6 class="title">Minerales</h6>
        </div>

        <ProductList :products="minerals" />
      </section>

      <!--MAGNESIOS-->
      <section class="product-section">
        <div class="subheader">
          <h6 class="title">Magnesios</h6>
        </div>

        <ProductList :products="magnesiums" />
      </section>

      <!--PROTEINAS-->
      <section class="product-section">
        <div class="subheader">
          <h6 class="title">Proteínas</h6>
        </div>

        <ProductList :products="proteins" />
      </section>
    </div>

    <br/>
    <br/>

    <div class="footer">
      <!--<div class="sponsors">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam sit hic corrupti, voluptas nam harum minus impedit magnam. 
        <br>
        <br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quam nisi, eius recusandae
        <br>
        <br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quam nisi, eius recusandae
      </div>-->
      <div class="copyright">
        <div class="copy">
          &copy; Distribuidor Fitosana 2025 | Todos los derechos reservados.
        </div>
        <!--<div class="designer">
          Creado por Edison Rosales
        </div>-->
      </div>
    </div>
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
    }
  },
  methods: {
    sortAscByName(arr) {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
}
</script>
