import Vue from 'vue'
import MainApp from './MainApp.vue'
import Index from './Index.vue'
import Consult from './consult.vue'
import Member from './member.vue'
import Python from './components/pythonDetail.vue'
import CPlusPlus from './components/cPlusPlusDetail.vue'
import Web from './components/webDetail.vue'
import App from './components/appDetail.vue'
import APCS from './components/apcsDetail.vue'

import VueRouter from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueRouter);

const routes = [
  { path: '/Index', name: 'index', component: Index },
  { path: '/Consult', name: 'consult', component: Consult},
  { path: '/Member', name: 'member', component: Member},
  { path: '/Python', name: 'python', component: Python },
  { path: '/CPlusPlus', name: 'cPlusPlus', component: CPlusPlus },
  { path: '/Web', name: 'web', component: Web },
  { path: '/App', name: 'app', component: App },
  { path: '/APCS', name: 'apcs', component: APCS },
  { path: "*", component: Index }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(MainApp),
}).$mount('#app')
