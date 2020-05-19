<template>
  <v-row dense>
    <v-col
      v-for="(item, i) in menu"
      :key="i"
      class="d-flex child-flex"
      cols="6"
      md="3"
      sm="4"
    >
      <home-menu-item v-bind="item" />
    </v-col>
  </v-row>
</template>

<script>
  // Utilities
  import {
    get,
  } from 'vuex-pathify'

  export default {
    name: 'HomeMenuItems',

    components: {
      HomeMenuItem: () => import('./MenuItem'),
    },

    computed: {
      menu: get('menu/items'),
    },
  }
</script>
