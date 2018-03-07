<template>
  <div class="login">
    
      <h2>Register</h2>

     <img src="../assets/icons8-anonymous-mask-filled-100.png" height="100" width="100" alt="">
    <form action="">
        <input type="text" placeholder="Enter you mail">          
        <input type="text" placeholder="Enter you password">
        <input type="text" placeholder="Repeat password">
				<div>{{inc}}</div>
        <button type="submit" class="button" @click="">SIGN IN</button>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data () {
    return {
     
    }
  },
  methods: {
  	test: function(){
  		this.$store.commit('increment')
  	}
  },
  computed: {
  	inc: function(){
  		return this.$root.$store.state.count
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
    background: url("../assets/icons8-anonymous-mask-filled-100.png") no-repeat 3px 1px rgba(246, 243, 246, 0.7);
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


<!-- 
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Setup Firebase
var config = {
  apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
  authDomain: "vue-demo-537e6.firebaseapp.com",
  databaseURL: "https://vue-demo-537e6.firebaseio.com"
}
firebase.initializeApp(config)

var usersRef = firebase.database().ref('users')

// create Vue app
var app = new Vue({
  // element to mount to
  el: '#app',
  // initial data
  data: {
    newUser: {
      name: '',
      email: ''
    }
  },
  // firebase binding
  // https://github.com/vuejs/vuefire
  firebase: {
    users: usersRef
  },
  // computed property for form validation state
  computed: {
    validation: function () {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email)
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  // methods
  methods: {
    addUser: function () {
      if (this.isValid) {
        usersRef.push(this.newUser)
        this.newUser.name = ''
        this.newUser.email = ''
      }
    },
    removeUser: function (user) {
      usersRef.child(user['.key']).remove()
    }
  }
}) -->