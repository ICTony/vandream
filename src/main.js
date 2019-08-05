import Vue from 'vue'
import Layout from './views/layout/layout'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/index.scss'
import './styles/reset.css'
import './styles/theme.scss'
Vue.config.productionTip = false

Vue.use(ElementUI) //引入组件element
new Vue({
  router,
  store,
  render: h => h(Layout)
}).$mount('#app')
