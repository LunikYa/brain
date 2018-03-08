// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
// import vuecss from 'vuetify/dist/vuetify.min.css'
import store from './store.js'
import VueFire from 'vuefire'

// import * as firebase from "firebase"

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/storage");

// Vue.use(VueFire)
// Vue.use(firebase)
Vue.use(Vuetify)

  var config = {
    apiKey: "AIzaSyCz-O0BI3hd3PM1fYeg7ogir_1c_3ALOUs",
    authDomain: "braine-66939.firebaseapp.com",
    databaseURL: "https://braine-66939.firebaseio.com",
    projectId: "braine-66939",
    storageBucket: "braine-66939.appspot.com",
    messagingSenderId: "478474870457"
  };
  firebase.initializeApp(config);
var usersRef = firebase.database().ref('users')

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const { app } = require('electron')
// app.on('ready', () => {
//   // ...
//   if (process.env.NODE_ENV !== 'production') {
//     require('vue-devtools').install()
//   }
//   // ...
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  firebase: {
    users: usersRef
  },
  components: { App },
  template: '<App/>'
})

