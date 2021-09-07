import Vue from 'vue'
import App from './App.vue'
import materialDesignIcons from "material-design-icons-iconfont";
import router from './router/router'
import moment from 'vue-moment'
//import moment from 'moment'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
//require('moment/locale/ru')
//import ru from 'moment/locale/ru'
import './assets/styles.scss'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(materialDesignIcons);
Vue.use(moment)
new Vue({
  router,
  store,
  moment,
  RingLoader,
  render: h => h(App),
}).$mount('#app')
