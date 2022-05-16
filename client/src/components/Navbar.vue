<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">

    <a class="navbar-brand" href="#">✨OnlyBays✨</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link>
        </li>
        <li class="nav-item" v-if="store.user === null">
          <router-link to="/register" class="nav-link">Sign Up</router-link>
        </li>
        <li class="nav-item" v-if="!(store.user === null)">
        <router-link to="/book" class="nav-link">Bookings</router-link>
      </li>
      <li class="nav-item" v-if="store.user !== null && store.user.isAdmin">
        <router-link to="/admin" class="nav-link">Manage Parking</router-link>
      </li>
      </ul>

      
    
    </div>

  </div>
</nav>
</template>

<script>
import { useStore } from '../stores/store.js'

export default {
  data() {
    return {
      store: useStore()
    }
  }
} 
</script>

<style>

</style>