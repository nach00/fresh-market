<template>
  <v-img
    :aspect-ratio="-1"
    :src="src"
  >
    <v-content class="fill-height">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-content>
  </v-img>
</template>

<script>
  export default {
    name: 'FrontendView',

    computed: {
      src () {
        switch (this.$route.name) {
          case 'Home':
            return 'https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
          case 'About':
            return 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
          case 'Contact':
            return 'https://images.unsplash.com/photo-1568310925696-949cfd79d85f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
          case 'Coupon':
            return 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1895&q=80'
          default: return undefined
        }
      },
    },
  }
</script>
