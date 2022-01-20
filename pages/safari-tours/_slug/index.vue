<template>
  <div>
    <TourCategory :tourCategory="tourCategory" :baseURL="baseURL"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ params, $axios, store }) {
    const data = await $axios.get(`${store.getters.apiURL}/tour-categories`)
    const tourCategory = data.data.find(el => el.slug === params.slug);
    return { tourCategory }
  },
  computed: {
    ...mapGetters([
      'baseURL'
    ])
  }
}
</script>