<template>
  <div id="app">
    <start-screen></start-screen>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link> -->
    
  </div>
</template>

<script>

import StartScreen from './components/StartScreen.vue'

export default {
  components: {
    StartScreen
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
    background: url("./assets/body-bg.jpg")no-repeat top / cover;
    
  }
</style>
