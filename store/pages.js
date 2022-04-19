
export const state = () => ({
  pages: []
})

export const getters = {
  pages(state) { return state.pages }
}

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
  }
}