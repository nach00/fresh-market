<template>
  <v-footer
    id="footer"
    class="align-end justify-center"
    color="primary"
    min-height="180"
  >
    <v-container class="pt-0 pb-2">
      <v-row>
        <v-col
          v-for="(col, i) in columns"
          :key="i"
          cols="12"
          md="3"
        >
          <h3
            class="title text-uppercase font-weight-regular tertiary--text mb-6"
            v-text="col.heading"
          />

          <div class="secondary--text font-weight-medium">
            <div v-html="col.caption" />
            <div v-html="col.caption2" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'FrontendFooter',

    data: () => ({
      columns: [
        {
          heading: 'Got a question?',
          caption: 'Email us!',
          caption2: '<a href="mailto:freshmarket1983@gmail.com">freshmarket1983@gmail.com</a>',
        },
        {
          heading: 'Say hello',
          caption: '6300 Harry Hines Blvd. #130',
          caption2: 'Dallas, TX 75235',
        },
        {
          heading: 'Jobs',
          caption: 'We are always looking for talent',
          caption2: '<a href="mailto:freshmarket1983@gmail.com">freshmarket1983@gmail.com</a>',
        },
        {
          heading: 'Hours of operation',
          caption: 'Monday thru Friday',
          caption2: '6:30 am to 4:30 pm',
        },
      ],
    }),
  }
</script>

<style lang="sass">
  #footer
    a
      color: inherit
      text-decoration: none
</style>
