<template>
  <div>
    <div class="row">
      <div class="col-md-4" v-for="destination in destinations" :key="destination.id">
        <div class="card mb-4">
          <div class="card-body p-0">
            <NuxtLink :to="`/destinations/${destination.slug}`">
              <img 
                :src="`http://safaris-backend.run/storage/destination_photos/${destination.photo}`"
                class="img-fluid"
                :alt="destination.photo"
              >
            </NuxtLink>
          </div>
          <div class="card-body text-justify">
            {{ destination.description.length > 150 ? destination.description.substr(0, 150) + '...' : destination.description }}
          </div>
          <div class="card-footer">
            <NuxtLink :to="`/destinations/${destination.slug}`">{{ destination.name }}</NuxtLink>
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
      destinations: []
    }
  },
  async fetch() {
    this.destinations = await this.$axios.get(`${this.apiURL}/destinations`)
      .then(res => this.destinations = res.data)
      .catch(err => console.log(err))
  },
  computed: {
    apiURL() {
      return this.$store.getters.apiURL
    }
  },
  mounted() {
    //
  }
}
</script>