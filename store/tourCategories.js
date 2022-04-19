
export const state = () => ({
  tourCategories: []
})

export const getters = {
  tourCategories(state) { return state.tourCategories }
}

export const mutations = {
  SET_TOUR_CATEGORIES(state, categories) {
    state.tourCategories = categories
  }
}