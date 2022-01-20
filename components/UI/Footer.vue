<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h4 class="thin-fonts">About us</h4>
        </div>
        <div class="col-md-3">
          <h4 class="thin-fonts">Tanzania Safari Tours</h4>
          <NuxtLink
            v-for="footerTourCategory in tourCategoriesWithTours"
            :key="footerTourCategory.id" 
            :to="`/safari-tours/${footerTourCategory.slug}`"
            class="link d-block thin-fonts"
          >
            <fai :icon="['fas','angle-right']" class="mr-2"></fai>
            {{ footerTourCategory.name }}
          </NuxtLink>
        </div>
        <div class="col-md-3">
          <h4 class="thin-fonts">Safari Destinations</h4>
          <NuxtLink 
            v-for="footerDestination in destinations"
            :to="`/destinations/${footerDestination.slug}`" 
            :key="footerDestination.id" 
            class="link d-block thin-fonts"
            :title="footerDestination.name"
          >
          <fai :icon="['fas','angle-right']" class="mr-2"></fai>
          {{ footerDestination.name }}
          </NuxtLink>
        </div>
        <div class="col-md-3">
          <h4 class="thin-fonts">Find & Contact us</h4>
        </div>
        <div class="col-12 bottom-bar">
          <div class="row">
            <div class="col">&copy; {{ new Date().getFullYear() }} footer..!</div>
            <div class="col">Developed by <a href="https://luso.solutions" target="_blank">LUSO Solutions</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      destinations: [], tourCategories: []
    }
  },
  fetch() {
    this.getDestinations();
    this.getTourCategories();
  },
  computed: {
    ...mapGetters([
      'apiURL'
    ]),
    tourCategoriesWithTours: function() {
      return this.tourCategories.filter(c => c.tours.length > 0);
    }
  },
  methods: {
    async getDestinations() {
      const { data } = await this.$axios.get(`${this.apiURL}/destinations`)
      .catch(err => console.log(err));
      this.destinations = data;
    },
    async getTourCategories() {
      const { data } = await this.$axios.get(`${this.apiURL}/tour-categories`)
      .catch(err => console.log(err));
      this.tourCategories = data;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

.footer {
  background: $brand-color;
  padding-top: 30px;

  h4 {
    position: relative;
    padding: 6px 0;

    &::before {
      Content:'';
      position: absolute;
      left: 0; top: 0;
      width: 30%;
      height: 100%;
      border-bottom: 4px solid lighten($brand-color, 15);
    }
  }

  .link {
    color: lighten($brand-color, 30);
    text-decoration: none;
    transition: all .3s ease;

    &:hover {
      color: white;
    }
  }
  
  .container {
    color: white;

    .bottom-bar {
      padding-top: 15px;
      margin-top: 15px;
      padding-bottom: 15px;
      border-top: 1px dashed lighten($color: $brand-color, $amount: 15);
    }
  }
}
</style>