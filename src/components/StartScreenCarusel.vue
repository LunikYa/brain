

<template>
  <div>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="fade"
      reverse-transition="fade"
    ></v-carousel-item>
  </v-carousel>
  <img src="../assets/bg-slide-2.jpg" height="168" width="300" alt="">
  </div>
</template>

<script>

export default {
  // components: {
  //   StartScreenCarusel
  // },
  name: 'StartScreenCarusel',
  data () {
    return {
      it: '',
      items: [
          {
            src: '../assets/bg-slide-1.jpg'
          },
          {
            src: '../assets/bg-slide-2.jpg'
          },
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
  #carousel-view{
    
      .fade-enter-active, .fade-leave-active, .fade-leave-to{
        transition: .3s ease-out;
        position: absolute;
        top: 0;
        left: 0;
      }
      .fade-enter, .fade-leave, .fade-leave-to{
        opacity: 0;
      }
  }
</style>
