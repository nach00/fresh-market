<template>
  <v-app-bar
    app
    color="primary"
    flat
    height="64"
    elevate-on-scroll
  >
    <v-icon
      color="secondary"
      large
      left
      v-text="mdiFruitCherries"
    />

    <router-link to="/">
      <v-toolbar-title class="mr-8 secondary--text">
        Freshmarket
      </v-toolbar-title>
    </router-link>

    <v-toolbar-items class="hidden-sm-and-down">
      <base-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        {{ item.text }}
      </base-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-toolbar-items class="mr-n4 hidden-sm-and-down">
      <base-coupon-link />

      <base-pob-link />
    </v-toolbar-items>

    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      color="secondary"
      icon
      @click="drawer = !drawer"
    />
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  // Icons
  import {
    mdiFruitCherries,
  } from '@mdi/js'

  export default {
    name: 'FrontendAppBar',

    data: () => ({
      mdiFruitCherries,
    }),

    computed: {
      ...sync('frontend/*'),
    },
  }
</script>
