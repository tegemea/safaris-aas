<template>
  <div>
    <div class="row mb-3">
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
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-justify" v-html="destination.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : [ 'destination', 'baseURL' ],
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

<style lang="scss" scoped>
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
    text-shadow: 0 1px 3px #000;

    &::before {
      position: absolute;
      top: 0; left: 0;
      width: 50%; height: 100%;
      border-bottom: 4px solid yellow;
    }
  }
}
</style>