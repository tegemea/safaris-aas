<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-lg-12 photo-container p-0">
          <img :src="`${baseURL}/storage/tour_header_photos/${tours[0].header_photo}`" class="img-fluid" :alt="tours[0].name">
          <div class="overlay"></div>
          <div class="title serif-fonts">Discover about Tanzania Wildlife & Lifestyle before you Die..!</div>
        </div>
        <!-- <div v-if="tours.length" class="col-12 p-0">
          <img :src="`${baseURL}/storage/tour_header_photos/${tours[0].header_photo}`" class="img-fluid" :alt="tours[0].name">
        </div> -->
      </div>
    </div>
    <div class="container">
      <div v-if="about" class="row mt-5">
        <div class="col-lg-12">
          <h1 class="thin-fonts brand-color text-center mb-3">Welcome to Animal Action Safaris</h1>
          <div class="text-center" 
            v-html="`${about.description.length > 300 
            ? about.description.substr(0, 300) + '...' 
            : about.description}`"
          ></div>
          <div class="text-center mt-4 d-flex justify-content-center align-items-center">
            <NuxtLink :to="`/about-us/${about.slug}`" class="btn btn-outline-warning mx-2">
              <fa-icon :icon="['fas','angle-right']" class="mr-2" /> Read More
            </NuxtLink>
            <NuxtLink :to="`/safari-tours`" class="btn btn-secondary mx-2">Tanzania Safaris & Tours</NuxtLink>
            <div class="ml-2">
              <div id="TA_linkingWidgetRedesign997" class="TA_linkingWidgetRedesign"><ul id="GtdnhA3eny4D" class="TA_links APItbAqe"><li id="LSbjUfSesHP" class="eGBIsj1DSEt"><a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g297913-d23988397-Reviews-Animal_Action_Safaris_Limited-Arusha_Arusha_Region.html"><img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor"/></a></li></ul></div><script async src="https://www.jscache.com/wejs?wtype=linkingWidgetRedesign&amp;uniq=997&amp;locationId=23988397&amp;lang=en_US&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
            </div>
          </div>
        </div>
      </div>
      
      <!-- featured tours -->
      <div v-if="featuredTours.length > 1" class="featured-tours-container row mt-5">
        <div class="col-12 mb-3">
          <h2 class="section-title text-center brand-color thin-fonts"><span>Tanzania Safari Offers</span></h2>
        </div>
        <div v-for="fTour in featuredTours" class="col-md-6 mb-3" :key="fTour.id">
          <div class="card">
            <div class="card-body p-0">
              <NuxtLink :to="`/tour/${fTour.slug}`">
                <img 
                  :src="`${baseURL}/storage/tour_feature_photos/${fTour.feature_photo}`" 
                  class="img-fluid"
                  :alt="fTour.name"
                >
                <div class="overlay"></div>
                <div class="details">
                  <span class="days thin-fonts">{{ fTour.days.length }} Days</span>
                </div>
                <div class="featured-tour-title">
                  <h3 class="thin-fonts text-white mb-0 text-truncate">{{ fTour.name }}</h3>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- tour categories -->
      <div v-if="limitedTourCategories.length" class="row tour-categories mt-5">
        <div class="col-12 mb-3">
          <h2 class="section-title text-center brand-color thin-fonts"><span>Tanzania Experiences we Offer</span></h2>
        </div>
        <div v-for="hTourCategory in limitedTourCategories" class="col-md-4 mb-3" :key="hTourCategory.id">
          <div class="card">
            <div class="card-body p-0">
              <NuxtLink :to="`/safari-tours/${hTourCategory.slug}`" :title="hTourCategory.name">
                <img :src="`${baseURL}/storage/tour_category_photos/${hTourCategory.photo}`" class="img-fluid" :alt="hTourCategory.name">
              </NuxtLink>
            </div>
            <div class="card-footer">
              <h4 class="thin-fonts mb-0">
                <NuxtLink :to="`/safari-tours/${hTourCategory.slug}`" 
                  :title="hTourCategory.name"
                  class="text-decoration-none text-black-50"
                >
                  <span class="d-inline-block text-truncate w-75">{{ hTourCategory.name }}</span>
                  <span class="badge badge-pill badge-secondary float-right px-2 d-md-none d-lg-inline-block">
                    {{ hTourCategory.tours.length }} {{ hTourCategory.tours.length > 1 ? 'tours' : 'tour' }}
                  </span>
                </NuxtLink>
              </h4>
              <div 
                v-html="`${hTourCategory.description.length > 150 
                ? hTourCategory.description.substr(0,150)+'...' 
                : hTourCategory.description}`" 
                class="mt-2 text-justify"
              ></div>
            </div>

          </div>
        </div>
      </div>

      <!-- safari destinations -->
      <div v-if="limitedDestinations.length" class="row safari-destinations mt-5">
        <div class="col-12 mb-3">
          <h2 class="section-title text-center brand-color thin-fonts"><span>Tanzania Safari Destinations</span></h2>
        </div>
        <div v-for="hDestination in limitedDestinations" class="col-md-6 col-lg-4 mb-3" :key="hDestination.id">
          <div class="card">
            <div class="card-body p-0">
              <NuxtLink :to="`/destinations/${hDestination.slug}`" :title="hDestination.name">
                <img :src="`${baseURL}/storage/destination_photos/${hDestination.photo}`" class="img-fluid" :alt="hDestination.name">
              </NuxtLink>
            </div>
            <div class="card-body">
              <h4 class="thin-fonts text-truncate">
                <NuxtLink :to="`/destinations/${hDestination.slug}`" class="text-black-50" :title="hDestination.name">
                  <fa-icon :icon="['fas','map-marker-alt']" class="mr-2" />{{ hDestination.name }}
                </NuxtLink>
              </h4>
              <div class="text-justify" v-html="`${hDestination.description.substr(0, 120)}...`"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row mt-5 text-center align-items-center">
        <div class="col mb-4">
          <a href="https://tanzaniatourism.go.tz/en" title="TTB" target="_blank"><img src="@/assets/images/ttb.png" alt="TTB"></a>
        </div>
        <div class="col mb-4">
          <a href="https://tanzaniaparks.go.tz" title="TANAPA" target="_blank"><img src="@/assets/images/tanapa.png" alt="TANAPA"></a>
        </div>
        <div class="col mb-4">
          <a href="https://www.tripadvisor.com/Attraction_Review-g297913-d23988397-Reviews-Animal_Action_Safaris_Limited-Arusha_Arusha_Region.html" title="TripAdvisor" target="_blank"><img src="@/assets/images/tripadvisor.png" alt="Trip Advisor"></a>
        </div>
        <div class="col mb-4">
          <a href="https://flydoc.org" title="Amref Flying Docs" target="_blank"><img src="@/assets/images/amref.png" alt="Amref"></a>
        </div>
        <div class="col mb-4">
          <div id="TA_cdswritereviewnew824" class="TA_cdswritereviewnew"><ul id="cu3QXR" class="TA_links dJhpjup2E7t"><li id="UWUm2cip2M" class="VZiIAjIkfbKM"><a target="_blank" href="https://www.tripadvisor.com/"><img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor"/></a></li></ul></div><script async src="https://www.jscache.com/wejs?wtype=cdswritereviewnew&amp;uniq=824&amp;locationId=23988397&amp;lang=en_US&amp;lang=en_US&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { sortBy } from 'lodash';

export default {
  computed: {
    ...mapGetters({
      baseURL: 'baseURL',
      tourCategories: 'tourCategories/tourCategories',
      pages: 'pages/pages',
      tours: 'tours/tours',
      destinations: 'destinations/destinations'
    }),
    about() { return this.pages.find(p => p.slug.includes('about')) },
    featuredTours() { return this.tours.filter(t => +t.featured === 1) },
    limitedTourCategories() {  return [...(sortBy(this.tourCategories.filter(c => c.tours.length > 0), ['tours']))].splice(0,3); },
    limitedDestinations() { let lDs = [...this.destinations]; return lDs.splice(0,6) }
  },
  head() {
    return {
      title: 'Budget Tanzania Safaris & Luxury Holidays - Animal Action Safaris'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

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
    bottom: 5%;
    left: 50%;
    font-family: $square-peg;
    transform: translateX(-50%);
    font-size: 4vw;
    color: #fff;
    padding: 30px 0;
    text-shadow: 0 1px 3px #000;

    // &::before {
    //   Content:'';
    //   position: absolute;
    //   top: 0; left: 0;
    //   width: 30%; height: 100%;
    //   border-bottom: 4px solid rgba(255, 255, 0, 0.7);
    //   left: 50%; transform: translateX(-50%);
    // }
  }
}

  .featured-tours-container {
    .card {
      .card-body {
        position: relative;

        .overlay {
          position: absolute;
          left: 0; top: 0; width: 100%; height: 100%;
          background: linear-gradient(transparent 7%, rgba(black, 1));
        }

        .details {
          position: absolute;
          bottom: 6%;
          left: 5%;
          font-size: 10rem;
          color: transparentize(#fff, .9);
        }

        .featured-tour-title {
          max-width: 90%;
          position: absolute;
          bottom: 5%;
          left: 5%;
        }
      }
    }
  }

  .section-title {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 1px;
      width: 100%;
      background: $brand-color;
      z-index: -1;
    }

    span {
      background: white;
      padding: 2px 25px;
    }
  }
</style>
