import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import Home from '@/views/login/index'
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
