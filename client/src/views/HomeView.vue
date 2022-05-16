<template>

<div class="container">
  <div class="row" v-if="store.user === null" >
    <div class="col"><h1>Welcome to ✨OnlyBays✨</h1></div>
    <div class="col"> <noAuth /> </div>
  </div>
  
  <div v-else>
    <h1>Welcome to ✨OnlyBays✨</h1>
    <authed/>

  </div>

  

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
