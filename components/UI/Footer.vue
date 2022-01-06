<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">asdasd</div>
        <div class="col-md-3">adsasd</div>
        <div class="col-md-3">asdasd</div>
        <div class="col-md-3">asdasd</div>
        <div class="col-12">
          <div class="row">
            <div class="col">&copy; {{ new Date().getFullYear() }} footer..!</div>
            <div class="col">Developed by <a href="https://luso.solutions" target="_blank">LUSO Solutions</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  border-radius: 8px 8px 0 0;
  padding: 0 30px;
  color: white;

  .row {
    background: #463313;
    padding: 5px;
  }
}
</style>