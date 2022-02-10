<template>
  <div>
    <Tour :tour="tour" :baseURL="baseURL" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ store, params, $axios }) {
    if(store.getters.tours.length) {
      const tour = store.getters.tours.find(t => t.slug === params.slug)
      return { tour }
    } else {
      const { data } = await $axios.get(`${store.getters.apiURL}/tours`)
      const tour = data.find(t => t.slug === params.slug)
      return { tour }
    }
  },
  computed: {
    ...mapGetters([ 'baseURL' ])
  }
}
</script>