<template>

<div class="container">
  <h1>Welcome to ✨OnlyBays✨</h1>

  <noAuth v-if="!store.auth" />
  <authed v-else />
  
  <section class="w-100 p-4 d-flex justify-content-center pb-4">
      <form v-on:submit="SubmitLoginForm" style="width: 22rem;">
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control">
          <label class="form-label" for="form2Example1" style="margin-left: 0px;">Email address</label>
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 97.6px;"></div><div class="form-notch-trailing"></div></div></div>

        <!-- Password input -->
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control">
          <label class="form-label" for="form2Example2" style="margin-left: 0px;">Password</label>
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>

        <!-- Submit button -->
        <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
      </form>
    </section>

</div>

</template>

<script>
import noAuth from '../components/Landing.vue'
import authed from '../components/Dashboard.vue'

import { useStore } from '../stores/store.js'

export default {
  name:"HomeView",

  components: {
    noAuth: noAuth,
    authed: authed
  }, 

  SubmitLoginForm() {


  }


  data() {
    return {
      store: useStore()
    }
  }
}
</script>

<style>
  .container {
    margin-top: 25px;
  }
</style>
<!-- <h1>Welcome to ✨OnlyBays✨</h1>
<h3>This project stemmed from our deep hatred of never knowing where to park</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eius ad delectus tempore in non recusandae praesentium, odit doloribus eveniet omnis dolorem molestiae ipsam soluta voluptas mollitia amet beatae dolores.</p>  -->
