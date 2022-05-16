<template>

  <div class="container">
    <h2>⚡Hello {{store.user.fname.charAt(0).toUpperCase() + store.user.fname.slice(1)}}⚡</h2>
    <button class="btn btn-danger" @click="logout()">Log Out</button>
  </div>

</template>

<script>
import { mapActions } from 'pinia'
import {useStore} from '../stores/store.js'

export default {
  name: 'authed',

  data() {
    return {
      store: useStore()
    }
  },

  methods: {
    ...mapActions(useStore, ['logout'])
  }
}
</script>

<style>

</style>