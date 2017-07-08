import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import OurServices from '@/components/OurServices'
import Accountant from '@/components/Accountant'
import PageNotFound from '@/components/PageNotFound'

// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue)
Vue.use(Router)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/services',
      name: 'OurServices',
      component: OurServices
    },
    {
      path: '/accountant',
      name: 'Accountant',
      component: Accountant
    },
    { path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})
