<template>
  <div>
    <header>
      <start-screen-top-line></start-screen-top-line>
    </header>
    <div class="register">
      <router-link to="/login" >Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
     <!-- <StartScreenCarusel v-if=""></StartScreenCarusel> -->
      <div class="window-login">
      <transition name="modal" class="modal">
        <router-view ></router-view>
      </transition>
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
  .window-login{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    // max-width: 500px;
  }

  .register{
    margin-top: 50px;
  }
  StartScreenCarusel{
    margin: 0 auto;
  }


</style>

<!--  -->