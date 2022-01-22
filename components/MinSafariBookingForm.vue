<template>
  <div>
    <div class="card mb-3 bg-secondary text-white">
      <div class="card-header text-center">
        <div>{{ tour.price ? 'MAKE BOOKING FOR' : 'ENQUIRE FOR MORE DETAILS' }}</div>
        <span class="thin-fonts text-capitalize brand-color">{{ tour.name }}</span>
      </div>
      <div class="card-body">
        <form>
          <input type="hidden" name="tour_id" id="tour_id" :value="tour.id">
          <div class="form-group">
            <input type="text" name="name" v-model="booking.name" 
              id="name" class="form-control form-control-sm" placeholder="Enter your Full Name"
            >
          </div>
          <div class="form-group">
            <input type="email" name="email" v-model="booking.emal" 
              id="email" class="form-control form-control-sm" placeholder="Enter Email Address"
            >
          </div>
          <div class="form-group">
            <textarea name="message" v-model="booking.message" id="message" cols="30" rows="4" class="form-control" 
              placeholder="Anything more? preffered Hotels, Lodges or Standards? Meals? anything specific? ...please add here"
            ></textarea>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" name="email_copy" v-model="booking.emailCopy"> Please copy me the email
            </label>
          </div>
          <button @click.prevent="validateData" class="btn btn-lg w-100 orange-bg text-white">
            <fai :icon="['fas', booking.buttonIcon]" class="mr-2"></fai>
            {{ tour.price ? 'MAKE BOOKING' : 'ENQUIRE' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tour: Object,
    required: true
  },
  data() {
    return {
      booking: {
        name: '', email:'', message:'', emailCopy: false, buttonIcon: 'angle-right'
      }
    }
  },
  methods: {
    validateData() {
      this.sendBooking()
    },
    sendBooking() {
      setTimeout(() => {
        console.log('sent..!')
      }, 3000)
    }
  }
}
</script>