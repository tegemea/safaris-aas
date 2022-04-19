export default ({ app }) => {
  app.router.beforeEach(() => {
    app.store.commit('hideMobileMenuView'); // hide mobile menu after every route
  })
}