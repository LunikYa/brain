import Vue from 'vue'
import Router from 'vue-router'
import StartScreen from '../components/StartScreen.vue'
import StartScreenLogin from '../components/StartScreenLogin'
import StartScreenRegister from '../components/StartScreenRegister'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartScreen',
      component: StartScreen,
      children: [
      {
        path: 'login',
        name: 'StartScreenLogin',
        component: StartScreenLogin
      },
      {
        path: 'register',
        name: 'StartScreenRegister',
        component: StartScreenRegister
      }
      ]
    }
    
  ]
})
