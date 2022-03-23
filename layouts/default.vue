<template>
  <div id="layout">
    <div>
      <div class="container-fluid p-0"><UIHeader /></div>
      <div class="container-fluid main"><Nuxt keep-alive /></div>
      <div class="container-fluid p-0"><UIFooter /></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll());
    this.getPages(); 
    this.getTours(); 
    this.getTourCategories(); 
    this.getCountries(); 
    this.getDestinationCategories(); 
    this.getDestinations();
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll());
  },
  computed: {
    ...mapGetters([
      'pages',
      'tours',
      'destinations',
      'tourCategories'
    ]),
  },
  methods: {
    ...mapActions([
      'getPages', 
      'getTours', 
      'getTourCategories', 
      'getCountries', 
      'getDestinationCategories', 
      'getDestinations'
    ]),
    handleScroll(e) {
      const value = window.top.scrollY;
      console.log('scroll value = ',value);
    }
  }
}
</script>

<style lang="scss">
.rotate-icon {
  animation: rotating 2s infinite linear;
}
.loading {
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(white, rgba(saddlebrown, .3), rgba(saddlebrown, .5));
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} 

@media screen and (min-width: 768px) {
  .main {
    position: relative;
    top: -65px;
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0);
  }
  // 50% {
  //   transform: rotate(180deg);
  // }
  100% {
    transform: rotate(360deg);
  }
}
</style>