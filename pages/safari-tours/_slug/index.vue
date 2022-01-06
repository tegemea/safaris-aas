<template>
  <div>
    <Tour  :tour="tour"/>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const data = await $axios.get(`http://safaris-backend.run/api/v1/tours`)
    const tour = data.data.find(el => el.slug === params.slug);
    return { tour }
  }
}
</script>