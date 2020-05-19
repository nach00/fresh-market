<template>
  <div class="d-flex align-center my-1 lunch-category">
    <v-avatar
      :color="color"
      class="mr-3"
      size="16"
      tile
    />

    <span
      class="secondary--text text-uppercase"
      v-text="value"
    />
  </div>
</template>

<script>
  export default {
    name: 'HomeLunchCategory',

    props: {
      color: {
        type: String,
        default: undefined,
      },
      value: {
        type: String,
        default: undefined,
      },
    },
  }
</script>

<style lang="sass">
  .lunch-category > span
    font-size: 0.825rem
    font-weight: 700
    letter-spacing: 3px
</style>
