<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div v-if="$fetchState.pending" class="col-12 loading">
          <h1 class="text-black-50">Loading...</h1>
          <span class="spinner"></span>
        </div>
        <div v-else-if="$fetchState.error">
          Error while fetching data...
        </div>
        
        <!-- <div v-if="tourCategories.length"> -->
          <div class="col-md-6" v-for="tourCategory in tourCategories" :key="tourCategory.id">
            <div class="card mb-4">
              <div class="card-body p-0">
                <NuxtLink :to="`/safari-tours/${tourCategory.slug}`" :title="tourCategory.name">
                  <img 
                    :src="`${baseURL}/storage/tour_category_photos/${tourCategory.photo}`"
                    class="img-fluid"
                    :alt="tourCategory.name"
                  >
                </NuxtLink>
              </div>
              <h1 class="thin-fonts card-body pb-0 ellipsis">
                <NuxtLink :to="`/safari-tours/${tourCategory.slug}`" 
                  class="text-black-50 text-decoration-none"
                  :title="tourCategory.name"
                >
                  <fa-icon :icon="['fas','paw']" class="mr-2" />
                  {{ tourCategory.name }}
                </NuxtLink>
              </h1>
              <div class="card-body text-justify pt-0"
                v-html="tourCategory.description.length > 150 
                ? tourCategory.description.substring(0, 150) + '...'
                : tourCategory.description"
              >
              </div>
              <h4 class="card-footer thin-fonts">
                <NuxtLink 
                  :to="`/safari-tours/${tourCategory.slug}`"
                  :title="`View ${tourCategory.name}`"
                  class="orange-color"
                >
                  <div class="badge badge-pill badge-secondary">
                    <fa-icon :icon="['fas','angle-right']" class="mr-1" />
                    View {{ tourCategory.name }}
                    <span v-if="tourCategory.tours.length" class="text-warning">
                      - {{ tourCategory.tours.length }}
                        {{ tourCategory.tours.length > 1 ? 'tours' : 'tour' }}
                    </span>
                  </div>
                </NuxtLink>
              </h4>
            </div>
          </div>
        <!-- </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      baseURL: 'baseURL',
      apiURL: 'apiURL',
      tourCategories: 'tourCategories/tourCategories'
    })
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch();
  },
  async fetch() {
    const { data: categories } = await this.$axios.get(`${this.apiURL}/tour-categories`);
    this.$store.commit('tourCategories/SET_TOUR_CATEGORIES', categories);
  },
  head() {
    return {
      title: 'Budget Tanzania Safaris & Luxury Holidays'
    }
  },
}
</script>