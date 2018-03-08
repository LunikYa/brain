import Vue from 'vue'
import Router from 'vue-router'
import StartScreen from '../components/StartScreen.vue'
import StartScreenLogin from '../components/StartScreenLogin'
import StartScreenRegister from '../components/StartScreenRegister'
import Home from '../components/Home.vue'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
/*eslint-disable*/
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
      ]},
    {
      path: '/home',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/',
    //   name: "Home",
    //   component: Home,
    // }
  ]
})
