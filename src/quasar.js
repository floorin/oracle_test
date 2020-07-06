import Vue from 'vue'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify, Dialog } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
    Notify, Dialog
  }
 })
