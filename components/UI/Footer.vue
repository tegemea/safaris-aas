<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h4 class="thin-fonts">About us</h4>
          <div class="text-justify" v-if="aboutUsPage" 
            v-html="aboutUsPage.description.length > 140 
            ? `${aboutUsPage.description.substring(0, 140)}...` 
            : aboutUsPage.description"
          ></div>
          <a v-if="aboutUsPage" class="d-inline-block thin-fonts orange-color mt-3" 
            :href="`/about-us/${aboutUsPage.slug}`"
            :title="`Read More ${aboutUsPage.name}`"
          >
            <fai :icon="['fas','angle-right']" class="mr-2"></fai>{{ aboutUsPage.name }}
          </a>
        </div>
        <div class="col-md-3">
          <h4 class="thin-fonts">Tanzania Safari Tours</h4>
          <NuxtLink
            v-for="fTourCategory in tourCategoriesWithTours"
            :key="fTourCategory.id" 
            :to="`/safari-tours/${fTourCategory.slug}`"
            class="link d-block thin-fonts"
          >
            <fai :icon="['fas','angle-right']" class="mr-2"></fai>
            {{ fTourCategory.name }} ({{ fTourCategory.tours.length }} {{ fTourCategory.tours.length > 1 ? 'tours' : 'tour' }})
          </NuxtLink>
        </div>
        <div class="col-md-3">
          <h4 class="thin-fonts">Safari Destinations</h4>
          <NuxtLink 
            v-for="fDestination in destinations"
            :to="`/destinations/${fDestination.slug}`" 
            :key="fDestination.id" 
            class="link d-block thin-fonts"
            :title="fDestination.name"
          >
          <fai :icon="['fas','angle-right']" class="mr-2"></fai>
          {{ fDestination.name }}
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
  computed: {
    ...mapGetters([
      'pages',
      'tourCategories',
      'destinations'
    ]),
    aboutUsPage: function() {
      return this.pages.find(p => p.slug.includes("about"));
    },
    tourCategoriesWithTours: function() {
      return this.tourCategories.filter(c => c.tours.length > 0);
    }
  },
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