<template>
  <div>
    <div class="row">
      <div class="col-md-4" v-for="tour in tours" :key="tour.id">
        <div class="card mb-4">
          <div class="card-body p-0">
            <NuxtLink :to="`/safari-tours/${tour.slug}`">
              <img 
                :src="`http://safaris-backend.run/storage/tour_header_photos/${tour.header_photo}`"
                class="img-fluid"
                :alt="tour.name"
              >
            </NuxtLink>
          </div>
          <div class="card-body">
            {{ tour.overview }}
          </div>
          <div class="card-footer">
            <NuxtLink :to="`/safari-tours/${tour.slug}`">{{ tour.name }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tours: []
    }
  },
  async fetch() {
    this.tours = await this.$axios.get(`${this.apiURL}/tours`)
      .then(res => this.tours = res.data)
      .catch(err => console.log(err))
  },
  computed: {
    apiURL() {
      return this.$store.getters.apiURL
    }
  },
}
</script>