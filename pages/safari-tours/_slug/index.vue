<template>
  <div>
    <Tour :tour="tour" :baseURL="baseURL"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, $axios, store }) {
    const data = await $axios.get(`${store.getters.apiURL}/tours`)
    const tour = data.data.find(el => el.slug === params.slug);
    return { tour }
  },
  computed: {
    ...mapGetters([
      'baseURL'
    ])
  }
}
</script>