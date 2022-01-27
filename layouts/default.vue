<template>
  <div id="layout">
    <div class="container-fluid p-0"><UIHeader /></div>
    <div class="container-fluid" style="position: relative; top: -65px"><Nuxt keep-alive /></div>
    <div class="container-fluid p-0"><UIFooter /></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll());
    this.getPages; 
    this.getTours; 
    this.getTourCategories; 
    this.getCountries; 
    this.getDestinationCategories; 
    this.getDestinations;
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll());
  },
  computed: {
    ...mapActions([
      'getPages', 
      'getTours', 
      'getTourCategories', 
      'getCountries', 
      'getDestinationCategories', 
      'getDestinations'
    ]),
  },
  methods: {
    handleScroll(e) {
      const value = window.top.scrollY;
      console.log('scroll value = ',value);
    }
  }
}
</script>

<style lang="scss">
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} 
</style>