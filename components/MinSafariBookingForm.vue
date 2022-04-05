<template>
  <div>
    <div class="card mb-3 bg-secondary text-white">
      <div class="card-header text-center">
        <div>{{ tour.price ? 'MAKE BOOKING FOR' : 'ENQUIRE FOR MORE DETAILS' }}</div>
        <span class="thin-fonts text-capitalize orange-color">{{ tour.name }}</span>
      </div>
      <div class="card-body">
        <form>
          <input type="hidden" name="tour_id" id="tour_id" :value="tour.id">
          <div class="form-group">
            <input type="text" name="name" v-model="tourist.name" 
              id="name" class="form-control form-control-sm" placeholder="Enter your Full Name" required
            >
          </div>
          <div class="form-group">
            <input type="email" name="email" v-model="tourist.email" 
              id="email" class="form-control form-control-sm" placeholder="Enter Email Address" required
            >
          </div>
          <div class="form-group">
            <textarea name="message" v-model="tourist.message" id="message" cols="30" rows="4" class="form-control" 
              placeholder="Anything more? preffered Hotels, Lodges or Standards? Meals? anything specific? ...please add here" required
            ></textarea>
          </div>
          <!-- <div class="form-group">
            <label>
              <input type="checkbox" name="email_copy" v-model="tourist.emailCopy"> Please copy me the email
            </label>
          </div> -->
          <button @click.prevent="validateData" class="btn btn-lg w-100 orange-bg text-white">
            <fai :icon="['fas', tourist.buttonIcon]" class="fa-fw mr-2" :class="{ 'fa-spin': tourist.processing }"></fai>
            {{ tour.price ? 'MAKE BOOKING' : 'ENQUIRE' }}
          </button>
          <div v-if="tourist.showStatusMessage" class="mt-3 border rounded text-center bg-success text-white p-2">
            Success, your message have been sent..!
          </div>
          <div v-if="tourist.showErrorMessage" class="mt-3 border rounded text-center bg-danger text-white p-2">
            Please fill all fields to proceed
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    tour: Object,
    required: true
  },
  data() {
    return {
      tourist: {
        name: '', email:'', message:'', phone:'', buttonIcon: 'angle-right', 
        processing: false, showStatusMessage: false, showErrorMessage: false
      }
    }
  },
  computed: {
    ...mapGetters(['baseURL'])
  },
  methods: {
    validateData() {
      if(!this.tourist.name.length || !this.tourist.email.length || !this.tourist.message.length) {
        this.tourist.showErrorMessage = true;
        setTimeout(() => this.tourist.showErrorMessage = false, 5000);
      } else {
        this.tourist.showErrorMessage = false;
        this.sendBooking();
      }
    },
    sendBooking() {
      let tourist = this.tourist; tourist.tourID = this.tour.id;
      this.tourist.buttonIcon = 'spinner'; this.tourist.processing = true;
      this.$axios.post(`${this.baseURL}/send-mail`, { tourist })
        .then(res => {
          if(res.status === 200) {
            this.tourist.showStatusMessage = true;
            this.tourist.buttonIcon = 'angle-right'; 
            this.tourist.processing = false;
            setTimeout(() => {
              this.tourist.showStatusMessage = false;
              this.clearForm();
            }, 3000)
          }
        }
      )
    },
    clearForm() {
      this.tourist.name = ''; 
      this.tourist.email = ''; 
      this.tourist.message = '';
    }
  }
}
</script>