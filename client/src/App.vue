<template>
  <Navbar :auth="auth" />
  
  <router-view :auth="auth" />
  
  <button class="btn btn-success" @click="toggleAuth()">Toggle auth</button>

</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  
  components: {
    Navbar: Navbar
  }, 

  data() {
    return {
      auth: false
    }
  },

  methods: {
    toggleAuth() {
      this.auth = !this.auth
    }
  }
}

</script>

<style>

</style>
