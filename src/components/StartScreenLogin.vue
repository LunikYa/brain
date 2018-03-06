<template>
  <div class="login">
  	
	    <h2>Log In</h2>

	   <img src="../assets/icons8-account-96.png" height="96" width="96" alt="">
		  <form action="">
		    <input type="text" placeholder="Email">
	   	    
		    <input type="text" placeholder="Password">

		    <button type="submit" class="button">LOGIN</button>
	    </form>
    
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    
  }
	h2{
		color: #fff;
		margin-bottom: 20px;
	}
  input{
    width: 280px;
    height: 40px;
    outline: none;
    margin-bottom: 30px;
    padding-left: 50px;
    border: 1px solid black;
    
    background: url(https://png.icons8.com/ultraviolet/1600/login-as-user.png) no-repeat 3px 1px rgba(246, 243, 246, 0.7);
    background-size: auto 90%;
  }
	
	.box-input{
		text-align: left;
	}

	.button{
		width: 150px;
    height: 40px;
    color: white;
    background-color: rgba(0, 119, 177, 0.6);
    border: none;
    cursor: pointer;
    opacity: 0.8;
    margin-top: 15px
	}
</style>
