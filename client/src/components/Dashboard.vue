<template>
  <h2>You are logged in</h2>
  <button class="btn btn-danger" @click="logout()">Log Out</button>
</template>

<script>
import { mapActions } from 'pinia'
import {useStore} from '../stores/store.js'

export default {
  name: 'authed',

  methods: {
    ...mapActions(useStore, ['logout'])
  }
}
</script>

<style>

</style>