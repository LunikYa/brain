<template>
  <div>
    <header>
      <start-screen-top-line></start-screen-top-line>
    </header>
    <div class="register">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <StartScreenCarusel></StartScreenCarusel>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

import StartScreenTopLine from './StartScreenTopLine'
import StartScreenCarusel from './StartScreenCarusel'

export default {
  components: {
    StartScreenTopLine,
    StartScreenCarusel
  },
  name: 'StartScreen',
  data () {
    return {
      it: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .register{
    margin-top: 50px;
  }

  

</style>
