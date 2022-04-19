<template>
  <div id="layout">
    <div>
      <div class="container-fluid p-0"><UIHeader /></div>
      <div class="container-fluid main"><Nuxt keep-alive /></div>
      <div class="container-fluid p-0"><UIFooter /></div>
    </div>
  </div>
</template>

<style lang="scss">
.rotate-icon {
  animation: rotating 2s infinite linear;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} 

@media screen and (min-width: 768px) {
  .main {
    position: relative;
    // top: -65px;
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>