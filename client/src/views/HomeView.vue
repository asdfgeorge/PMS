<template>

<div class="container">
  <h1>Welcome to ✨OnlyBays✨</h1>

  <noAuth v-if="!auth" />
  <authed v-else />

</div>

</template>

<script>
import noAuth from '../components/Landing.vue'
import authed from '../components/Dashboard.vue'

export default {
  name:"HomeView",

  components: {
    noAuth: noAuth,
    authed: authed
  },

  props: {
    auth:Boolean
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
