<template>
  <v-icon
    :large="!xLarge && !small && !xSmall && !size"
    :size="size"
    :small="small"
    :x-large="xLarge"
    :x-small="xSmall"
    class="fimanager"
    v-bind="$attrs"
  >
    <slot />
  </v-icon>
</template>

<script>
  export default {
    name: 'BaseFoodIcon',

    props: {
      small: {
        type: Boolean,
        default: false,
      },
      xSmall: {
        type: Boolean,
        default: false,
      },
      size: {
        type: [Number, String],
        default: undefined,
      },
      xLarge: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>
