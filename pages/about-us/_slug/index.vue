<template>
  <div>
    <Page :page="page" :pages="pages" :baseURL="baseURL" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ store, $axios, params }) {
    const { data } = await $axios.get(`${store.getters.apiURL}/pages`);
    const page = data.find(p => p.slug === params.slug);
    return { page, pages: data }
  },
  computed: {
    ...mapGetters(['baseURL'])
  }
}
</script>