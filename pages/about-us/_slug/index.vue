<template>
  <div>
    <h1>Page</h1>
    <div>{{ page }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, params }) {
    const { data } = await $axios.get(`${store.getters.apiURL}/pages`);
    const page = data.find(p => p.slug === params.slug);
    return { page }
  }
}
</script>