<template>
  <div>
    
    <!-- <div v-if="$fetchState.pending" class="col-12 loading">
      <h1 class="text-black-50">Loading...</h1>
      <span class="spinner"></span>
    </div>
    <div v-else-if="$fetchState.error" class="col-12">
      Error while fetching data...
    </div> -->
    <div v-if="page">
        <div class="row mb-5">
          <div class="col-md-12 photo-container p-0">
            <img
              :src="`${baseURL}/storage/page_photos/${page.photo}`"
              class="img-fluid"
              :alt="page.photo"
            >
            <div class="overlay"></div>
            <div class="title serif-fonts text-capitalize">{{ page.name }}</div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7 mb-3">
              <div class="text-justify" v-html="page.description"></div>
              <div class="row d-flex align-items-center" v-if="page.slug.includes('about')">
                <div class="col-md-4">
                  <img src="@/assets/images/director.jpg" class="img-fluid rounded rounded-circle border p-2" alt="Director, Leonard">
                </div>
                <h4 class="col-md-8 thin-fonts">Director <br><span class="text-black-50">Leonard Alfayo</span></h4>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-5 side-bar mb-3">
              <div class="card">
                <h3 class="thin-fonts card-header brand-color">
                  <fa-icon :icon="['fas','map-marker-alt']" class="mr-3" />
                  COMPANY LINKS
                </h3>
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush">
                    <NuxtLink  
                      v-for="p in sidebarPages"
                      :to="`/about-us/${p.slug}`" 
                      class="list-group-item" :key="p.id">
                      <fa-icon :icon="['fas', 'angle-right']" class="mr-3" />
                      {{ p.name }}
                    </NuxtLink>
                  </ul>
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
      pages: 'pages/pages'
    }),
    page() {
      return this.pages.find(p => p.slug === this.$route.params.slug)
    },
    sidebarPages: function() {
      return this.pages.filter(p => p.id !== this.page.id)
    }
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch();
  },
  async fetch() {
    const { data: pages } = await this.$axios.get(`${this.apiURL}/pages`);
    this.$store.commit('pages/SET_PAGES', pages);
  },
  head() {
      return {
      title: this.page.seo_title
        ? this.page.seo_title
        : this.page.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.meta_description
            ? this.page.meta_description
            : this.page.description
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