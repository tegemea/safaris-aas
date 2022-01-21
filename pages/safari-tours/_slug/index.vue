<template>
  <div>
    <TourCategory :tourCategory="tourCategory" :tourCategories="tourCategories" :baseURL="baseURL"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ params, $axios, store }) {
    const { data } = await $axios.get(`${store.getters.apiURL}/tour-categories`)
    const tourCategory = data.find(el => el.slug === params.slug);
    return { tourCategory: tourCategory, tourCategories: data }
  },
  computed: {
    ...mapGetters([
      'baseURL'
    ])
  }
}
</script>