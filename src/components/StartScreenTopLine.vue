<template>
  <div class="top-line">
    <h1>Traine Braine</h1>
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
    background-color: rgba(0, 119, 177, 0.6);
    color: white;
    position: fixed;
    z-index: 999;
    top:0;
  }

  h1{
    font-size: 18px;
    font-family: Arial;
    font-weight: 600px;
    margin-top: 10px;
  }
</style>
