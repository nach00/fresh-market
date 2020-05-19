<template>
  <base-section
    id="home"
    class="py-0"
    fill-height
  >
    <v-container class="pa-0">
      <v-row
        no-gutters
        class="background-color"
      >
        <v-col
          cols="12"
          md="8"
        >
          <home-day-selector />

          <home-lunch-menu />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <home-aside />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'FrontendHome',

    components: {
      HomeAside: () => import('./components/Aside'),
      HomeDaySelector: () => import('./components/DaySelector'),
      HomeLunchMenu: () => import('./components/LunchMenu'),
    },
  }
</script>
