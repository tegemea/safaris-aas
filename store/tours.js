
export const state = () => ({
  tours: []
})

export const getters = {
  tours(state) { return state.tours }
}

export const mutations = {
  SET_TOURS(state, tours) {
    state.tours = tours
  }
}