<template>
  <div>
       <nav  class="navbar navbar-fixed-top navbar-expand" style="background-color: #1d7ac9; list-style: none;">
  <div class="container-fluid" style="background-color: #1d7ac9;">
  <a class="navbar-brand"   >
  <img src="../assets/logoF1.png" alt="" width="194" height="80" >
</a>






  </div>

</nav>
  <br>
  
  <div class="jumbotron">
  <h1 class="display-4">Hello, {{this.activationDTO.email}}!</h1>
  <p class="lead">You have successfully verified your account.</p>
  <hr class="my-4">
  <p>Log in and start using Fisherman.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" @click="login" role="button">Go to login</a>
  </p>
  </div>
  </div>
  
</template>

<script>

import axios from "axios";

export default {
  name: "ConfirmEmail",
  data() {
    return {
       activationDTO:{
         activationCode: '',
         email: '',
       }
    };
  },
  mounted() {
    this.activationDTO.activationCode = this.$route.params.activationCode
    this.activationDTO.email = this.$route.params.email
     axios
     .post(process.env.VUE_APP_BACKEND_URL+"account/activate",this.activationDTO)
     .then((response) => {
      return response; 
     });


     
  },
  methods: {
    login: function(){
         this.$router.push('/login');
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>