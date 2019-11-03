<template>
  <div id="app">
    <div class="row">
      <Header></Header>
    </div>
      <router-view></router-view>
    <div class="row">
      <!-- <Footer></Footer> -->
    </div>
  </div>    
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
   data(){
        return {
            image: "assets/img/bg-img/hero-1.jpg"
        }
    },
  mounted: function() {
    this.startSlide();
  },
  methods:{
    startSlide: function() {
      // console.log('as');
      // console.log(document.querySelector('body'));
      // document.querySelector('body').style = {'background-image': 'url(' + this.image + ')'};
    },
  }
}
</script>


<style>
  @import './assets/css.scss';
  body {
    font-family: Arial, Helvetica, sans-serif;
    /* background-image: url(assets/img/bg-img/hero-1.jpg);
    background-position: center center;
    background-size: cover;
    background-attachment: fixed; */
  }
  
</style>
