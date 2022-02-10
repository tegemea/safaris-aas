<template>
  <div>
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
        <div class="col-md-8 text-justify mb-3" v-html="page.description"></div>
        <div class="col-md-4 side-bar mb-3">
          <div class="card">
            <h3 class="thin-fonts card-header brand-color">
              <fai :icon="['fas','map-marker-alt']" class="mr-3"></fai>
              COMPANY LINKS
            </h3>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <NuxtLink  
                  v-for="p in sidebarPages"
                  :to="`/about-us/${p.slug}`" 
                  class="list-group-item" :key="p.id">
                  <fai :icon="['fas', 'angle-right']" class="mr-3"></fai>
                  {{ p.name }}
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
  props : [ 'page', 'pages', 'baseURL' ],
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
            : this.page.description.substr(1, 160)
        }
      ]
    }
  },
  computed: {
    sidebarPages: function() {
      return this.pages.filter(p => p.id !== this.page.id)
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