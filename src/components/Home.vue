<template>
  <div>
    <StartScreenTopLine/>
    <br>
    <br>
    <br>
    <hr>
    This is my home
  </div>
</template>

<script>
import StartScreenTopLine from './StartScreenTopLine'
export default {
 
  name: 'Home',
  data () {
    return {
      it: ''
    }
  },
  components:{
    StartScreenTopLine,
  },
  computed: {
    // actualy: function(){
    //   return !(this.$root.$route.name == "StartScreenLogin" || this.$root.$route.name == "StartScreenRegister")
    // }
  },

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