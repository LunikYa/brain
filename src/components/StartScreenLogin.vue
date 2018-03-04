<template>
  <div class="login">
    <h2>Login In</h2>
    <p>Login</p>
    <input type="text" placeholder="Там">
    <p>Password</p>
    <input type="text" placeholder="Там">
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
    width: 400px;
    height: 400px;
    border: 1px solid black;
    background-color: #fff;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    flex-direction: column;
    
  }

  input{
    width: 280px;
    height: 30px;
    margin-bottom: 15px;
  }
</style>
