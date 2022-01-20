export const state = () => ({
  apiURL: `http://aasafari.com/core/api/v1`,
  baseURL: `http://aasafari.com`
})

export const getters = {
  apiURL(state) {
    return state.apiURL
  },
  baseURL(state) {
    return state.baseURL
  }
}