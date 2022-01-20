<template>
  <div>
    <div class="row mb-5">
      <div class="col-lg-12 p-0">
        <img 
          :src="`${baseURL}/storage/tour_category_photos/${tourCategory.photo}`" 
          class="img-fluid" 
          :alt="tourCategory.name">
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12"><h1>{{ tourCategory.name }}</h1></div>
      </div>
      <div v-if="tourCategory.tours.length" class="row">
        <div class="col-lg-8">
          safaris kadhaa...
        </div>
        <div class="col-lg-4">
          sidebar
        </div>
      </div>
      <div v-else class="row">
        <div class="col-lg-8">
          safaris hakuna
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'tourCategory','baseURL' ],
  head() {
    return {
      title: this.tourCategory.seo_title ? this.tourCategory.seo_title : this.tourCategory.name
    }
  }
}
</script>