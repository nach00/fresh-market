<template>
  <v-navigation-drawer
    v-model="drawer"
    :disable-route-watcher="$vuetify.breakpoint.smAndUp"
    app
    color="primary"
    class="text-center pt-6"
    dark
    right
    width="220"
  >
    <div class="d-flex flex-column fill-height">
      <v-icon
        class="mx-auto d-inline-block"
        color="secondary"
        large
        left
        v-text="mdiFruitCherries"
      />

      <router-link
        to="/"
        class="mb-4 d-block"
      >
        <v-toolbar-title class="secondary--text">
          Freshmarket
        </v-toolbar-title>
      </router-link>

      <v-list
        nav
        class="px-0"
        tile
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          exact
        >
          <v-list-item-content class="py-4">
            <h2
              class="text-center base-heading font-weight-bold secondary--text mb-0"
              v-text="item.text"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <base-coupon-link class="mt-auto" />

      <base-pob-link />

      <div class="py-4">
        <a
          v-for="(social, i) in socials"
          :key="i"
          :href="social.href"
          class="ma-4"
          target="_blank"
        >
          <v-icon
            x-large
            v-text="social.icon"
          />
        </a>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  // Icons
  import {
    mdiCogs,
    mdiFacebook,
    mdiFruitCherries,
    mdiInstagram,
    mdiMonitorCellphone,
    mdiTwitter,
    mdiVuetify,
  } from '@mdi/js'

  export default {
    name: 'FrontendDrawer',

    data: () => ({
      mdiCogs,
      mdiFruitCherries,
      mdiMonitorCellphone,
      mdiVuetify,
    }),

    computed: {
      ...sync('frontend/*'),
      socials () {
        return [
          {
            icon: mdiInstagram,
            href: '#',
          },
          {
            icon: mdiTwitter,
            href: '#',
          },
          {
            icon: mdiFacebook,
            href: '#',
          },
        ]
      },
    },
  }
</script>
