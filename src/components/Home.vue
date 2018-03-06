<template>
  <div>
    <header>
      <start-screen-top-line></start-screen-top-line>
    </header>
    <div class="register">
      <router-link to="/login" >Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
     <StartScreenCarusel v-if="actualy" ></StartScreenCarusel>
      <div class="window-login">
      <transition name="modal" class="modal">
        <router-view ></router-view>
      </transition>
      </div>
      
    
    
  </div>
</template>

<script>
import StartScreenLogin from './StartScreenLogin'
import StartScreenRegister from './StartScreenRegister'
import StartScreenTopLine from './StartScreenTopLine'
import StartScreenCarusel from './StartScreenCarusel'

export default {
  components: {
    StartScreenTopLine,
    StartScreenCarusel,
    StartScreenLogin,
    StartScreenRegister
  },
  name: 'StartScreen',
  data () {
    return {
      it: ''
    }
  },

  computed: {
    actualy: function(){
      return !(this.$root.$route.name == "StartScreenLogin" || this.$root.$route.name == "StartScreenRegister")
    }
  },

  watch: {
    '$route': function () {
//       // this.sendUserEvent ( this.$route.name )
//       // this.profile = this.$route.name === 'profile'
//       // this.posts = this.$route.name === 'posts'
      console.log(this.$root.$route)
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