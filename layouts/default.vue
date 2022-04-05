<template>
  <div id="layout">
    <div>
      <div class="container-fluid p-0"><UIHeader /></div>
      <div class="container-fluid main"><Nuxt keep-alive /></div>
      <div class="container-fluid p-0"><UIFooter /></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'apiURL',
    ]),
  },
  activated() {
    if(this.$fetchState.timestamp <= Date.now() - 3000) this.$fetch();
  },
  async fetch() {
    const [ 
      { data: pages }, 
      { data: tours }, 
      { data: photos },
      { data: destinations }, 
      { data: tourCategories }
    ]
    = await Promise.all([
      this.$axios.get(`${this.apiURL}/pages`),
      this.$axios.get(`${this.apiURL}/tours`),
      this.$axios.get(`${this.apiURL}/photos`),
      this.$axios.get(`${this.apiURL}/destinations`),
      this.$axios.get(`${this.apiURL}/tour-categories`)
    ])
    
    // send all data in store (mutations)
    this.storePages(pages);
    this.storeTours(tours);
    this.storePhotos(photos);
    this.storeDestinations(destinations);
    this.storeTourCategories(tourCategories);
  },
  methods: {
    ...mapMutations([
      'storePages',
      'storeTours',
      'storePhotos',
      'storeDestinations',
      'storeTourCategories',
    ])
  },
}
</script>

<style lang="scss">
.rotate-icon {
  animation: rotating 2s infinite linear;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} 

@media screen and (min-width: 768px) {
  .main {
    position: relative;
    top: -65px;
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0);
  }
  // 50% {
  //   transform: rotate(180deg);
  // }
  100% {
    transform: rotate(360deg);
  }
}
</style>