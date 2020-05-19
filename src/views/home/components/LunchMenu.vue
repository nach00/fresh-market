<template>
  <v-container
    :class="$vuetify.breakpoint.mdAndUp ? 'px-12' : 'px-4'"
    class="py-4"
  >
    <h2 class="alt-heading secondary--text mb-3">
      Today's Lunch Menu
    </h2>

    <home-lunch-categories />

    <home-menu-items />
  </v-container>
</template>

<script>
  export default {
    name: 'HomeLunchMenu',

    components: {
      HomeLunchCategories: () => import('./LunchCategories'),
      HomeMenuItems: () => import('./MenuItems'),
    },
  }
</script>
