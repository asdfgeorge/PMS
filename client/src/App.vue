<template>
  <Navbar />
  
  <router-view />
  

</template>

<script>
// import { mapActions } from 'pinia'
import Navbar from './components/Navbar.vue'

// import { useStore } from './stores/store.js'

export default {
  name: 'App',
  
  components: {
    Navbar: Navbar
  }, 

  // methods: {

  // }
}

</script>

<style>

</style>
