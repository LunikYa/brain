import Vue from 'vue'
import Router from 'vue-router'
import StartScreenLogin from '../components/StartScreenLogin'
import StartScreenRegister from '../components/StartScreenRegister'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'StartScreenLogin',
      component: StartScreenLogin
    },
    {
      path: '/register',
      name: 'StartScreenRegister',
      component: StartScreenRegister
    }
  ]
})
