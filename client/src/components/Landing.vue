<template>
  <div class="container">
    
    <h2>You are not logged in</h2>
    <section class="w-100 d-flex mt-3">
      <form style="width: 22rem;" @submit.prevent="loginUser(loginForm)">
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" v-model="loginForm.email">
          <label class="form-label" for="form2Example1" style="margin-left: 0px;">Email address</label>
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 97.6px;"></div><div class="form-notch-trailing"></div></div></div>

        <!-- Password input -->
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" v-model="loginForm.pword">
          <label class="form-label" for="form2Example2" style="margin-left: 0px;">Password</label>
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
      </form>
    </section>

    <h1>{{loginForm.email}}</h1>
    <h1>{{loginForm.pword}}</h1>
  </div>
  
</template>

<script>
import { mapActions } from 'pinia'
import { useStore } from '../stores/store'
export default {
  name: 'noAuth',

  data() {
    return {
      
      loginForm: {
        email: '',
        pword: ''
      }
    }
  },

  methods: {
    ...mapActions(useStore, ['loginUser'])
  }

}
</script>

<style>
  
</style>