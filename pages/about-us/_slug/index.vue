<template>
  <div>
    <Page :page="page" :pages="pages" :baseURL="baseURL" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ $axios, store, params }) {
    if(store.getters.pages.length) {
      const page = store.getters.pages.find(p => p.slug === params.slug)
      return { pages: store.getters.pages, page }
    } else {
      const { data } = await $axios.get(`${store.getters.apiURL}/pages`);
      const page = data.find(p => p.slug === params.slug)
      return { pages: data, page }
    }
  },
  computed: {
    ...mapGetters(['baseURL']),
  }
}
</script>