<template>
  <div>
    <div class="topbar">
      <div class="container">
        <div class="row">
          <div class="col-md-6">Welcome to Animal Action Safaris, where you see African Animals in Action..!</div>
          <div class="col-md-6 text-right">
            <NuxtLink to="/about-us">About us</NuxtLink>
            <NuxtLink to="#">Partners & Affilications</NuxtLink>
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
            <NuxtLink to="/">
              <img src="http://safaris-backend.run/storage/generic_photos/logo-white-transparent.png" class="img-fluid logo" alt="">
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
            <span class="address ml-2 px-4">
              <fai :icon="['far','building']" class="address-icon fa-3x mr-3" />
              <span>
                <span class="thin-fonts location">Office at Olorien, Moshono</span> <br>
                <span>Arusha Tanzania</span>
              </span>
            </span>
            <span class="socials pl-4">
              <a href="#" target="_blank" title="Follow us on Facebook"><fai :icon="['fab', 'facebook']" class="fa-2x text-warning" /></a>
              <a href="#" target="_blank" title="Follow us on Twitter"><fai :icon="['fab', 'twitter']" class="fa-2x ml-3 text-warning" /></a>
              <a href="#" target="_blank" title="Contact us on Skype"><fai :icon="['fab', 'skype']" class="fa-2x ml-3 text-warning" /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <ul class="list-unstyled text-uppercase">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/safari-tours">Safaris & Tours</NuxtLink></li>
              <li><NuxtLink to="/destinations">Safari Destinations</NuxtLink></li>
              <li><NuxtLink to="/about-us">About us</NuxtLink></li>
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

<style lang="scss" scoped>
$brand-color : #463313;

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

          &:hover {
            text-decoration: none;
            color: white;
          }
        }
      }
    }
  }
}

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

.menu ul {
  display: flex;
  position: relative;
  top: -25px;
  height: 50px;
  z-index: 100;
  // font-size: 18px;
  justify-content: center;
  background: linear-gradient(lighten($brand-color, 15), darken($brand-color, 15));
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 #333;

  li {
    padding: 0;
    margin: 0;

    a {
      display: block;
      padding: 10px 25px;
      color: white;
      text-decoration: none;
    }
  }
}
</style>