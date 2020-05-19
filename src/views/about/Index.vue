<template>
  <v-container
    id="about"
    class="fill-height"
    tag="section"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        md="6"
        class="d-flex"
      >
        <v-sheet
          :class="$vuetify.breakpoint.mdAndUp ? 'px-12' : 'px-6'"
          color="primary"
          tile
          class="py-6"
        >
          <div
            :class="$vuetify.breakpoint.mdAndUp ? 'mb-12': 'mb-6'"
            class="text-center"
          >
            <base-food-icon
              v-for="(icon, i) in aboutIcons"
              :key="i"
              :class="{
                'mx-7': $vuetify.breakpoint.mdAndUp,
                'mx-4': $vuetify.breakpoint.smAndDown,
              }"
              class="my-4"
              x-large
              color="secondary"
            >
              {{ icon }}
            </base-food-icon>
          </div>

          <div>
            <base-heading class="font-weight-bold mb-6">
              About Fresh Market
            </base-heading>

            <base-text>
              <p>
                Fresh Market has two locations in Dallas, Texas and has been in business for over 30 years. We pride ourselves in the food we cook, which leaves everyone more than satisfied. Our menu changes daily, providing a variety of foods from different ethnic cultures and backgrounds (including American, Italian, Asian, Mexican, and Seafood), so please be sure to check the website daily for our gourmet selection of the day.
              </p>

              <p>
                All the foods at Fresh Market are made from the finest and freshest. THe produce used in many of the home-cooked recipes are hand-selected from the local Dallas Farmer's Market to ensure the tastiest and most delicious dining experience imaginable.
              </p>

              <p>
                One of the many advantages Fresh Market has over several other restaurants is the vast selection that is available.
              </p>
            </base-text>
          </div>
        </v-sheet>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        md="6"
      >
        <v-sheet
          :class="$vuetify.breakpoint.mdAndUp ? 'px-12' : 'px-6'"
          color="accent"
          tile
          class="py-6"
        >
          <div
            class="text-center"
            :class="$vuetify.breakpoint.mdAndUp ? 'mb-12': 'mb-6'"
          >
            <base-food-icon
              v-for="(icon, i) in marketIcons"
              :key="i"
              :class="{
                'mx-7': $vuetify.breakpoint.mdAndUp,
                'mx-4': $vuetify.breakpoint.smAndDown,
              }"
              class="my-4"
              x-large
              color="secondary"
            >
              {{ icon }}
            </base-food-icon>
          </div>

          <div>
            <base-heading class="font-weight-bold mb-6">
              Dallas Farmer's Market
            </base-heading>

            <base-text class="mb-10">
              <p class="mb-6">
                A majority of the produce used in many of the home-cooked recipes are all hand-selected from the local Dallas Farmer's Market to ensure the tastiest and most declious dining expreince. We receive deliveries of fruit and vegetables two to three times a week, maintina the freshest quality of food . Our procurement team is trained to know when the best produce is in season allowing us to keep our prices low.
              </p>

              <ul class="list-unstyled">
                <li
                  v-for="(feature, i) in features"
                  :key="i"
                  class="d-flex align-center mb-2"
                >
                  <v-icon
                    class="mr-2"
                    color="secondary"
                    v-text="mdiCheckCircle"
                  />

                  {{ feature }}
                </li>
              </ul>
            </base-text>

            <div class="text-center">
              <v-avatar
                class="mb-4"
                color="rgba(0, 0, 0, .04)"
                size="156"
              />
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Icons
  import {
    mdiCheckCircle,
  } from '@mdi/js'

  export default {
    name: 'About',

    data: () => ({
      aboutIcons: [
        'flaticon-010-orange',
        'flaticon-009-blueberries',
        'flaticon-034-carrot',
      ],
      features: [
        'All produces meet quality stnadards',
        'Responsible Farming & Sustainability',
        'Cooked fresh, daily',
      ],
      marketIcons: [
        'flaticon-032-yogurt',
        'flaticon-023-broccoli',
        'flaticon-005-green-beans',
      ],
      mdiCheckCircle,
    }),
  }
</script>

<style lang="sass">
  .list-unstyled
    list-style-type: none
    padding-left: 0 !important
</style>
