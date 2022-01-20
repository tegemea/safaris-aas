<template>
  <div>
    homepage...
  </div>
</template>

<script>
export default {
  data() {
    return {
      URL: ''
    }
  },
  activated() {
    this.URL = this.$URLs;
  },
}
</script>
