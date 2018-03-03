<template>
  <div class="login">
    <input type="text" placeholder="Тут">
    <input type="text" placeholder="Тут">
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data () {
    return {
      it: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    max-width: 600px;
    height: 400px;
    border: 1px solid black;
  }
</style>
