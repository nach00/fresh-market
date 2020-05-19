<template>
  <v-container
    id="coupon"
    class="fluid fill-height"
    tag="section"
  >
    <v-row no-gutters>
      <v-col
        class="d-flex"
        cols="12"
        md="5"
      >
        <v-sheet
          class="px-4 py-8"
          color="grey lighten-3"
          tile
        >
          <base-subheading>Get 10% off your entire meal!</base-subheading>

          <base-text class="mb-8">
            Check in to the Facebook or Yelp! app using your mobile phone when you arrive! Show the successful "checked in" screen to your cashier when you check out and we'll give you a 10% discount if your meal weights over one pound.
          </base-text>

          <base-subheading>Don't have social media?</base-subheading>

          <base-text class="mb-8">
            No problem! You can also show the cashier the coupon below on your mobile phone to receive your discount. No need to print our use paper!
          </base-text>

          <v-sheet
            class="mb-8"
            color="rgba(0, 0, 0, .04)"
            height="120"
            style="border: 3px dotted black;"
            width="80%"
          />

          <base-subheading>Fine print</base-subheading>

          <base-text>Check in to facebook or Yelp! and get 10% off any meal. Valid one coupon per customer per visit. Cannot be shared with another customer. Meal must weigh at least one pound. This promotion is only valid at the Fresh Market Restaurant in Dallas, TX (6300 Harry Hines Blvd, Location)</base-text>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Coupon',
  }
</script>
