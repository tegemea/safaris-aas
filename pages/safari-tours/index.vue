<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-6" v-for="tourCategory in tourCategories" :key="tourCategory.id">
          <div class="card mb-4">
            <div class="card-body p-0">
              <NuxtLink :to="`/safari-tours/${tourCategory.slug}`">
                <img 
                  :src="`${baseURL}/storage/tour_category_photos/${tourCategory.photo}`"
                  class="img-fluid"
                  :alt="tourCategory.name"
                >
              </NuxtLink>
            </div>
            <div class="card-body text-justify"
              v-html="tourCategory.description.length > 150 
              ? tourCategory.description.substring(0, 150) + '...'
              : tourCategory.description"
            >
            </div>
            <div class="card-footer">
              <NuxtLink :to="`/safari-tours/${tourCategory.slug}`">{{ tourCategory.name }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ store, $axios }) {

    const { data } = await $axios.get(`${store.getters.apiURL}/tour-categories`)
    return { tourCategories : data } 
  },
  computed: {
    ...mapGetters([
      'apiURL',
      'baseURL'
    ])
  },
}
</script>