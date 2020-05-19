<template>
  <h1 class="base-heading secondary--text mb-6">
    <slot />
  </h1>
</template>

<script>
  export default {
    name: 'BaseHeading',
  }
</script>

<style lang="sass">
  .base-heading
    font-size: 1.3rem
    font-weight: 400
    letter-spacing: 4px
    text-transform: uppercase
</style>
