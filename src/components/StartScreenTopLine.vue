<template>
  <div class="top-line">
    <h1>Traine Braein</h1>
  </div>
</template>

<script>
export default {

  name: 'StartScreenTopLine',
  data () {
    return {
      it: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-line{
    width: 100%;
    height: 50px;
    background-color: grey;
    color: white;
    position: fixed;
    z-index: 999;
    top:0;
  }

  h1{
    font-size: 18px;
    font-family: Arial;
    font-weight: 600px;
  }
</style>
