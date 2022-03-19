<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-4" v-for="destination in destinations" :key="destination.id">
          <div class="card-deck">
            <div class="card mb-4">
              <div class="card-body p-0">
                <NuxtLink :to="`/destinations/${destination.slug}`" :title="destination.name">
                  <img 
                    :src="`${baseURL}/storage/destination_photos/${destination.photo}`"
                    class="img-fluid"
                    :alt="destination.photo"
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
                    <fai :icon="['fas','map-marker-alt']" class="mr-2 orange-color"></fai>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store, $axios }) {
    const { data } = await $axios.get(`${store.getters.apiURL}/destinations`)
    return { destinations: data };
  },
  computed: {
    ...mapGetters([
      'baseURL',
    ]),
  },
  methods: {
    ...mapActions(['getDestinations'])
  }
}
</script>