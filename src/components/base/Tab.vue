<script>
  import { VTab } from 'vuetify/lib'

  export default {
    name: 'BaseTab',

    extends: VTab,

    computed: {
      classes () {
        return {
          ...VTab.options.computed.classes.call(this),
          'alt-heading': true,
        }
      },
    },
  }
</script>
