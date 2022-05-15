<template>
  <Navbar />
  
  <router-view />
  
  <button class="btn btn-success" @click="toggleAuth()">Toggle auth</button>

</template>

<script>
import { mapActions } from 'pinia'
import Navbar from './components/Navbar.vue'

import { useStore } from './stores/store.js'

export default {
  name: 'App',
  
  components: {
    Navbar: Navbar
  }, 

  methods: {
    ...mapActions(useStore, ['toggleAuth'])
  }
}

</script>

<style>

</style>
