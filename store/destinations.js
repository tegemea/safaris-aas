
export const state = () => ({
  destinations: []
})

export const getters = {
  destinations(state) { return state.destinations }
}

export const mutations = {
  SET_DESTINATIONS(state, destinations) {
    state.destinations = destinations
  }
}