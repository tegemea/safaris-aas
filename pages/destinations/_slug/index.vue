<template>
  <div>
    <Destination :destination="destination" :destinations="destinations" :baseURL="baseURL"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ params, $axios, store }) {
    if(store.getters.destinations.length) {
      const destination = store.getters.destinations.find(el => el.slug === params.slug);
      return { destinations: store.getters.destinations, destination }
    } else {
      const { data } = await $axios.get(`${store.getters.apiURL}/destinations`)
      const destination = data.find(el => el.slug === params.slug);
      return { destination, destinations: data }
    }
    
  },
  computed: {
    ...mapGetters([ 'baseURL' ]),
    // destination: function() {
    //   let slug = this.$route.params.slug;
    //   return this.destinations.find(d => d.slug === slug)
    // }
  }
}
</script>