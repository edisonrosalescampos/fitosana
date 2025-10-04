<template>
  <div class="header">
    <div class="top-wrapper">
      <div class="top px-0 container-xl">
        <div class="company">
          <div class="company-logo">
            <img src="/images/logo_suplementos_acarigua.png" alt="">
          </div>
        </div>

        <div class="social">
          <ul>
            <!--<li><a href="https://www.facebook.com/profile.php?id=61565835603289&mibextid=ZbWKwL" title="Facebook" target="_blank"><span><i class="fab fa-facebook-square fa-lg"></i></span></a></li>-->
            <li><a href="https://www.facebook.com/suplementosacarigua" title="Facebook" target="_blank"><span><i class="fab fa-facebook-square fa-lg"></i></span></a></li>
            <li><a href="https://www.instagram.com/fitosana_jr?igsh=MTg4dHViNmpleXQ3eg==" title="Instagram" target="_blank"><span><i class="fab fa-instagram fa-lg"></i></span></a></li>   
            <li><a href="" title="Tiktok" target="_blank"><span><i class="fab fa-tiktok fa-lg"></i></span></a></li> 
          </ul>
        </div>
      </div> 
    </div> 
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