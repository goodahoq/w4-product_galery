import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'
import product from '../components/product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/home',
    name: 'home',
    component: home,
  }, {
    path: '/product',
    name: 'product',
    component: product,
  }]
})
