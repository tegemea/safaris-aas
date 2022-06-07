<template>
  <div>
    
    <!-- <div v-if="$fetchState.pending" class="col-12 loading">
      <h1 class="text-black-50">Loading...</h1>
      <span class="spinner"></span>
    </div>
    <div v-else-if="$fetchState.error" class="col-12">
      Error while fetching data...
    </div> -->
    
    <div v-if="destinations.length" class="container pt-5">
      <div class="row">
        <div class="col-md-4" v-for="destination in destinations" :key="destination.id">
          <div class="card-deck">
            <div class="card mb-4">
              <div class="card-body p-0">
                <NuxtLink :to="`/destinations/${destination.slug}`" :title="destination.name">
                  <img 
                    :src="`${baseURL}/storage/destination_photos/${destination.photo}`"
                    class="img-fluid"
                    :alt="destination.name"
                  >
                </NuxtLink>
              </div>
              <div v-if="destination.description" class="card-body text-justify multiline-ellipsis"
                v-html="destination.description.length > 130 ? `${destination.description.slice(0, 130)}...` : destination.description"
              >
              </div>
              <div class="card-footer">
                <NuxtLink :to="`/destinations/${destination.slug}`" 
                  class="text-decoration-none"
                  :title="destination.name"
                >
                  <h4 class="thin-fonts text-black-50 m-0 ellipsis">
                    <fa-icon :icon="['fas','map-marker-alt']" class="mr-2 orange-color" />
                    {{ destination.name }}
                  </h4>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      apiURL: 'apiURL',
      baseURL: 'baseURL',
      destinations: 'destinations/destinations'
    })
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 3000) this.$fetch();
  },
  async fetch() {
    const { data: destinations } = await this.$axios.get(`${this.apiURL}/destinations`);
    this.$store.commit('destinations/SET_DESTINATIONS', destinations)
  },
  head() {
    return {
      title: 'African Safari Destinations'
    }
  }
}
</script>