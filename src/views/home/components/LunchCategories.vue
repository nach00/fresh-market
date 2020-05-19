<template>
  <v-row
    class="mb-2"
    no-gutters
  >
    <v-col
      v-for="(category, key) in categories"
      :key="key"
      cols="6"
      sm="4"
      md="3"
    >
      <home-lunch-category
        :color="category.color"
        :value="key"
      />
    </v-col>
  </v-row>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'HomeLunchCategories',

    components: {
      HomeLunchCategory: () => import('./LunchCategory'),
    },

    computed: {
      categories: sync('menu/categories'),
    },
  }
</script>
