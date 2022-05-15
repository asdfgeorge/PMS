<template>
  <Navbar />
  
  <router-view />
  
  <button class="btn btn-success" @click="toggleAuth()">Toggle auth</button>
  <button class="btn btn-warning" @click="makeReq()">Make a request</button>

</template>

<script>
import { mapActions } from 'pinia'
import Navbar from './components/Navbar.vue'
import axios from 'axios'

import { useStore } from './stores/store.js'

export default {
  name: 'App',
  
  components: {
    Navbar: Navbar
  }, 

  methods: {
    ...mapActions(useStore, ['toggleAuth']),
    
    makeReq: async function() {
      const backend = axios.create({
        baseURL: 'http://localhost:5018',
        timeout: 1000,
        headers: {'Access-Control-Allow-Origin': '*'}
      })

      const res = await backend.get('/user')
      console.log(res)
    }

  }
}

</script>

<style>

</style>
