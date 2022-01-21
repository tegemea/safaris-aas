<template>
  <div>
    <div class="row mb-5">
      <div class="col-md-12 photo-container p-0">
        <img
          :src="`${baseURL}/storage/tour_header_photos/${tour.header_photo}`"
          class="img-fluid"
          :alt="tour.name"
        >
        <div class="overlay"></div>
        <div class="title serif-fonts">
          {{ tour.name }}
          <div class="sub-title serif-fonts cursive-fonts">
            {{ tour.days.length }} {{ tour.days.length > 1 ? 'Days' : 'Day' }} of 
            <span v-for="(cat, i) in tour.categories" class="" :key="cat.id">
              {{ i === tour.days.length - 1 && tour.categories.length > 1 ? '& ' : '' }} 
              {{ cat.name }}{{ i !== tour.days.length - 1 ? ',' : '' }}
            </span>
             in {{ tour.country.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text-justify mb-4" v-html="tour.overview"></div>
          <div v-for="(day, i) in tour.days" :key="day.id" class="mb-4">
            <div class="card">
              <h4 class="card-header">
                <span class="mr-3 badge badge-pill orange-bg text-light">Day {{ i + 1 }}</span>
                <span class="thin-fonts text-capitalize">{{ day.title }}</span>
              </h4>
              <div class="card-body text-justify" v-html="day.description"></div>
              <div v-if="day.photo1 || day.photo2" class="card-footer p-0">
                <div class="row px-3 py-1" v-if="day.photo1 && day.photo2">
                  <div class="col-md-6 px-1">
                    <img :src="`${baseURL}/storage/tour_day_photos/${day.photo1}`" class="img-fluid" :alt="day.title">
                  </div>
                  <div class="col-md-6 px-1">
                    <img :src="`${baseURL}/storage/tour_day_photos/${day.photo2}`" class="img-fluid" :alt="day.title">
                  </div>
                </div>
                <div v-else class="col-lg-12 p-1">
                  <img :src="`${baseURL}/storage/tour_day_photos/${day.photo1 || day.photo2}`" class="img-fluid" :alt="day.title">
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div v-for="category in tour.categories" class="card mb-3" :key="category.id">
            <h4 class="card-header thin-fonts brand-color">Other {{ category.name }}</h4>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <NuxtLink 
                  v-for="theTour in category.tours" 
                  :to="`/tour/${theTour.slug}`" 
                  :key="theTour.id"
                  class="list-group-item thin-fonts text-black-50"
                >
                  <fai :icon="['fas','angle-right']" class="mr-2"></fai>
                  {{ theTour.name }}
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
export default {
  props : [ 'tour', 'baseURL' ],
  head() {
      return {
      title: this.tour.seo_title
        ? this.tour.seo_title
        : this.tour.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.tour.meta_description
            ? this.tour.meta_description
            : this.tour.overview.substr(1, 160)
        }
      ]
    }
  }
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

.card {
  overflow: hidden;
}

.photo-container {
  position: relative;

  .overlay {
    position: absolute;
    top: 0; left: 0;
    background: rgba($color: #000000, $alpha: .4);
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
      border-bottom: 4px solid rgba(255, 255, 0, 0.7);
      left: 50%; transform: translateX(-50%);
    }
  }
}
</style>