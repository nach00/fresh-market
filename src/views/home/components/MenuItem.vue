<template>
  <v-sheet
    :color="color"
    class="text-center py-5 px-5 d-flex align-center justify-center flex-column"
    min-height="150"
    tile
  >
    <base-food-icon class="mb-4">
      {{ icon }}
    </base-food-icon>

    <div
      class="alt-heading"
      v-text="name"
    />
  </v-sheet>
</template>

<script>
  export default {
    name: 'HomeMenuItem',

    props: {
      color: {
        type: String,
        default: undefined,
      },
      icon: {
        type: String,
        default: undefined,
      },
      name: {
        type: String,
        default: undefined,
      },
    },
  }
</script>
