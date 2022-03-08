<template>
  <div id="layout">
    <div v-if="!tours.length || !pages.length || !destinations.length || !tourCategories.length" class="loading">
      <!-- <fai :icon="['fas','circle-notch']" class="fa-5x fa-spin mb-5" style="color: saddlebrown" /> -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70px" height="70px" style="margin-bottom: 30px" class="rotate-icon"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path fill="saddlebrown" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" /></svg>
      <h1 class="text-warning">Loading</h1>
      <p class="text-black-50">Please wait...</p>
    </div>
    <div v-if="tours.length && pages.length && destinations.length && tourCategories.length">
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