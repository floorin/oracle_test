import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import {store} from './store'
import './quasar'
import './assets/site.css';
import 'typeface-nunito-sans';
import VueMasonry from 'vue-masonry-css';
Vue.use(VueMasonry);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
