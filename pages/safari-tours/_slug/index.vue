<template>
  <div>
    <TourCategory :tourCategory="tourCategory" :tourCategories="tourCategories" :baseURL="baseURL"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ params, $axios, store }) {
    if(store.getters.tourCategories.length) {
      const tourCategory = store.getters.tourCategories.find(el => el.slug === params.slug);
      return { tourCategories: store.getters.tourCategories, tourCategory }
    } else {
      const { data } = await $axios.get(`${store.getters.apiURL}/tour-categories`)
      const tourCategory = data.find(el => el.slug === params.slug);
      return { tourCategory: tourCategory, tourCategories: data }
    }
  },
  computed: {
    ...mapGetters([
      'baseURL'
    ])
  }
}
</script>