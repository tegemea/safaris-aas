<template>
  <div id="header">
    <div class="topbar">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-lg-left col-lg-6">
            Welcome to Animal Action Safaris, where you see African Animals in Action..!
          </div>
          <div class="d-none d-lg-block col-lg-6 text-right">
            <NuxtLink to="/about-us/about-us">About us</NuxtLink>
            <!-- <NuxtLink to="#">Partners & Affilications</NuxtLink> -->
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="#">Contact us</NuxtLink>
            <NuxtLink to="#">Book a Trip</NuxtLink>
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
            <span class="contacts pr-4">
              <fai icon="headset" class="contact-icon fa-3x mr-3" />
              <span>
                <a href="tel:+255784268066" class="thin-fonts phone-number">+255 784 268066</a> <br>
                <a href="mailto:info@aasafaris.com">Send us Email</a>
              </span>
            </span>
            <span class="address d-none d-lg-flex ml-2 px-4">
              <fai :icon="['far','building']" class="address-icon fa-3x mr-3" />
              <span>
                <span class="thin-fonts location">Office at Olorien, Moshono</span> <br>
                <span>Arusha Tanzania</span>
              </span>
            </span>
            <span class="socials d-none d-md-flex pl-4">
              <a href="#" target="_blank" title="Follow us on Facebook">
                <fai :icon="['fab', 'facebook']" class="fa-2x text-warning" />
              </a>
              <a href="#" target="_blank" title="Follow us on Twitter">
                <fai :icon="['fab', 'twitter']" class="fa-2x ml-3 text-warning" />
              </a>
              <a href="#" target="_blank" title="Contact us on Skype">
                <fai :icon="['fab', 'skype']" class="fa-2x ml-3 text-warning" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main Navigation -->
    <div class="menu" id="menu">
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <ul class="list-unstyled text-uppercase">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li>
                <NuxtLink to="/safari-tours">Safaris & Tours</NuxtLink>
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
              </li>
              <li>
                <NuxtLink to="/destinations">Safari Destinations</NuxtLink>
                <span class="dropdown">
                  <ul class="dropdown-ul">
                    <li v-for="hDestination in destinations" :key="hDestination.id">
                      <NuxtLink :to="`/destinations/${hDestination.slug}`">{{ hDestination.name }}</NuxtLink>
                    </li>
                  </ul>
                </span>
              </li>
              <li>
                <NuxtLink to="#">About us</NuxtLink>
                <span class="dropdown">
                  <ul class="dropdown-ul">
                    <li v-for="hPage in pages" :key="hPage.id">
                      <NuxtLink :to="`/about-us/${hPage.slug}`">{{ hPage.name }}</NuxtLink>
                    </li>
                  </ul>
                </span>
              </li>
              <li><NuxtLink to="/blog">Blog</NuxtLink></li>
              <li><NuxtLink to="#">Contact us</NuxtLink></li>
              <li><NuxtLink to="/bookings">Bookings</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'pages','tourCategories','destinations', 'baseURL'
    ])
  },
  async fetch() {
    // const 
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
  border: 1px dashed $orange-color !important;
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
  padding: 4px 0;
  font-size: .8rem;
  font-weight: 300;
  background: linear-gradient(#222, #333);
  border-bottom: 1px solid #222;
  color: #ccc;

  .container {
    .row {
      display: flex;
      justify-content: space-between;

      div {
        a {
          color: #ccc;
          margin-left: 10px;
          padding: 2px 4px;
          border-radius: 4px;
          transition: all .3s ease;

          &:hover {
            text-decoration: none;
            color: white;
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
    background: $brand-color;
    color: white;

    .container {
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo-container {
          max-width: 300px;

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

// styles for smaller screen
@media only screen and (max-width: 767px) {
  .brand {
    padding: 4px 0;
    background: $brand-color;
    color: white;

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

.menu {
    ul {
    display: flex;
    position: relative;
    top: -25px;
    height: 50px;
    z-index: 100;
    justify-content: center;
    background: linear-gradient(lighten($brand-color, 15), darken($brand-color, 15));
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 #000;

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
</style>