import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { 
    faSpinner, faPaw, faHeadset, faMapMarkerAlt, faAngleRight, 
    faPhoneAlt, faUserSecret, faCircleNotch
  } from '@fortawesome/free-solid-svg-icons'
// import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUserSecret, 
  faPhoneAlt, 
  faHeadset,
  faSpinner,
  faPaw,
  faFacebook, 
  faTwitter, 
  faSkype, 
  faBuilding, 
  faAngleRight,
  faMapMarkerAlt,
  faCircleNotch
)

Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false