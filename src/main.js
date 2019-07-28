import Vue from 'vue'
import Layout from './views/layout/layout'
import router from './router/index'
import store from './store'
import './styles/index.scss'
import './styles/reset.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Layout)
}).$mount('#app')
