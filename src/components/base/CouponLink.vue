<template>
  <v-btn
    :to="{ name: 'Coupon' }"
    class="alt-heading"
    color="tertiary"
    dark
    depressed
    tile
    height="64"
    width="224"
  >
    10% Coupon
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseCouponLink',
  }
</script>
