// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ShowPlay from './components/ShowPlay'
import Mains from './components/Mains'
import Menus from './components/Menus'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {name: 'showplay', path: '/showplay', component: ShowPlay},
    {name: 'mains', path: '/mains', component: Mains},
    {name: 'menus', path: '/menus', component: Menus}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
