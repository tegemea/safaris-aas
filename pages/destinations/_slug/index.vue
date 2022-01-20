<template>
  <div>
    <Destination :destination="destination" :baseURL="baseURL"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ params, $axios, store }) {
    const { data } = await $axios.get(`${store.getters.apiURL}/destinations`)
    const destination = data.find(el => el.slug === params.slug);
    return { destination }
  },
  computed: {
    ...mapGetters([ 'baseURL' ])
  }
}
</script>