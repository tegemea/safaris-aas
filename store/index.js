export const state = () => ({
  apiURL: `http://aasafari.com/core/api/v1`,
  baseURL: `http://aasafari.com`,

  mobileMenu: false,
  
  destinationCategories: [],
  destinations: [],
  countries: [],
  tourCategories: [],
  tours: [],
  pages: []
})

export const getters = {
  apiURL(state) { return state.apiURL },
  baseURL(state) { return state.baseURL },
  pages(state) { return state.pages },
  tours(state) { return state.tours },
  tourCategories(state) { return state.tourCategories },
  countries(state) { return state.countries },
  destinationCategories(state) { return state.destinationCategories },
  destinations(state) { return state.destinations },
  showMobileMenu(state) { return state.mobileMenu }
}

export const mutations = {
  storePages(state, pages) { state.pages = pages },
  storeTours(state, tours) { state.tours = tours; },
  storeTourCategories(state, tourCategories) { state.tourCategories = tourCategories; },
  storeCountries(state, countries) { state.countries = countries; },
  storeDestinationCategories(state, destinationCategories) { state.destinationCategories = destinationCategories; },
  storeDestinations(state, destinations) { state.destinations = destinations; },
  showMobileMenuView(state) { state.mobileMenu = true },
  hideMobileMenuView(state) { state.mobileMenu = false }
}

export const actions = {
  async getPages({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/pages`);
    commit('storePages', data)
  },
  async getTours({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/tours`);
    commit('storeTours', data)
  },
  async getTourCategories({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/tour-categories`);
    commit('storeTourCategories', data)
  },
  async getCountries({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/countries`);
    commit('storeCountries', data)
  },
  async getDestinationCategories({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/destination-categories`);
    commit('storeDestinationCategories', data)
  },
  async getDestinations({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/destinations`);
    commit('storeDestinations', data)
  }
}