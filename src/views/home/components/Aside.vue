<template>
  <aside class="text-center pa-6">
    <base-heading>Welcome to Fresh Market!</base-heading>

    <base-text class="mb-8">
      Fresh Market is a pay-by-pound buffet located in Dallas. We're located in Dallas, Texas and cater to the MEdical District. Join us for breakfast or lunch!
    </base-text>

    <base-subheading>$6.49 per pound</base-subheading>

    <v-sheet
      class="mb-12"
      color="rgba(0, 0, 0, .04)"
      height="300"
      width="100%"
    />

    <base-heading>Create your own meal!</base-heading>

    <v-avatar
      class="mb-4"
      color="rgba(0, 0, 0, .04)"
      size="256"
    />

    <base-subheading class="mb-10">
      Lamb kabob with yellow rice
    </base-subheading>

    <v-avatar
      class="mb-4"
      color="rgba(0, 0, 0, .04)"
      size="256"
    />

    <base-subheading>Chicken with yellow rice</base-subheading>
  </aside>
</template>

<script>
  export default {
    name: 'HomeAside',
  }
</script>
