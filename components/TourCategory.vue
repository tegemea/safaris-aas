<template>
  <div>
    
    <!-- <div v-if="$fetchState.pending" class="col-12 loading">
      <h1 class="text-black-50">Loading...</h1>
      <span class="spinner"></span>
    </div>
    <div v-else-if="$fetchState.error" class="col-12 py-5">
      <h5 class="text-secondary text-center">Sorry. Error fetching Tours, please refresh your page..!</h5>
    </div> -->
    
    <div v-if="tourCategory">
      <div class="row mb-5">
        <div class="col-lg-12 photo-container p-0">
          <img 
            :src="`${baseURL}/storage/tour_category_photos/${tourCategory.photo}`" 
            class="img-fluid" 
            :alt="tourCategory.name">
          <div class="overlay"></div>
          <div class="title serif-fonts">{{ tourCategory.name }}</div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mb-4 text-justify" v-html="tourCategory.description"></div>
          <div v-if="tourCategory.tours.length" class="col-md-7 col-lg-8 mb-3">
            <div class="row">
              <div v-for="tour in tourCategory.tours" class="col-lg-6" :key="tour.id">
                <div class="card mb-3">
                  <div class="card-body p-0">
                    <NuxtLink :to="`/tour/${tour.slug}`">
                      <img 
                        :src="`${baseURL}/storage/tour_feature_photos/${tour.feature_photo}`"
                        :title="`${tour.days.length} days ${tour.name}`"
                        class="img-fluid" :alt="tour.name"
                      >
                    </NuxtLink>
                  </div>
                  <h5 class="card-footer mb-0">
                    <NuxtLink :to="`/tour/${tour.slug}`" 
                      :title="`${tour.days.length} days ${tour.name}`"
                      class="brand-color thin-fonts">
                      <fa-icon :icon="['fas', 'angle-right']" class="mr-2" />
                      {{ tour.days.length }} days {{ tour.name }}
                    </NuxtLink>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div v-if="tourCategory.tours.length" class="col-md-5 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header thin-fonts">African Safari Experiences</h3>
              <div class="card-body p-0">
                <div class="list-group list-group-flush">
                  <NuxtLink 
                    v-for="category in tourCategories" 
                    :to="`/safari-tours/${category.slug}`" 
                    class="list-group-item text-black-50" 
                    :key="category.id"
                  >
                    <fa-icon :icon="['fas','angle-right']" class="mr-2" />
                    {{ category.name }}
                    <span v-if="category.tours.length" class="badge badge-pill float-right badge-secondary">
                      {{ category.tours.length }}
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-justify">
            {{ tourCategory.description }}
            <div class="mt-5">
              <h3>Other African Safari Experiences</h3>
              <ul class="list-inline">
                <NuxtLink 
                  v-for="category in categoriesWithoutCurrentCategory"
                  :to="`/safari-tours/${category.slug}`"
                  class="list-inline-item mr-4 text-black-50"
                  :title="category.name"
                  :key="category.id"
                >
                  {{ category.name }} 
                  {{ category.tours.length 
                    ? (category.tours.length > 1 
                      ? ` - ( ${category.tours.length} tours )` 
                      : ` - ( ${category.tours.length} tour )`) 
                    : '' }}
                </NuxtLink>
              </ul>
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
      tourCategories: 'tourCategories/tourCategories'
    }),
    tourCategory() {
      return this.tourCategories.find(c => c.slug === this.$route.params.slug)
    },
    categoriesWithoutCurrentCategory: function() {
      return this.tourCategories.filter(c => c.id !== this.tourCategory.id)
    }
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
      title: this.tourCategory.seo_title 
      ? this.tourCategory.seo_title 
      : this.tourCategory.name
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the chosen color for only the exact matching link */
a.nuxt-link-exact-active {
  color: rgba($color: orange, $alpha: 1.0) !important;
  text-decoration: none;
  cursor: default;
}

.photo-container {
  position: relative;

  .overlay {
    position: absolute;
    top: 0; left: 0;
    // background: rgba($color: #000000, $alpha: .4);
    width: 100%;
    height: 100%;
  }

  .title {
    position: absolute;
    width: 70%;
    text-align: center;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5vw;
    color: #fff;
    padding: 30px 0;
    text-shadow: 0 1px 3px #000;

    &::before {
      Content:'';
      position: absolute;
      top: 0; left: 0;
      width: 30%; height: 100%;
      border-bottom: 4px solid rgba(255, 255, 0, 0.7);
      left: 50%; transform: translateX(-50%);
    }
  }
}

</style>