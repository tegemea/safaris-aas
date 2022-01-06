<template>
  <div class="row">
    <div class="col-md-12">
      <img
        :src="`http://safaris-backend.run/storage/destination_photos/${destination.photo}`"
        class="img-fluid mb-3"
        :alt="destination.photo"
      >
    </div>
    <div class="col-md-8 text-justify" v-html="destination.description"></div>
  </div>
</template>

<script>
export default {
  props : [ 'destination' ],
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
            : this.destination.description.substr(1, 160)
        }
      ]
    }
  }
}
</script>