export default ({ app }) => {
  app.router.afterEach(() => {
    // hide mobile menu after every route
    app.store.commit('hideMobileMenuView');
  })
}