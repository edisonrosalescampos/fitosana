<template>
  <div class="header">
    <div class="top-wrapper">
      <div class="top container-lg">
        <div class="shipment">
          <h6 class="shipment-description">ENVÍO A TODO EL PAÍS <i class="fas fa-truck fa-flip-horizontal ms-1"></i></h6>
        </div>
        <div class="social">
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61565835603289&mibextid=ZbWKwL" title="Facebook" target="_blank"><span><i class="fab fa-facebook-f"></i></span></a></li>
            <li><a href="https://www.instagram.com/fitosana_jr?igsh=MTg4dHViNmpleXQ3eg==" title="Instagram" target="_blank"><span><i class="fab fa-instagram"></i></span></a></li>   
            <li><a href="" title="tiktok" target="_blank"><span><i class="fab fa-tiktok"></i></span></a></li> 
          </ul>
        </div>
      </div> 
    </div> 

    <!--<div class="social">
      <ul>
        <li><a href="https://www.facebook.com/profile.php?id=61565835603289&mibextid=ZbWKwL" title="Facebook" target="_blank"><span><i class="fab fa-facebook-f fa-lg"></i></span></a></li>
        <li><a href="https://www.instagram.com/fitosana_jr?igsh=MTg4dHViNmpleXQ3eg==" title="Instagram" target="_blank"><span><i class="fab fa-instagram fa-lg"></i></span></a></li>   
        <li><a href="https://wa.me/584161974036" title="WhatsApp" target="_blank"><span><i class="fab fa-whatsapp fa-lg"></i></span></a></li>
      </ul>
    </div>-->

    <div class="company">
      <div class="company-logo">
        <img src="/images/cintillo_fitosana.png" alt="">
      </div>
    </div>
      
    <TopNavbar />
  </div>
</template>

<script>
import TopNavbar from './TopNavbar.vue'

export default {
  name: "HeaderSection",
  components: {
    TopNavbar
  },
}
</script>