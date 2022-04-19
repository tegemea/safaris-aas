
export const state = () => ({
  photos: []
})

export const getters = {
  photos(state) { return state.photos }
}

export const mutations = {
  SET_PHOTOS(state, photos) {
    state.photos = photos
  }
}