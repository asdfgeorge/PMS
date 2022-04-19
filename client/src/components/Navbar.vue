<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">✨OnlyBays✨</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" v-if="!auth">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="auth">
            <router-link class="nav-link" to="/book">Bookings</router-link>
          </li>
          <li class="nav-item" v-if="auth">
            <router-link class="nav-link" to="/account">My account</router-link>
          </li>
          <li class="nav-item">
            <button type="b" class="btn btn-success" @click="handleClick" v-if="!auth">Login</button>
            <button type="b" class="btn btn-success" @click="handleClick" v-else>Logout</button>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      auth: false
    }
  },
  methods: {
    handleClick() {
      this.auth = !this.auth
    }
  }
}
</script>

<style>

</style>