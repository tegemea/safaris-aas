<template>
  <div>
    <div class="row mb-5">
      <div v-if="randomTour" class="col-md-12 photo-container p-0">
        <img
          :src="`${baseURL}/storage/tour_header_photos/${randomTour.header_photo}`"
          class="img-fluid"
          :alt="randomTour.name"
        >
        <div class="overlay"></div>
        <div class="title serif-fonts">Photo Gallery</div>
      </div>
    </div>
    
    <!-- <div v-if="$fetchState.pending" class="loading">
      <h1 class="text-black-50">Loading...</h1>
      <span class="spinner"></span>
    </div>
    <div v-else-if="$fetchState.error">
      Error while fetching data...
    </div> -->
    <div v-if="photos.length" class="container">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="card-columns">
            <div v-for="p in photos" class="card" :key="p.id">
              <img :src="`${baseURL}/storage/gallery_photos/${p.file}`" :alt="`Gallery Photo - ${p.id}`" class="card-img-top">
              <div v-if="p.name || p.description" class="card-body pb-0">
                <h5 class="card-title thin-fonts text-capitalize">{{ p.name }}</h5>
                <div class="card-text mb-3 text-black-50">{{ p.description }}</div>
              </div>
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
  computed: {
    ...mapGetters({
      baseURL: 'baseURL',
      apiURL: 'apiURL',
      tours: 'tours/tours',
      photos: 'photos/photos'
    }),
    randomTour: function() {
      if(this.tours.length) {
        return this.tours[Math.floor(Math.random() * this.tours.length)];
      } else console.log('no tours!')
    }
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 3000) this.$fetch();
  },
  async fetch() {
    const { data: photos } = await this.$axios.get(`${this.apiURL}/photos`);
    const { data: tours } = await this.$axios.get(`${this.apiURL}/tours`);
    
    if(photos.length) this.$store.commit('photos/SET_PHOTOS', photos);
    if(tours.length) this.$store.commit('tours/SET_TOURS', tours);
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

label {
  font-family: $thin-fonts;
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
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4vw;
    color: #fff;
    padding: 30px 0;
    text-shadow: 0 1px 3px #000;

    .sub-title {
      font-size: 2.5vw;
      color: #fff;
      opacity: .4;
    }

    &::before {
      Content:'';
      position: absolute;
      top: 0; left: 0;
      width: 30%; height: 100%;
      border-bottom: 4px solid rgba($orange-color, .7);
      left: 50%; transform: translateX(-50%);
    }
  }
}
</style>