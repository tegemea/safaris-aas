export const state = () => ({
  apiURL: `http://safaris-backend.run/api/v1`
})

export const getters = {
  apiURL(state) {
    return state.apiURL
  }
}