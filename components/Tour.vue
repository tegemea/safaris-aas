<template>
  <div class="row">
    <div class="col-md-12">
      <img
        :src="`http://safaris-backend.run/storage/tour_header_photos/${tour.header_photo}`"
        class="img-fluid mb-3"
        :alt="tour.name"
      >
    </div>
    <div class="col-md-8 text-justify" v-html="tour.overview"></div>
  </div>
</template>

<script>
export default {
  props : [ 'tour' ],
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