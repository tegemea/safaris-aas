<template>
  <div>
    <div v-if="destination" class="row mb-5">
      <div class="col-md-12 photo-container p-0">
        <img
          :src="`${baseURL}/storage/destination_photos/${destination.photo}`"
          class="img-fluid"
          :alt="destination.photo"
        >
        <div class="overlay"></div>
        <div class="title serif-fonts">{{ destination.name }}</div>
      </div>
    </div>

    <!-- <div v-if="$fetchState.pending" class="col-12 loading">
      <h1 class="text-black-50">Loading...</h1>
      <span class="spinner"></span>
    </div>
    <div v-else-if="$fetchState.error" class="col-12">
      Error while fetching data...
    </div> -->
    <div v-if="destinations.length" class="container">
      <div class="row">
        <div class="col-md-7 col-lg-8 text-justify" v-html="destination.description"></div>
        <div class="col-md-5 col-lg-4 side-bar">
          <div class="card">
            <h3 class="thin-fonts card-header brand-color">
              <fai :icon="['fas','map-marker-alt']" class="mr-3"></fai>
              SAFARI DESTINATIONS
            </h3>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <NuxtLink  
                  v-for="d in sidebarDestinations.slice(0, 5)"
                  :to="`/destinations/${d.slug}`" 
                  class="list-group-item" :key="d.id">
                  <fai :icon="['fas', 'angle-right']" class="mr-3"></fai>
                  {{ d.name }} <br>
                  <small class="text-uppercase link-sub-text">
                    {{ d.category.name }}
                  </small>
                </NuxtLink>
                <div class="list-group-item">...</div>
                <NuxtLink to="#" class="list-group-item">
                  <fai :icon="['fas', 'angle-right']" class="mr-3"></fai>
                  SEE ALL DESTINATIONS
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
      destinations: 'destinations/destinations'
    }),
    destination() {
      return this.destinations.find(d => d.slug === this.$route.params.slug)
    },
    sidebarDestinations: function() {
      return this.destinations.filter(d => d.id !== this.destination.id)
    }
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch()
  },
  // async asyncData() {

  // },
  async fetch() {
    const { data: destinations } = await this.$axios.get(`${this.apiURL}/destinations`)
    this.$store.commit('destinations/SET_DESTINATIONS', destinations)
  },
  head() {
      return {
      title: this.destination.seo_title
        ? this.destination.seo_title
        : this.destination.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.destination.meta_description
            ? this.destination.meta_description
            : this.destination.description
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

.photo-container {
  position: relative;

  .overlay {
    position: absolute;
    top: 0; left: 0;
    // background: rgba($color: #000000, $alpha: .1);
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

.side-bar {
  .card {
    .card-body {
      .list-group {
        .list-group-item {
          color: #333;
          transition: all .3s ease;
          font-weight: bold;

          &:hover {
            color: white;
            background: $orange-color;
            text-decoration: none;

            .link-sub-text {
              color: lighten($brand-color, 15);
            }
          }

          .link-sub-text {
            margin-left: 28px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>