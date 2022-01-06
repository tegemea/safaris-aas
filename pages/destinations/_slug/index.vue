<template>
  <div>
    <Destination :destination="destination" />
  </div>
</template>

<script>

export default {
  async asyncData({ params, $axios }) {
    const data = await $axios.get(`http://safaris-backend.run/api/v1/destinations`)
    const destination = data.data.find(el => el.slug === params.slug);
    return { destination }
  }
}
</script>