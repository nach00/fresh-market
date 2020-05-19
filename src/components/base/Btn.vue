<script>
  import { VBtn } from 'vuetify/lib'

  export default {
    name: 'BaseBtn',

    extends: VBtn,

    props: {
      color: {
        type: String,
        default: 'secondary',
      },
      text: {
        type: Boolean,
        default: true,
      },
    },

    computed: {
      classes () {
        return {
          ...VBtn.options.computed.classes.call(this),
          'alt-heading': true,
        }
      },
    },
  }
</script>
