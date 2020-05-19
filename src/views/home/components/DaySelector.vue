<template>
  <v-sheet
    color="#FEFDE9"
    dark
  >
    <v-tabs
      grow
      hide-slider
      background-color="#2F3C2E"
    >
      <base-tab
        v-for="day in days"
        :key="day"
        active-class="background-color text--primary"
        class="ma-0 primary--text"
        text
        :ripple="false"
      >
        {{ day }}
      </base-tab>
    </v-tabs>
  </v-sheet>
</template>

<script>
  export default {
    name: 'HomeDaySelector',

    data: () => ({
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
    }),
  }
</script>
