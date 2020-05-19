<template>
  <h2 class="base-subheading secondary--text mb-6 text-uppercase">
    <slot />
  </h2>
</template>

<script>
  export default {
    name: 'BaseSubheading',
  }
</script>

<style lang="sass">
  .base-subheading
    font-size: .725rem
    letter-spacing: 3px
</style>
