<template>
  <div id="header">
    <div class="topbar">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-lg-left col-lg-9 thin-fonts">
            <span class="d-none d-md-inline-block">Welcome to Animal Action Safaris,</span>
            <span>Discover about Tanzania Wildlife & Lifestyle before you Die..!</span>
          </div>
          <div class="d-none d-lg-block col-lg-3 text-right">
            <NuxtLink to="/about-us/about-us">About us</NuxtLink>
            <NuxtLink to="/contact-us">Contact us</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="container pb-4">
        <div class="row px-2">
          <div class="logo-container">
            <NuxtLink to="/" class="logo">
              <img 
                :src="`${baseURL}/storage/generic_photos/logo-white-transparent.png`" 
                class="img-fluid" alt=""
              >
            </NuxtLink>
          </div>
          <div class="contacts-container">
            <span class="contacts pr-4 d-none d-md-flex">
              <fa-icon :icon="['fab', 'whatsapp']" class="contact-icon fa-3x mr-3" />
              <span>
                <a href="https://wa.me/255784268066" class="thin-fonts phone-number" target="_blank" title="Contact us via WhatsApp">
                  +255 784 268066
                </a> <br>
                <a href="mailto:info@aasafari.com" target="_blank" title="Send us an Email">info(at)aasafari.com</a>
              </span>
            </span>
            <span class="address d-none d-lg-flex ml-2 px-4">
              <fa-icon :icon="['far','building']" class="address-icon fa-3x mr-3" />
              <span>
                <span class="thin-fonts location">Office at Suye Olorien, Moshono</span> <br>
                <span>Arusha Tanzania</span>
              </span>
            </span>
            <span class="socials d-none d-md-flex pl-4">
              <a href="https://www.facebook.com/Animal-Action-Safaris-104686595560745/" target="_blank" title="Follow us on Facebook">
                <fa-icon :icon="['fab', 'facebook']" class="fa-2x text-warning" />
              </a>
              <a href="https://instagram.com/animalactionsafaris" target="_blank" title="Follow us on Instagram">
                <fa-icon :icon="['fab', 'instagram']" class="fa-2x ml-3 text-warning" />
              </a>
              <a href="https://www.linkedin.com/in/animal-action-121742237/" target="_blank" title="Contact us on Skype">
                <fa-icon :icon="['fab', 'linkedin']" class="fa-2x ml-3 text-warning" />
              </a>
            </span>
            <button @click.prevent="showMobileMenu" class="d-md-none btn" style="z-index: 300">
              <fa-icon :icon="['fas','bars']" class="fa-2x text-warning" />
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main Navigation - Desktop-->
    <div class="menu d-none d-md-flex" id="menu">
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <ul class="list-unstyled text-uppercase">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li @click.prevent="showDropDowns.pages = !showDropDowns.pages">
                <NuxtLink to="/about-us/about-us">About us</NuxtLink>
                <transition name="slide">
                  <span class="dropdown">
                    <ul class="dropdown-ul">
                      <li v-for="hPage in pages" :key="hPage.id">
                        <NuxtLink :to="`/about-us/${hPage.slug}`">{{ hPage.name }}</NuxtLink>
                      </li>
                    </ul>
                  </span>
                </transition>
              </li>
              <li @click.prevent="showDropDowns.tourCategories = !showDropDowns.tourCategories">
                <NuxtLink to="/safari-tours">Safaris & Tours</NuxtLink>
                <transition name="slide">
                  <span class="dropdown">
                    <ul class="dropdown-ul">
                      <li v-for="hTourCategory in tourCategories" :key="hTourCategory.id">
                        <NuxtLink :to="`/safari-tours/${hTourCategory.slug}`" class="d-flex justify-content-between align-items-center">
                          {{ hTourCategory.name }} 
                          <span v-if="hTourCategory.tours.length" 
                            class="badge badge-pill ml-3 badge-dark">{{ hTourCategory.tours.length }}
                          </span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </span>
                </transition>
              </li>
              <li @click.prevent="showDropDowns.destinations = !showDropDowns.destinations">
                <NuxtLink to="/destinations">Safari Destinations</NuxtLink>
                <transition name="slide">
                  <span class="dropdown">
                    <ul class="dropdown-ul">
                      <li v-for="hDestination in destinations.slice(0, 8)" :key="hDestination.id">
                        <NuxtLink :to="`/destinations/${hDestination.slug}`">{{ hDestination.name }}</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/destinations">...See All Destinations</NuxtLink>
                      </li>
                    </ul>
                  </span>
                </transition>
              </li>
              <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
              <li><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main Navigation - Mobile -->
    <div v-if="MobileMenuVisible" class="menu" id="menu">
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <ul class="list-unstyled text-uppercase">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li @click.prevent="showDropDowns.tourCategories = !showDropDowns.tourCategories">
                <NuxtLink to="/safari-tours">Safaris & Tours</NuxtLink>
                <transition name="slide">
                  <span class="dropdown">
                    <ul class="dropdown-ul">
                      <li v-for="hTourCategory in tourCategories" :key="hTourCategory.id">
                        <NuxtLink :to="`/safari-tours/${hTourCategory.slug}`" class="d-flex justify-content-between align-items-center">
                          {{ hTourCategory.name }} 
                          <span v-if="hTourCategory.tours.length" 
                            class="badge badge-pill ml-3 badge-dark">{{ hTourCategory.tours.length }}
                          </span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </span>
                </transition>
              </li>
              <li @click.prevent="showDropDowns.destinations = !showDropDowns.destinations">
                <NuxtLink to="/destinations">Safari Destinations</NuxtLink>
                <transition name="slide">
                  <span class="dropdown">
                    <ul class="dropdown-ul">
                      <li v-for="hDestination in destinations" :key="hDestination.id">
                        <NuxtLink :to="`/destinations/${hDestination.slug}`">{{ hDestination.name }}</NuxtLink>
                      </li>
                    </ul>
                  </span>
                </transition>
              </li>
              <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
              <li @click.prevent="showDropDowns.pages = !showDropDowns.pages">
                <NuxtLink to="/about-us/about-us">About us</NuxtLink>
                <transition name="slide">
                  <span class="dropdown">
                    <ul class="dropdown-ul">
                      <li v-for="hPage in pages" :key="hPage.id">
                        <NuxtLink :to="`/about-us/${hPage.slug}`">{{ hPage.name }}</NuxtLink>
                      </li>
                    </ul>
                  </span>
                </transition>
              </li>
              <!-- <li><NuxtLink to="/blog">Blog</NuxtLink></li> -->
              <li><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
              <!-- <li><NuxtLink to="/bookings">Bookings</NuxtLink></li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      showDropDowns: {
        tourCategories: false,
        destinations: false,
        pages: false
      }
    }
  },
  computed: {
    ...mapGetters({
      apiURL: 'apiURL',
      pages: 'pages/pages',
      tourCategories: 'tourCategories/tourCategories',
      destinations: 'destinations/destinations',
      MobileMenuVisible: 'MobileMenuVisible',
      baseURL: 'baseURL'
    })
  },
  watch: {
    $route(to, from) {
      this.hideMobileMenu();
    }
  },
  mounted() {
    this.$fb.enable();
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch();
  },
  async fetch() {
    const { data: pages } = await this.$axios.get(`${this.apiURL}/pages`);
    const { data: tourCategories } = await this.$axios.get(`${this.apiURL}/tour-categories`);
    const { data: destinations } = await this.$axios.get(`${this.apiURL}/destinations`);

    if(pages.length) this.$store.commit('pages/SET_PAGES', pages);
    if(tourCategories.length) this.$store.commit('tourCategories/SET_TOUR_CATEGORIES', tourCategories);
    if(destinations.length) this.$store.commit('destinations/SET_DESTINATIONS', destinations);
    
  },
  methods: {
    ...mapMutations(['showMobileMenuView', 'hideMobileMenuView']),
    showMobileMenu() {
      this.showMobileMenuView();
    },
    hideMobileMenu() {
      this.hideMobileMenuView();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

// styles for main menus
.menu ul li a.nuxt-link-active {
  font-weight: bold;
  // color: $brand-color;
}
/* exact link will show the chosen color for only the exact matching link */
.menu ul li a.nuxt-link-exact-active:not(.logo) {
  color: $orange-color !important;
  text-shadow: 0 1px 3px #000;
  border: 1px solid $orange-color !important;
  cursor: default;
}

// styles for dropdown menus
.menu ul li ul li a.nuxt-link-active {
  font-weight: bold;
  // color: $brand-color;
}
/* exact link will show the chosen color for only the exact matching link */
.menu ul li ul li a.nuxt-link-exact-active:not(.logo) {
  color: #000 !important;
  text-shadow: 0 1px 1px $orange-color;
  border: none !important;
  cursor: default;
}



.topbar {
  padding: 6px 0;
  font-family: $serif-font;
  font-size: 1rem;
  // font-weight: bold;
  background: $orange-color;
  border-bottom: 1px solid #222;
  color: rgba($base-color, .7);

  .container {
    .row {
      display: flex;
      justify-content: space-between;

      div {
        a {
          color: rgba($base-color, .7);
          margin-left: 10px;
          padding: 2px 4px;
          border-radius: 4px;
          transition: all .3s ease;
          text-decoration: underline;
          transition: all .3s ease;

          &:hover {
            text-decoration: none;
            color: #000;
            text-decoration: none;
          }
        }
      }
    }
  }
}

// styles for larger screen
@media only screen and (min-width: 768px) {
  .brand {
    padding: 4px 0;
    // background: $brand-color;
    background: $gray-color;
    color: white;
    // border: 2px solid red;
    height: 90px;

    .container {
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo-container {
          max-width: 200px;

          .logo-container {
            img.logo {
              max-height: 10px;
              border: 1px solid red;
            }
          }
        }
        .contacts-container {
          display: flex;
          align-items: center;

          a {
            color: $orange-color;
            text-decoration: none;
            transition: all .3s ease;

            &:hover {
              color: #fff;
            }
          }

          .contacts {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-right: 1px dashed rgba($color: orange, $alpha: .3);

            .contact-icon {
              color: lighten($gray-color, 20);
              text-shadow: 0 1px 3px #000;
            }

            .phone-number {
              font-size: 22px;
              // font-weight: bold;
            }
          }
          .address {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-right: 1px dashed rgba($color: orange, $alpha: .3);

            .address-icon {
              color: lighten($gray-color, 20);
              text-shadow: 0 1px 3px #000;
            }

            .location {
              font-size: 22px;
              color: rgba($color: #fff, $alpha: .5);
            }
          }
        }
      }
    }
  }
}

// styles for smaller screen
@media only screen and (max-width: 767px) {
  .brand {
    padding: 4px 0;
    background: $brand-color;
    color: white;
    z-index: 100;

    .container {
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo-container {
          max-width: 150px;

          .logo-container {
            img.logo {
              max-height: 10px;
              border: 1px solid red;
            }
          }
        }
        .contacts-container {
          display: flex;
          align-items: center;

          a {
            color: rgb(253, 186, 61);
          }

          .contacts {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-right: 1px dashed rgba($color: orange, $alpha: .3);

            .contact-icon {
              color: rgba($color: orange, $alpha: .3);
              text-shadow: 0 1px 3px #000;
            }

            .phone-number {
              font-size: 22px;
              // font-weight: bold;
            }
          }
          .address {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-right: 1px dashed rgba($color: orange, $alpha: .3);

            .address-icon {
              color: rgba($color: orange, $alpha: .3);
              text-shadow: 0 1px 3px #000;
            }

            .location {
              font-size: 22px;
              // font-weight: bold;
            }
          }
        }
      }
    }
  }
}

// for larger screens
@media screen and (min-width: 992px) {
  .menu {
    background: rgba($gray-color, .7);
    // border: 2px solid red;
    padding: 0;

    ul {
      display: flex;
      position: relative;
      // top: -25px;
      height: 35px;
      z-index: 100;
      justify-content: center;
      // background: linear-gradient(lighten($brand-color, 15), darken($brand-color, 15));
      // border-radius: 8px;
      // box-shadow: 0 1px 3px 0 #000;

      li {
        padding: 0;
        margin: 0;
        position: relative;

        &:hover {
          .dropdown {
            display: flex;
          }
        }

        a {
          display: block;
          padding: 7px 15px;
          color: white;
          text-decoration: none;
          margin: 5px 5px;
          border-radius: 4px;
          border: 1px dashed rgba(#fff, $alpha: .2);
          transition: all .3s ease;

          &:hover {
            border: 1px solid $orange-color;
          }
        }

        .dropdown {
          position: absolute;
          display: none;
          left: 0; top: 44px;
          padding: 10px 0;
          // border: 2px solid red;

          ul.dropdown-ul {
            display: flex;
            flex-direction: column;
            position: relative;
            top: 0;
            height: 100%;
            z-index: 100;
            padding: 0;
            margin: 0;
            list-style: none;
            justify-content: flex-start;
            align-items: flex-start;
            background: linear-gradient(lighten($orange-color, 0), darken($orange-color, 20));
            border-radius: 4px;
            box-shadow: 0 1px 3px 0 #000;
            font-family: $thin-fonts;
            font-size: 1.1rem;
            // border: 2px solid green;

            li {
              border-bottom: 1px dashed transparentize($color: #fff, $amount: .6);
              width: 100%;

              &:last-child {
                border-bottom: none;
              }
              
              a {
                padding: 9px 20px 7px 20px;
                color: white;
                text-decoration: none;
                margin: 0;
                border-radius: 0;
                white-space: nowrap;
                border: none;
                transition: all .3s ease;

                &:hover {
                  color: $brand-color;
                }
              }
            }
          }
        }
      }
    }
  }
}

// for medium screens
@media screen and (min-width: 768px) and (max-width: 991px) {
  .menu {
    position: -webkit-sticky;
    position: sticky;
    z-index: 100;
    top: 0 !important;
    
    ul {
      display: flex;  
      height: 50px;
      justify-content: center;
      background: lighten($brand-color, 15);
      border-radius: 0 0 8px 8px;
      font-family: $thin-fonts;
      box-shadow: 0 2px 3px 0 #000;

      li {
        padding: 0;
        margin: 0;
        position: relative;

        &:hover {
          .dropdown {
            display: flex;
          }
        }

        a {
          display: block;
          padding: 7px 15px;
          color: white;
          text-decoration: none;
          margin: 5px 5px;
          border-radius: 8px;
          border: 1px dashed rgba($color: $brand-color, $alpha: .1);
          transition: all .3s ease;

          &:hover {
            border: 1px dashed $orange-color;
          }
        }

        .dropdown {
          position: absolute;
          display: none;
          left: 0; top: 50px;
          padding: 10px 0;
          // border: 2px solid red;

          ul.dropdown-ul {
            display: flex;
            flex-direction: column;
            position: relative;
            top: 0;
            height: 100%;
            z-index: 100;
            padding: 0;
            margin: 0;
            list-style: none;
            justify-content: flex-start;
            align-items: flex-start;
            background: linear-gradient(lighten($orange-color, 0), darken($orange-color, 20));
            border-radius: 8px;
            box-shadow: 0 1px 3px 0 #000;
            font-family: $thin-fonts;
            font-size: 1.1rem;
            // border: 2px solid green;

            li {
              border-bottom: 1px dashed transparentize($color: #fff, $amount: .6);
              width: 100%;

              &:last-child {
                border-bottom: none;
              }
              
              a {
                padding: 9px 20px 7px 20px;
                color: white;
                text-decoration: none;
                margin: 0;
                border-radius: 0;
                white-space: nowrap;
                border: none;
                transition: all .3s ease;

                &:hover {
                  color: $brand-color;
                }
              }
            }
          }
        }
      }
    }
  }
}

// for smaller screens
@media screen and (max-width: 767px) {
  .menu {

    ul {
      display: block;
      position: absolute;
      top: 0;
      // height: 50px;
      width: 100%;
      z-index: 10;
      justify-content: center;
      background: lighten($brand-color, 15);
      border-radius: 0;
      font-family: $thin-fonts;
      // box-shadow: 0 1px 3px 0 #000;

      li {
        padding: 0;
        margin: 0;
        position: relative;

        a {
          display: block;
          padding: 7px 15px;
          color: white;
          text-decoration: none;
          margin: 5px 5px;
          border-radius: 8px;
          border: 1px dashed rgba($color: $brand-color, $alpha: .1);
          transition: all .3s ease;

          &:hover {
            border: 1px dashed $orange-color;
          }
        }

        .dropdown {
          position: absolute;
          width: 100%;
          // display: block;
          display: none;
          // left: 0; top: 50px;
          // padding: 10px 0;
          // margin: 0 15px;
          // border: 2px solid red;

          ul.dropdown-ul {
            display: flex;
            flex-direction: column;
            position: relative;
            top: 0;
            height: 100%;
            z-index: 100;
            padding: 0;
            width: 98%;
            margin: 0 1%;
            list-style: none;
            justify-content: flex-start;
            align-items: flex-start;
            background: linear-gradient(lighten($orange-color, 0), darken($orange-color, 20));
            border-radius: 8px;
            box-shadow: 0 1px 3px 0 #000;
            font-family: $thin-fonts;
            font-size: 1.1rem;
            // border: 2px solid green;

            li {
              border-bottom: 1px dashed transparentize($color: #fff, $amount: .6);
              width: 100%;

              &:last-child {
                border-bottom: none;
              }
              
              a {
                padding: 9px 20px 7px 20px;
                color: white;
                text-decoration: none;
                margin: 0;
                border-radius: 0;
                white-space: nowrap;
                border: none;
                transition: all .3s ease;

                &:hover {
                  color: $brand-color;
                }
              }
            }
          }
        }
      }
    }
  }
}

// vue animation effects
.slide-enter-active {
  animation: slide-in 1s ease forwards;
}
.slide-leave-active {
  animation: slide-out 1s ease forwards;
}

@keyframes slide-in {
  from {
    // transform: translateY(-30px);
    
    opacity: 0;
    // height: 0;
  }
  to {
    // transform: translateY(0);
    opacity: 1;
    // height: auto;
  }
}

@keyframes slide-out {
  from {
    // transform: translateY(0);
    opacity: 1;
    // height: auto;
  }
  to {
    // transform: translateY(-30px);
    opacity: 0;
    // height: 0;
  }
}
</style>