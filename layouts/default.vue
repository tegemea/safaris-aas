<template>
  <div>
    <div class="container-fluid p-0"><UIHeader /></div>
    <div class="container-fluid" style="position: relative; top: -65px"><Nuxt keep-alive /></div>
    <div class="container-fluid p-0"><UIFooter /></div>
  </div>
</template>

<style lang="scss">
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} 
</style>