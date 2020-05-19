<template>
  <section id="locations">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8633579610487!2d-96.84968578398701!3d32.82238528897629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9c17b1dc3141%3A0x9e04745ef18f024f!2sFresh%20Market!5e0!3m2!1sen!2sus!4v1572971010630!5m2!1sen!2sus"
      width="100%"
      height="500"
      frameborder="0"
      style="border:0;"
      allowfullscreen
    />

    <v-row
      class="mx-0 mt-n2"
      no-gutters
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-sheet
          color="grey lighten-2"
          height="600"
          tile
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-sheet
          color="grey lighten-2"
          height="600"
          tile
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Locations',
  }
</script>
