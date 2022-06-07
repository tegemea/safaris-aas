export const state = () => ({
  apiURL: `https://aasafari.com/core/api/v1`,
  // apiURL: `http://localhost:8000/api/v1`,
  baseURL: `https://aasafari.com`,
  // baseURL: `http://localhost:8000`,
  mobileMenu: false,
})

export const getters = {
  apiURL(state) { return state.apiURL },
  baseURL(state) { return state.baseURL },
  MobileMenuVisible(state) { return state.mobileMenu }
}

export const mutations = {
  showMobileMenuView(state) { state.mobileMenu = true; },
  hideMobileMenuView(state) { state.mobileMenu = false; }
}

export const actions = {
 
  // initilize the Store
  async nuxtServerInit ({ state, commit }) {
    const { data: pages } = await this.$axios.get(`${state.apiURL}/pages`)
    commit('pages/SET_PAGES', pages);
    
    const { data: tours } = await this.$axios.get(`${state.apiURL}/tours`)
    commit('tours/SET_TOURS', tours);
    
    const { data: photos } = await this.$axios.get(`${state.apiURL}/photos`)
    commit('photos/SET_PHOTOS', photos);
    
    const { data: destinations } = await this.$axios.get(`${state.apiURL}/destinations`)
    commit('destinations/SET_DESTINATIONS', destinations);
    
    const { data: tourCategories } = await this.$axios.get(`${state.apiURL}/tour-categories`)
    commit('tourCategories/SET_TOUR_CATEGORIES', tourCategories);
  }
}