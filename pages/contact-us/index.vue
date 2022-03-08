<template>
  <div>
    <div class="row mb-5">
      <div class="col-md-12 photo-container p-0">
        <img
          :src="`${baseURL}/storage/tour_header_photos/${randomTour.header_photo}`"
          class="img-fluid"
          :alt="randomTour.name"
        >
        <div class="overlay"></div>
        <div class="title serif-fonts">Contact us</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <h3 class="thin-fonts text-black-50">Team Member in U.S.A.</h3><hr>
                  <address>
                    Michael Wassenberg <br>
                    1010 Chisolm Trail <br>
                    Goodlettsville, Tenessee 37072 USA <br>
                    Phone: <a href="tel:+1 (703) 217-4890" class="text-black-50">+1 (703) 217-4890</a> <br>
                    Email: <a href="mailto:moorborn@gmail.com" class="text-black-50">moorborn(at)gmail.com</a>
                  </address>
                </div>
                <div class="col-md-3">
                  <h3 class="thin-fonts text-black-50">Team Member in U.S.A.</h3><hr>
                  <address>
                    Ibrahim Majid Ambari <br>
                    9501 Mazzoni Avenue <br>
                    Lanham Maryland, 20706 USA <br>
                    Phone: <a href="tel:+1 (202) 868-2214" class="text-black-50">+1 (202) 868-2214</a> <br>
                    Email: <a href="mailto:ebhra@yahoo.com" class="text-black-50">ebhra(at)yahoo.com</a>
                  </address>
                </div>
                <div class="col-md-3">
                  <h3 class="thin-fonts text-black-50">Meet Our Team in France</h3> <hr>
                  <address>
                    Yannick Goujaud <br>
                    Palaiseou, France <br>
                    Phone: <a href="tel:+33 66 4997982" class="text-black-50">+33 66 4997982</a> <br>
                    Email: <a href="mailto:yannick_goujaud@yahoo.fr" class="text-black-50">yannick_goujaud(at)yahoo.fr</a>
                  </address>
                </div>
                <div class="col-md-3">
                  <h3 class="thin-fonts text-black-50">Meet Our Team in Tanzania</h3> <hr>
                  <address>
                    Leonard Alfayo <br>
                    Arusha, Tanzania <br>
                    Phone: <a href="tel:+255 784 268066" class="text-black-50">+255 784 268 066</a> <br>
                    Email: <a href="mailto:info@aasafari.com" class="text-black-50">info(at)aasafari.com</a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 mb-5">
          <form>
            <div class="row">
              <div class="form-group col-lg-6">
                <label for="name">Your Full Name</label>
                <input type="text" id="name" class="form-control">
              </div>
              <div class="form-group col-lg-6">
                <label for="email">Your Email Address</label>
                <input type="email" id="email" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-6">
                <label for="nationality">Your Nationality</label> <small class="text-black-50">(optional)</small>
                <input type="text" id="nationality" class="form-control">
              </div>
              <div class="form-group col-lg-6">
                <label for="email">Your Phone number</label> <small class="text-black-50">(optional)</small>
                <input type="email" id="email" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="tour">Select Tour of Interest</label>
              <select name="tour" id="tour" class="form-control">
                <option value="" selected disabled>--- Select Tour ---</option>
                <option v-for="tour in tours" :value="tour.name" :key="tour.id">{{ tour.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea name="message" id="message" cols="30" rows="6" class="form-control"></textarea>
            </div>
            <div class="form-group">
              <button class="btn btn-secondary">Send Booking or Enquiry</button>
            </div>
          </form>
        </div>
        <div class="col-md-4 mb-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8385655932834!2d36.71952841412493!3d-3.3895690424910208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371bd43fc9df6b%3A0xef1461d5748b2be6!2sANIMAL%20ACTION%20SAFARIS!5e0!3m2!1sen!2stz!4v1644503453644!5m2!1sen!2stz" width="100%" height="400" style="border:0;" allowfullscreen="true" loading="lazy"></iframe>
          <div class="mt-2">
            Office at Suye Olorien, Moshono <br>
            Arusha Tanzania
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
    ...mapGetters(['baseURL','tours']),
    randomTour: function() {
      return this.tours[Math.floor(Math.random() * this.tours.length)];
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

label {
  font-family: $thin-fonts;
}

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
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4vw;
    color: #fff;
    padding: 30px 0;
    text-shadow: 0 1px 3px #000;

    .sub-title {
      font-size: 2.5vw;
      color: #fff;
      opacity: .4;
    }

    &::before {
      Content:'';
      position: absolute;
      top: 0; left: 0;
      width: 30%; height: 100%;
      border-bottom: 4px solid rgba($orange-color, .7);
      left: 50%; transform: translateX(-50%);
    }
  }
}
</style>