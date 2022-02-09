<template>
  <div id="layout">
    <div v-if="!tours.length || !pages.length || !destinations.length || !tourCategories.length" class="loading">
      <fai :icon="['fas','circle-notch']" class="fa-5x fa-spin" style="color: saddlebrown"></fai>
    </div>
    <div v-if="tours.length && pages.length && destinations.length && tourCategories.length">
      <div class="container-fluid p-0"><UIHeader /></div>
      <div class="container-fluid" style="position: relative; top: -65px"><Nuxt keep-alive /></div>
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
.loading {
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(white, rgba(saddlebrown, .3), rgba(saddlebrown, .5));
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} 
</style>