<template>
  <div class="login">
    <h2>Register</h2>
    <img src="../assets/icons8-anonymous-mask-filled-100.png" height="100" width="100" alt="">
    <form action="" @submit.prevent="regUser">
      <input type="email" placeholder="Enter you mail" v-model="user.email">
      <input type="password" placeholder="Enter you password" v-model="user.password">
      <input type="password" placeholder="Repeat password" v-model="user.dblpass">
      <div v-if="error">Ошибка ептить</div>
      <div v-if="success" @click="go">Молодчага зареган норм!</div>
      <button type="submit" class="button">SIGN IN</button>
    </form>
    <!-- <ul is="transition-group">
    <li v-for="user in users" class="user" :key="user['.key']">
      <span>{{user.name}} - {{user.email}}</span>
      <button v-on:click="removeUser(user)">X</button>
    </li>
      </ul>
      <form id="form" v-on:submit.prevent="addUser">
    <input type="text" v-model="newUser.name" placeholder="Username">
    <input type="email" v-model="newUser.email" placeholder="email@email.com">
    <input type="submit" value="Add User">
      </form>
      <ul class="errors">
    <li v-show=" '!validation.name' ">Name cannot be empty.</li>
    <li v-show=" '!validation.email' ">Please provide a valid email address.</li>
      </ul> -->
  </div>
</template>

<script>
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var firebase = require("firebase/app");
export default {
  name: 'AppLogin',
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        dblpass: ''
      },

      // firebase: {
      //   users: usersRef
      // },
      

      error: false,
      success: false
    }
  },
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
    },

    regUser(){  
       if(this.user.password !== this.user.dblpass){
             this.error = true  
       } else{
        // console.log(firebase);
       firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.password)
        .then((resolve) =>{
          // this.$emit('reg','sign-in');
          this.success = true
        })
        .catch(error=>{
           this.signError= true;
        })
      }
    },
    go(){
      this.$router.push( {path:'/login'})
    }
  },
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


  body {
  font-family: Helvetica, Arial, sans-serif;
}

ul {
  padding: 0;
}

.user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all .40s ease;
}

.user:last-child {
  border-bottom: 1px solid #eee;
}

.v-enter, .v-leave-active {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}

.errors {
  color: #f00;
}


</style>

<!-- 
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
})-->
