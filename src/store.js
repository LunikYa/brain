import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})


// <!-- 

// <template>
// <div id="app">
//     <start-screen></start-screen>
//     <img src="./assets/logo.png">
//     <router-link to="/login">Login</router-link>
//     <router-link to="/register">Register</router-link>
//     <router-view ></router-view>
//   </div>
// </template>

// <script>



// export default {
  

// }
// </script>

// <style>
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// body{
//     /*background: url("./assets/body-bg.jpg")no-repeat top / cover;*/
    
//   }
// </style>
//  -->